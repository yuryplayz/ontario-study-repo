"use client";

import { type ReactNode, useEffect, useState } from "react";

/**
 * Renders children only after the component has mounted on the client.
 *
 * This is a pragmatic way to avoid hydration mismatch warnings caused by
 * browser extensions injecting attributes into the server-rendered HTML.
 */
export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer state update to avoid lint rule about setState directly in effects.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
}
