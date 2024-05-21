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
  Trash2,
  CheckCheck,
  FileQuestion,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/collapsible.jsx";

const object = {
  item1: {
    icon: <FileQuestion className="h-4 w-4" />,
    name: "Payment Terms",
    variant: "error",
    showDescription: true,
    description: "The aggregate fee is listed as 'USD AAA,000' is missing.",
    showRedline: false,
    workingDocText: "The payment terms in this contract require net 30 days.",
  },
  item2: {
    icon: <Info className="h-4 w-4" />,
    name: "Payment Terms",
    variant: "warning",
    showDescription: true,
    description:
      "The aggregate fee is listed as 'USD AAA,000' which appears to be a placeholder. This needs to be clarified to avoid anymisunderstanding or dispute over the fee amount.",
    showRedline: true,
    workingDocText: "The payment terms in this contract require net 30 days.",
  },
  item3: {
    icon: <CheckCheck className="h-4 w-4" />,
    name: "Payment Terms",
    showDescription: false,
    showRedline: true,
    description: "Matches",
    workingDocText: "The payment terms in this contract require net 30 days.",
  },
};

export default function CompareCardDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-wrap items-start gap-4 p-4 md:p-8 app-container fade-in">
      <h2 className="text-3xl font-semibold basis-full pb-3">Compare Card</h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Object.keys(object).map((key) => {
          const item = object[key];
          return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen} key={key}>
              <Card variant={item.variant}>
                <CollapsibleTrigger className="cursor-pointer" asChild>
                  <CardHeader>
                    <CardTitle>
                      <div className="justify-start items-center gap-2 inline-flex">
                        {item.icon} {item.name}
                      </div>
                      {isOpen ? (
                        <MinusSquare className="h-4 w-4" />
                      ) : (
                        <PlusSquare className="h-4 w-4" />
                      )}
                    </CardTitle>
                    {item.showDescription ? (
                      <CardDescription>{item.description}</CardDescription>
                    ) : null}
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
                <CollapsibleContent className="space-y-2 CollapsibleContent w-full">
                  <hr className="my-3" />
                  <p className="text-sm text-dwBlack-800 font-medium">
                    Showing comparison as
                  </p>
                  <div className="flex gap-4 text-sm text-dwBlack-1000">
                    <div className="flex gap-2 align-middle">
                      <input type="radio" />
                      <p>Source</p>
                    </div>
                    {item.showRedline ? (
                      <div className="flex gap-2 align-middle">
                        <input type="radio" />
                        <p>Redline</p>
                      </div>
                    ) : null}
                    <div className="flex gap-2 align-middle">
                      <input type="radio" />
                      <p>AI Summary</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-3 text-sm text-dwBlack-800">
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
                  <div className="flex flex-wrap gap-2 pt-3 text-sm text-dwBlack-800">
                    <div className="flex justify-between items-center w-full">
                      <label
                        className="font-medium"
                        for="Working-Document"
                      >
                        Working Document
                      </label>
                      {/* <Button variant="blockLink">Jump to reference</Button> */}
                    </div>
                    <input
                      id="Working-Document"
                      className="w-full p-3 border border-dwBlack-300 rounded"
                      type="textarea"
                      value={item.workingDocText}
                    />
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
}
