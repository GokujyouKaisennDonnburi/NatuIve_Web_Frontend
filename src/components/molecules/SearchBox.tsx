import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchBoxProps = {
  placeholder?: string;
};

export function SearchBox({ placeholder = "検索" }: Readonly<SearchBoxProps>) {
  const inputId = "search-box-input";

  return (
    <div className="relative block">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <label htmlFor={inputId} className="sr-only">
        {placeholder}
      </label>
      <Input id={inputId} className="pl-10" placeholder={placeholder} />
    </div>
  );
}
