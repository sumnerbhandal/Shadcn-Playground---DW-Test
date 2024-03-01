import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card.jsx";
import { Button } from "./components/ui/button";
import {
  Sparkles,
  MoveUpRight,
  AlertTriangle,
  Info,
  CheckCircle2,
  Trash2,
} from "lucide-react";

export default function IssueCardDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <h2 className="text-3xl font-semibold basis-full pb-3">Issue Card</h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card variant="error">
          <CardHeader>
            <CardTitle>
              <div className="justify-start items-center gap-2 inline-flex">
                <AlertTriangle className="h-4 w-4" />
                Payment Terms
              </div>
              <Trash2 className="h-4 w-4 stroke-dwGreen-700" />
            </CardTitle>
            <CardDescription>
              The aggregate fee is listed as 'USD AAA,000' which appears to be a
              placeholder. This needs to be clarified to avoid any
              misunderstanding or dispute over the fee amount.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-2">
            <Button variant="secondary" size="sm">
              Generate Solution
              <Sparkles className="h-3.5 w-3.5" />
            </Button>
            <Button variant="secondary" size="sm">
              Jump To
              <MoveUpRight className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>
        <Card variant="warning">
          <CardHeader>
            <CardTitle>
              <div className="justify-start items-center gap-2 inline-flex">
                <AlertTriangle className="h-4 w-4" />
                Payment Terms
              </div>
              <Trash2 className="h-4 w-4 stroke-dwGreen-700" />
            </CardTitle>
            <CardDescription>
              The aggregate fee is listed as 'USD AAA,000' which appears to be a
              placeholder. This needs to be clarified to avoid any
              misunderstanding or dispute over the fee amount.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-2">
            <Button variant="secondary" size="sm">
              Generate Solution
              <Sparkles className="h-3.5 w-3.5" />
            </Button>
            <Button variant="secondary" size="sm">
              Jump To
              <MoveUpRight className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="justify-start items-center gap-2 inline-flex">
                <Info className="h-4 w-4" />
                Payment Terms
              </div>
              <Trash2 className="h-4 w-4 stroke-dwGreen-700" />
            </CardTitle>
            <CardDescription>
              The aggregate fee is listed as 'USD AAA,000' which appears to be a
              placeholder. This needs to be clarified to avoid any
              misunderstanding or dispute over the fee amount.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-2">
            <Button variant="secondary" size="sm">
              Generate Solution
              <Sparkles className="h-3.5 w-3.5" />
            </Button>
            <Button variant="secondary" size="sm">
              Jump To
              <MoveUpRight className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
