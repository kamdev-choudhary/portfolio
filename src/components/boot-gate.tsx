"use client";

import * as React from "react";
import { BootSequence, useShouldBoot } from "@/components/boot-sequence";

/** Renders the boot overlay on the first view of a session, then unmounts it. */
export function BootGate() {
  const shouldBoot = useShouldBoot();
  const [done, setDone] = React.useState(false);
  const finish = React.useCallback(() => setDone(true), []);

  if (!shouldBoot || done) return null;
  return <BootSequence onDone={finish} />;
}
