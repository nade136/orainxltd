"use client";

import { usePathname } from "next/navigation";
import { PremiumCursor } from "./premium-cursor";

export default function ConditionalPremiumCursor() {
  const pathname = usePathname();

  // Hide premium cursor on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <PremiumCursor />;
}

