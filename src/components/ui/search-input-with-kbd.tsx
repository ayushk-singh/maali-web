import { Input } from "@/components/ui/input";

function InputDemo() {
  return (
    <div className="space-y-2 w-[300px]">
      <div className="relative">
        <Input id="input-25" className="rounded-2xl m-10 pe-11" placeholder="Search..." type="search" />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
          <kbd className="inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}

export { InputDemo };
