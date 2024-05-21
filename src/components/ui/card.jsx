import * as React from "react";

import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const cardVariants = cva("rounded border p-3 pt-1 flex flex-wrap gap-3", {
  variants: {
    variant: {
      error: "border-s-4 border-red-300",
      warning: "border-s-4 border-amber-300",
      default: "border-dwBlack-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Card = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant, className }))}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 w-full", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "justify-between items-center inline-flex text-black text-base font-semibold leading-none  min-h-8 -mb-0.5",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("pt-0 text-base text-dwBlack-1000 font-normal", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex gap-2 px-3 py-2 bg-dwGreen-500/10 border-l-2 border-l-dwGreen-300 w-fit text-xs", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center w-full", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
