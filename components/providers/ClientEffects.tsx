"use client";

import dynamic from "next/dynamic";

const CursorRipple = dynamic(
  () => import("@/components/ui/CursorRipple"),
  { ssr: false }
);

const ScrollProgress = dynamic(
  () => import("@/components/ui/ScrollProgress"),
  { ssr: false }
);

export default function ClientEffects() {
  return (
    <>
      <CursorRipple />
      <ScrollProgress />
    </>
  );
}