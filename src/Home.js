import { Button } from "./components/ui/button";
import "./styles.css";

import { useState } from "react";
import { Info, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 md:p-8 app-container">
      <div className="demo-section basis-full flex-wrap gap-4">
        <h2 className="text-3xl font-semibold basis-full pb-3">Home</h2>
            <div className="demo-section basis-full flex-wrap gap-4">
                <div className="border border-dwGreen-100 border-l-dwGreen-200 border-t-dwGreen-200 rounded min-h-12 px-3 py-2 flex gap-2 justify-between w-[298px]">
                    <input className="text-sm placeholder:text-dwBlack-900 h-full w-full"  placeholder="What can we help you with?" />
                            <Button variant="ai">
                        Ask
                        <Sparkles className="h-4 w-4" />
                    </Button>
                </div>
            </div>
      </div>
    </div>
  );
}
