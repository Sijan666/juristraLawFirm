import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-20">
      <Container className="text-center max-w-md">
        <p className="text-base font-semibold text-[#611422]">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-4 text-base text-gray-600">
          The page you are looking for does not exist.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#5B1621] px-4 py-2 font-medium text-white transition hover:bg-[#471019]"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
