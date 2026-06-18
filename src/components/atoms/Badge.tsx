import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent" | "subtle";
};

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "bg-slate-900 text-white",
  accent: "bg-teal-950 text-white",
  subtle: "bg-teal-100 text-teal-900",
};

export function Badge({
  className,
  tone = "default",
  ...props
}: Readonly<BadgeProps>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
