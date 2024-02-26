import React from "react";

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
  Flag,
  FlagOff,
  PlusSquare,
  MinusSquare,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/collapsible.jsx";
import { Textarea } from "./components/ui/textarea";

export default function CompareCardDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

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
      <h2 className="text-3xl font-semibold basis-full pb-3">Compare Card</h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <Card variant="error">
            <CollapsibleTrigger className="cursor-pointer" asChild>
              <CardHeader>
                <CardTitle>
                  <div className="justify-start items-center gap-2 inline-flex">
                    <AlertTriangle className="h-4 w-4" />
                    Payment Terms Expand
                  </div>
                  {isOpen ? (
                    <MinusSquare className="h-4 w-4" />
                  ) : (
                    <PlusSquare className="h-4 w-4" />
                  )}
                </CardTitle>
                <CardDescription>
                  The aggregate fee is listed as 'USD AAA,000' which appears to
                  be a placeholder. This needs to be clarified to avoid any
                  misunderstanding or dispute over the fee amount.
                </CardDescription>
              </CardHeader>
            </CollapsibleTrigger>

            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm">
                Mark as Important
                <Flag className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="sm">
                Jump To
                <MoveUpRight className="h-3.5 w-3.5" />
              </Button>
            </CardFooter>
            <CollapsibleContent className="space-y-2 CollapsibleContent">
              <hr className="my-3" />
              <p className="text-sm text-dwBlack-1000 font-medium">
                Showing comparison as
              </p>
              <div className="flex gap-4 text-sm text-dwBlack-1000">
                <div className="flex gap-2 align-middle">
                  <input type="radio" />
                  <p>Source</p>
                </div>
                <div className="flex gap-2 align-middle">
                  <input type="radio" />
                  <p>Redline</p>
                </div>
                <div className="flex gap-2 align-middle">
                  <input type="radio" />
                  <p>AI Summary</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 text-sm text-dwBlack-1000">
                <label className="font-medium" for="Reference-Document">
                  Reference Document
                </label>
                <input
                  id="Reference-Document"
                  className="w-full p-3 border border-dwBlack-300 rounded"
                  type="textarea"
                  value="The payment terms in this contract require net 30 days."
                />
                <div className="w-full pt-1 flex justify-end">
                  <Button variant="ai">
                    Insert Clause
                    <Sparkles className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 text-sm text-dwBlack-1000">
                <div className="flex justify-between items-center w-full">
                  <label
                    className="font-medium"
                    for="Working-Document"
                    className="font-medium"
                  >
                    Working Document
                  </label>
                  {/* <Button variant="blockLink">Jump to reference</Button> */}
                </div>
                <input
                  id="Working-Document"
                  className="w-full p-3 border border-dwBlack-300 rounded"
                  type="textarea"
                  value="The payment terms in this contract require net 30 days."
                />
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>
        <Card variant="error">
          <CardHeader>
            <CardTitle>
              <div className="justify-start items-center gap-2 inline-flex">
                <Flag className="h-4 w-4" />
                <AlertTriangle className="h-4 w-4" />
                Payment Terms
              </div>
              <Flag className="h-4 w-4" />
            </CardTitle>
            <CardDescription>
              The aggregate fee is listed as 'USD AAA,000' which appears to be a
              placeholder. This needs to be clarified to avoid any
              misunderstanding or dispute over the fee amount.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-2">
            <Button variant="outline" size="sm">
              Remove as Important
              <FlagOff className="h-3.5 w-3.5" />
            </Button>
            <Button variant="outline" size="sm">
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
              <CheckCircle2 className="h-4 w-4 stroke-dwGreen-700" />
            </CardTitle>
            <CardDescription>
              The aggregate fee is listed as 'USD AAA,000' which appears to be a
              placeholder. This needs to be clarified to avoid any
              misunderstanding or dispute over the fee amount.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-2">
            <Button variant="outline" size="sm">
              Generate Solution
              <Sparkles className="h-3.5 w-3.5" />
            </Button>
            <Button variant="outline" size="sm">
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
              <CheckCircle2 className="h-4 w-4 stroke-dwGreen-700" />
            </CardTitle>
            <CardDescription>
              The aggregate fee is listed as 'USD AAA,000' which appears to be a
              placeholder. This needs to be clarified to avoid any
              misunderstanding or dispute over the fee amount.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-2">
            <Button variant="outline" size="sm">
              Generate Solution
              <Sparkles className="h-3.5 w-3.5" />
            </Button>
            <Button variant="outline" size="sm">
              Jump To
              <MoveUpRight className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
