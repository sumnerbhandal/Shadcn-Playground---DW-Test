import { Button } from "./components/ui/button";
import "./styles.css";

import { useState } from "react";
import { Info, Sparkles } from "lucide-react";

export default function Buttons() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 md:p-8 app-container">
      <div className="demo-section basis-full flex-wrap gap-4">
        <h2 className="text-3xl font-semibold basis-full pb-3">Buttons</h2>
        <div className="demo-section basis-full flex-wrap gap-4">
          <h3 className="text-xl basis-full">AI</h3>
          <Button variant="ai">Button</Button>
          <Button variant="ai" disabled>
            Disabled
          </Button>
          <Button variant="ai">
            <Sparkles className="h-4 w-4" />
            Icon Left
          </Button>
          <Button variant="ai">
            Icon Right
            <Sparkles className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ai">
            <Sparkles className="h-4 w-4" />
          </Button>

          <Button size="sm" variant="ai">
            Button
          </Button>
          <Button size="sm" variant="ai" disabled>
            Disabled
          </Button>
          <Button size="sm" variant="ai">
            <Sparkles className="h-3.5 w-3.5" />
            Icon Left
          </Button>
          <Button size="sm" variant="ai">
            Icon Right
            <Sparkles className="h-3.5 w-3.5" />
          </Button>
          <Button size="iconSm" variant="ai">
            <Info className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4">
          <h3 className="text-xl basis-full">Default</h3>
          <Button>Button</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <Info className="h-4 w-4" />
            Icon Left
          </Button>
          <Button>
            Icon Right
            <Info className="h-4 w-4" />
          </Button>
          <Button size="icon">
            <Info className="h-4 w-4" />
          </Button>
          
          <Button size="sm">
            Button
          </Button>
          <Button size="sm" disabled>
            Disabled
          </Button>
          <Button size="sm">
            <Info className="h-3.5 w-3.5" />
            Icon Left
          </Button>
          <Button size="sm">
            Icon Right
            <Info className="h-3.5 w-3.5" />
          </Button>
          <Button size="iconSm">
            <Info className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4 py-2">
          <h3 className="text-xl basis-full">Secondary</h3>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="secondary">
            <Info className="h-4 w-4" />
            Icon Left
          </Button>
          <Button variant="secondary">
            Icon Right
            <Info className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <Info className="h-4 w-4" />
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4 py-2">
          <h3 className="text-xl basis-full">Outline</h3>
          <Button variant="outline">Button</Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
          <Button variant="outline">
            <Info className="h-4 w-4" />
            Icon Left
          </Button>
          <Button variant="outline">
            Icon Right
            <Info className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Info className="h-4 w-4" />
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4 py-2">
          <h3 className="text-xl basis-full">Ghost</h3>
          <Button variant="ghost">Button</Button>
          <Button variant="ghost" disabled>
            Disabled
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4 py-2">
          <h3 className="text-xl basis-full">Destructive</h3>
          <Button variant="destructive">Button</Button>
          <Button variant="destructive" disabled>
            Disabled
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4 py-2">
          <h3 className="text-xl basis-full">Link</h3>
          <Button variant="link">Link</Button>
          <Button variant="link" disabled>
            Disabled
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4 py-2">
          <h3 className="text-xl basis-full">Block Link</h3>
          <Button variant="blockLink">Block Link</Button>
          <Button variant="blockLink" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
}
