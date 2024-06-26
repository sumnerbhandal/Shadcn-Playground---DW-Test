import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded text-sm gap-1.5 font-semibold leading-tight tracking-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ai: "bg-white shadow-[inset_0px_2px_2px_rgba(255,255,255,0.6)] bg-gradient-to-br from-dwGreen-100/40 from-20% via-dwGreen-100/30 via-30% to-white to-80% border border-dwGreen-100 border-l-dwGreen-200 border-t-dwGreen-200 text-dwGreen-900 hover:bg-dwGreen-700/20",
        default: "bg-dwGreen-700 text-primary-foreground hover:bg-dwGreen-800",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-dwBlack-300 bg-background hover:bg-accent hover:bg-dwBlack-100",
        secondary: "bg-dwBlack-100 text-dwBlack-1100 hover:bg-dwBlack-200",
        ghost:
          "text-dwBlack-1100 hover:bg-dwBlack-100/50 hover:text-accent-foreground",
        link: "text-dwGreen-700 underline-offset-4 underline text-sm hover:text-dwGreen-800 font-normal",
        blockLink:
          "text-dwGreen-700 text-sm text-sm hover:text-dwGreen-800",
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-7 px-2 text-xs",
        lg: "h-11 px-4",
        icon: "h-9 w-9",
        iconSm: "h-7 w-7"   
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
