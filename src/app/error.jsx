"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex flex-1 items-center justify-center py-20">
      <Container className="text-center max-w-md">
        <p className="text-base font-semibold text-red-600">Error</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Something went wrong
        </h1>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
          An unexpected error occurred. You can try reloading the page.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => reset()}>Try Again</Button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 font-medium text-gray-900 transition hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            Go Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
