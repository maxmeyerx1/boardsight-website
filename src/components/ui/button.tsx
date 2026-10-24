import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primär auf hellem Grund
        default: "bg-brand-700 text-white shadow-sm hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-md",
        // Primär auf dunklem Grund
        accent: "bg-accent-400 text-brand-900 shadow-sm hover:-translate-y-0.5 hover:bg-white hover:shadow-md",
        // Sekundär auf dunklem Grund
        outlineLight: "border border-white/40 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10",
        // Sekundär auf hellem Grund
        outline: "border border-brand-700/30 text-brand-700 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700/5",
        ghost: "text-brand-700 hover:bg-brand-700/5",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
