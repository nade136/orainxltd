"use client";

import { usePathname } from "next/navigation";
import { ScrollProgress } from "./scroll-progress";

export default function ConditionalScrollProgress() {
  const pathname = usePathname();

  // Hide scroll progress on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <ScrollProgress />;
}

