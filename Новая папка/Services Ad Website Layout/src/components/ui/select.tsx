"use client";

import * as React from "react";
import { cn } from "./utils";

// Simple Select Implementation
interface SelectContextType {
  value?: string;
  onValueChange?: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextType | undefined>(undefined);

function useSelectContext() {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within a Select");
  }
  return context;
}

function Select({
  value,
  onValueChange,
  children,
  ...props
}: {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className="relative" {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const { open, setOpen } = useSelectContext();

  return (
    <button
      type="button"
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-9",
        className,
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="6,9 12,15 18,9" />
      </svg>
    </button>
  );
}

function SelectValue({
  placeholder,
  ...props
}: {
  placeholder?: string;
} & React.ComponentProps<"span">) {
  const { value } = useSelectContext();
  
  return (
    <span {...props}>
      {value || placeholder}
    </span>
  );
}

function SelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { open, setOpen } = useSelectContext();

  if (!open) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "absolute top-full left-0 z-50 w-full mt-1 bg-popover border rounded-md shadow-md max-h-60 overflow-auto",
          className,
        )}
        {...props}
      >
        <div className="p-1">
          {children}
        </div>
      </div>
    </>
  );
}

function SelectItem({
  className,
  children,
  value,
  ...props
}: {
  value: string;
  children: React.ReactNode;
} & React.ComponentProps<"div">) {
  const { value: selectedValue, onValueChange, setOpen } = useSelectContext();

  const handleClick = () => {
    onValueChange?.(value);
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "relative flex w-full cursor-pointer items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
        selectedValue === value && "bg-accent text-accent-foreground",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {selectedValue === value && (
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <polyline points="20,6 9,17 4,12" />
          </svg>
        </span>
      )}
    </div>
  );
}

export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
};