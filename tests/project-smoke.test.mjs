import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";
import { createServer } from "node:net";
import path from "node:path";

let server;
let baseUrl;

async function getAvailablePort() {
  const listener = createServer();
  await new Promise((resolve, reject) => {
    listener.once("error", reject);
    listener.listen(0, "127.0.0.1", resolve);
  });
  const { port } = listener.address();
  await new Promise((resolve, reject) => {
    listener.close((error) => (error ? reject(error) : resolve()));
  });
  return port;
}

before(async () => {
  const port = await getAvailablePort();
  baseUrl = `http://127.0.0.1:${port}`;
  server = spawn(
    process.execPath,
    [
      path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next"),
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    { cwd: process.cwd(), stdio: "ignore" }
  );

  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(
        `Next.js production server exited with code ${server.exitCode}`
      );
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The server may not have bound its port yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  server.kill();
  throw new Error("Next.js production server did not start within 30 seconds");
});

after(() => {
  if (server && server.exitCode === null) server.kill();
});

test("all public pages return successfully", async () => {
  for (const route of [
    "/",
    "/about",
    "/lawyers",
    "/contact",
    "/services",
    "/privacy-policy",
    "/terms",
  ]) {
    const response = await fetch(new URL(route, baseUrl));
    assert.equal(response.status, 200, `${route} should return HTTP 200`);
  }
});

test("sitemap includes every static page and lawyer profile", async () => {
  const response = await fetch(new URL("/sitemap.xml", baseUrl));
  assert.equal(response.status, 200);
  const sitemap = await response.text();

  for (const route of [
    "/",
    "/about",
    "/lawyers",
    "/contact",
    "/services",
    "/privacy-policy",
    "/terms",
  ]) {
    assert.ok(
      sitemap.includes(`https://juristra.com${route}`),
      `${route} should be in the sitemap`
    );
  }

  assert.ok(sitemap.includes("/lawyers/albert-flores"));
});

test("contact form labels and FAQ navigation are accessible", async () => {
  const response = await fetch(new URL("/contact", baseUrl));
  const page = await response.text();

  for (const id of [
    "contact-name",
    "contact-email",
    "contact-phone",
    "preferred-time",
    "practice-area",
    "case-summary",
  ]) {
    assert.ok(page.includes(`for="${id}"`), `label should target ${id}`);
    assert.ok(page.includes(`id="${id}"`), `form control ${id} should exist`);
  }

  assert.ok(page.includes('id="faq"'));
  assert.ok(page.includes('aria-controls="faq-answer-0"'));
  assert.ok(page.includes('aria-expanded="true"'));
});

test("required local images are served", async () => {
  for (const asset of [
    "/bannerImage.png",
    "/journey.png",
    "/trustedOrganizartions/logo%20(2).png",
    "/trustedOrganizartions/logo%20(3).png",
    "/trustedOrganizartions/logo%20(4).png",
    "/trustedOrganizartions/logo%20(5).png",
    "/trustedOrganizartions/logo%20(6).png",
  ]) {
    const response = await fetch(new URL(asset, baseUrl));
    assert.equal(response.status, 200, `${asset} should return HTTP 200`);
  }
});
