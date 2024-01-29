import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded text-xs tracking-wide font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ai: "bg-white bg-gradient-to-br from-dwGreen-100/40 to-white border border-dwGreen-700 border-l-dwGreen-200 border-t-dwGreen-200 text-dwGreen-700 hover:bg-dwGreen-700/30",
        default: "bg-dwGreen-700 text-primary-foreground hover:bg-dwGreen-800",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-dwBlack-1200 bg-background hover:bg-accent hover:bg-dwBlack-100",
        secondary: "bg-dwBlack-100 text-dwBlack-1200 hover:bg-dwBlack-200",
        ghost:
          "text-dwBlack-1200 hover:bg-dwBlack-100/50 hover:text-accent-foreground",
        link: "text-dwGreen-700 underline-offset-4 underline text-sm tracking-normal hover:text-dwGreen-800",
        blockLink:
          "text-dwGreen-700 text-sm text-sm tracking-normal hover:text-dwGreen-800",
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-8 px-3",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
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

export { Button, buttonVariants };
