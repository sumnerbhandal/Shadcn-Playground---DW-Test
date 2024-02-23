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

import Buttons from "./Buttons";

import { useState } from "react";
import { Info, Sparkles } from "lucide-react";
import CardDemo from "./Card";

export default function App() {
  return (
    <div>
      <Buttons />
      <CardDemo />
    </div>
  );
}
