import "./styles.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  dialogClose,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { useState } from "react";
import { Info } from "lucide-react";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "1rem",
        padding: "4rem",
      }}
    >
      <div className="demo-section basis-full flex-wrap gap-4">
        <h2 className="text-3xl font-semibold basis-full pb-3">Buttons</h2>
        <div className="demo-section basis-full flex-wrap gap-4">
          <h3 className="text-xl basis-full">AI</h3>
          <Button variant="ai">Button</Button>
          <Button variant="ai" disabled>
            Disabled
          </Button>
          <Button variant="ai">
            <Info className="mr-2 h-4 w-4" />
            Icon Left
          </Button>
          <Button variant="ai">
            Icon Right
            <Info className="ml-2 h-4 w-4" />
          </Button>
          <Button size="icon" variant="ai">
            <Info className="h-4 w-4" />
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4">
          <h3 className="text-xl basis-full">Default</h3>
          <Button>Button</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <Info className="mr-2 h-4 w-4" />
            Icon Left
          </Button>
          <Button>
            Icon Right
            <Info className="ml-2 h-4 w-4" />
          </Button>
          <Button size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </div>
        <div className="demo-section basis-full flex-wrap gap-4 py-2">
          <h3 className="text-xl basis-full">Secondary</h3>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="secondary">
            <Info className="mr-2 h-4 w-4" />
            Icon Left
          </Button>
          <Button variant="secondary">
            Icon Right
            <Info className="ml-2 h-4 w-4" />
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
            <Info className="mr-2 h-4 w-4" />
            Icon Left
          </Button>
          <Button variant="outline">
            Icon Right
            <Info className="ml-2 h-4 w-4" />
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
      {/* <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <p>Trigger</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Edit Entry</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => console.log("Navigate to edit page")}
            >
              Edit
            </DropdownMenuItem>
            <DialogTrigger>
              <DropdownMenuItem>Button</DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                Do you want to Button the entry? Deleting this entry cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Button</Button>
            </DialogFooter>
          </DialogContent>
        </DropdownMenu>
      </Dialog> */}
    </div>
  );
}
