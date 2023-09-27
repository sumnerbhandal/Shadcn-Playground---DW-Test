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

export default function App() {
  return (
    <Dialog>
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
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Do you want to delete the entry? Deleting this entry cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </DropdownMenu>
    </Dialog>
  );
}
