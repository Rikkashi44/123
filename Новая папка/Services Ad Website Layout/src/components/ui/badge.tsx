import * as React from "react";
import { cn } from "./utils";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.ComponentProps<"span"> {
  variant?: BadgeVariant;
}

const getVariantClasses = (variant: BadgeVariant = "default") => {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    destructive: "border-transparent bg-destructive text-white",
    outline: "text-foreground border-current",
  };
  return variants[variant];
};

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap";
  const variantClasses = getVariantClasses(variant);

  return (
    <span
      className={cn(baseClasses, variantClasses, className)}
      {...props}
    />
  );
}

export { Badge };