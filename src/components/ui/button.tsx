import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-medium transition-[background-color,color,border-color,transform,opacity] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-[var(--color-primary-fg)] hover:bg-[var(--color-primary-hover)] shadow-[var(--shadow-sm)]",
        secondary:
          "bg-[var(--color-bg-elevated)] text-[var(--color-fg)] border border-[var(--color-border-strong)] hover:bg-[var(--color-bg-subtle)]",
        outline:
          "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-primary-soft)]",
        ghost:
          "text-[var(--color-fg)] hover:bg-[var(--color-bg-subtle)]",
        ink: "bg-[var(--color-bg-ink)] text-[var(--color-fg-on-ink)] hover:bg-[var(--color-bg-ink-elevated)]",
        link: "text-[var(--color-primary)] underline-offset-4 hover:underline px-0",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-[var(--radius-sm)] px-3.5 text-sm",
        lg: "h-12 rounded-[var(--radius-md)] px-7 text-base",
        icon: "h-11 w-11",
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
