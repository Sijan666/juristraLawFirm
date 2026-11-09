import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple Tailwind and standard class names together safely without conflicts.
 * @param {...(string|boolean|undefined|null|Record<string, boolean>)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
