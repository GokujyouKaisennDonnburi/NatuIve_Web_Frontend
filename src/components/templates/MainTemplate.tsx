import type { ReactNode } from "react";

export function MainTemplate({ children }: Readonly<{ children: ReactNode }>) {
  return <main className="space-y-8">{children}</main>;
}
