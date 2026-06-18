import { Loader2 } from "lucide-react";

type LoadingProps = {
  label?: string;
};

export function Loading({ label = "Loading" }: Readonly<LoadingProps>) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <Loader2 className="h-4 w-4 animate-spin text-teal-700" />
      <span>{label}</span>
    </div>
  );
}
