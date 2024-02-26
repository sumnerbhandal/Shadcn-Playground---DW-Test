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
import IssueCardDemo from "./Issue-Card";
import CompareCardDemo from "./Compare-Card";

export default function App() {
  return (
    <div>
      <Buttons />
      <IssueCardDemo />
      <CompareCardDemo />
    </div>
  );
}
