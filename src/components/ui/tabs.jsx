"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "../../lib/utils"
import { cva } from "class-variance-authority";


const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex gap-1 h-10 items-center justify-center rounded-md p-1 text-dwBlack-1200 ",
      className
    )}
    {...props}
  />
));

// TabsList.displayName = TabsPrimitive.List.displayName

TabsList.displayName = "TabsList";


const TabsTrigger = React.forwardRef(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center bg-dwBlack-100 border border-dwBlack-200 whitespace-nowrap box-border rounded-full h-7 px-2.5 py-1.5 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:bg-dwGreen-900 data-[state=active]:border-dwGreen-900",
      className
    )}
    {...props}
  />
));

TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.TabsContent
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));

TabsContent.displayName = "TabsContent";


export { Tabs, TabsList, TabsTrigger, TabsContent }