import React, { useState, useEffect } from 'react';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "./components/ui/card.jsx";
import { Button } from "./components/ui/button";
import {
  Sparkles,
  MoveUpRight,
  AlertTriangle,
  Info,
  Trash2,
  CheckCircle2,
  EyeOff,
  ChevronDown,
  ChevronUp,
  Expand
} from "lucide-react";
import Loading from './loading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/collapsible.jsx";

const FilteredResults = ({ issues, tab }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full">
      {Object.keys(issues).map((key) => {
        const issue = issues[key];
        return (
          <div key={key} className="flex flex-wrap gap-2">
            {issue.items
                .filter((item) => item.tab === tab).length > 0 ?
                <h3 className="text-black text-sm font-medium w-full pt-3 mt-3">
                  {issue.name}
                </h3> 
                : 
                null}

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              {issue.items
                .filter((item) => item.tab === tab)
                .map((item, index) => (
                  <Card key={index} variant={item.variant}>
                    <CardHeader>
                      <CardTitle>
                        <div className="justify-start items-center gap-2 inline-flex">
                          {item.icon}
                          {item.name}
                        </div>
                      </CardTitle>
                      {item.showDescription ? (
                        <CardDescription>{item.description}</CardDescription>
                      ) : null}
                    </CardHeader>
                    {item.showBanner ? (
                      <>
                        <CardContent>
                          <Sparkles className="h-4 w-4" />
                          {item.bannerText}
                        </CardContent>
                      </>
                    ) : null}
                     <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full" key={key}>
                <CollapsibleTrigger className="cursor-pointer w-full" asChild>
                  <div className='w-full'>
                    <div className='justify-between items-center inline-flex text-black text-base font-semibold leading-none min-h-8 -mb-0.5 w-full'>
                      <div className="justify-start items-center inline-flex text-sm leading-normal">
                        Suggested Solution 
                        
                        <Button variant="ghost" size="icon">
                          
                          <Info className="h-4 w-4" />
                        </Button> 
                      </div>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="space-y-2 CollapsibleContent w-full">
                  <div className="w-100 rounded border border-dwBlack-200 flex-col justify-start items-start gap-2 inline-flex mt-2">
                    <div className="self-stretch h-52 p-3 flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch"><span className="text-black text-xs font-normal  leading-none">Subject to the terms and conditions of this Agreement, Licensor hereby grants Licensee non-exclusive, non-sublicenseable, non-transferable, worldwide and royalty-free licenses (“License(s)”) to use the product described in Schedule 1 in object code format (the “Software”) during the Term. The number of Licenses granted hereunder and the </span><span className="text-blue-700 text-xs font-normal  underline leading-none">individual and aggregate</span><span className="text-black text-xs font-normal  leading-none"> fees to be paid by the Licensee to the Licensor for such Licenses shall be as set out in Table 1 below</span><span className="text-red-600 text-xs font-normal  line-through leading-none">.</span><span className="text-blue-700 text-xs font-normal  underline leading-none">, including a clear breakdown of the total fee amount.</span><span className="text-black text-xs font-normal  leading-none"> Licensee shall pay the fees in one instalment within thirty (30) after the Effective Date.</span></div>
                    </div>
                    <div className="self-stretch bg-white justify-between items-center inline-flex">
                      <div className="grow shrink basis-0 self-stretch p-2 bg-dwBlack-100 border-t border-dwBlack-200 justify-between items-center flex">
                        <Button variant="ai" size="sm">
                          Revise
                          <Sparkles className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Expand Preview
                        <Expand className="h-3.5 w-3.5" />
                      </Button>
                       
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
            </Collapsible>
                    <CardFooter className="flex gap-2">
                      <Button size="sm">
                        Apply Solution
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Jump To
                        <MoveUpRight className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="secondary" size="sm">
                        Ignore
                        <EyeOff className="h-3.5 w-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};


const issues = {
  issue1: {
    name: "3. USE RESTRICTIONS CP",
    items: [
      {
        tab: "unfair",
        name: "Restrictions on Transferability",
        icon: <AlertTriangle className="h-4 w-4" />,
        variant: "error",
        showDescription: true,
        description: "The inability to sell, sublicense, or otherwise transfer the Software could be problematic for APPLE CORP. if its business needs change or if it seeks to monetize unused licenses.",
        showBanner: false,
        bannerText: "The payment terms in this contract require net 30 days.",
      },
      {
        tab: "unfair",
        name: "Restrictions on Transferability",
        icon: <AlertTriangle className="h-4 w-4" />,
        variant: "error",
        showDescription: true,
        description: "The inability to sell, sublicense, or otherwise transfer the Software could be problematic for APPLE CORP. if its business needs change or if it seeks to monetize unused licenses.",
        showBanner: false,
        bannerText: "The payment terms in this contract require net 30 days.",
      }
    ]
  },
  issue2: {
    name: "6. LICENSEE RESPONSIBILITIES CP",
    items: [
      {
        tab: "unfair",
        name: "Broad Liability for Licensee",
        icon: <AlertTriangle className="h-4 w-4" />,
        variant: "error",
        showDescription: true,
        description: "The clause places all responsibility and liability for any misuse of the Software and Documentation on the Licensee, regardless of the Licensee's actual knowledge or direct involvement. This could potentially include unauthorized use by third parties if they gained access through means provided by the Licensee, intentionally or not.",
        showBanner: false,
        bannerText: "The payment terms in this contract require net 30 days.",
      }
    ]
  },
  issue3: {
    name: "8. CONFIDENTIALITY CP",
    items: [
      {
        tab: "unfair",
        name: "Obligation to Destroy or Return Confidential Information",
        icon: <AlertTriangle className="h-4 w-4" />,
        variant: "error",
        showDescription: true,
        description: "The requirement to destroy or return all copies of Confidential Information upon termination or expiration of the agreement may be impractical or undesirable for APPLE CORP., especially if the information is integrated into their systems.",
        showBanner: false,
        bannerText: "The payment terms in this contract require net 30 days.",
      }
    ]
  },
  issue4: {
    name: "9. INTELLECTUAL PROPERTY OWNERSHIP",
    items: [
      {
        tab: "unfair",
        name: "Prevent training on Licensee Data",
        icon: <AlertTriangle className="h-4 w-4" />,
        variant: "error",
        showDescription: true,
        description: "This clause does not contain any language that limits the Licensors ability to train machine learning models on your data. This may breach confidentiality agreements with the Licensee and their counter-parties.",
        showBanner: true,
        bannerText: "Recent public agreements have been including language that prevents training on Licensee Data",
      }
    ]
  },
  issue5: {
    name: "10. INTELLECTUAL PROPERTY OWNERSHIP",
    items: [
      {
        tab: "guidance",
        name: "Prevent training on Licensee Data",
        icon: <Info className="h-4 w-4" />,
        variant: "default",
        showDescription: true,
        description: "This clause does not contain any language that limits the Licensors ability to train machine learning models on your data. This may breach confidentiality agreements with the Licensee and their counter-parties.",
        showBanner: false,
        bannerText: "Recent public agreements have been including language that prevents training on Licensee Data",
      }
    ]
  },
  issue6: {
    name: "11. INTELLECTUAL PROPERTY OWNERSHIP",
    items: [
      {
        tab: "unusual",
        name: "Prevent training on Licensee Data",
        icon: <AlertTriangle className="h-4 w-4" />,
        variant: "warning",
        showDescription: true,
        description: "This clause does not contain any language that limits the Licensors ability to train machine learning models on your data. This may breach confidentiality agreements with the Licensee and their counter-parties.",
        showBanner: true,
        bannerText: "Recent public agreements have been including language that prevents training on Licensee Data",
      }
    ]
  },
  issue7: {
    name: "12. INTELLECTUAL PROPERTY OWNERSHIP",
    items: [
      {
        tab: "unusual",
        name: "Prevent training on Licensee Data",
        icon: <AlertTriangle className="h-4 w-4" />,
        variant: "warning",
        showDescription: true,
        description: "This clause does not contain any language that limits the Licensors ability to train machine learning models on your data. This may breach confidentiality agreements with the Licensee and their counter-parties.",
        showBanner: false,
        bannerText: "Recent public agreements have been including language that prevents training on Licensee Data",
      }
    ]
  }
}

const useRestrictions = {
  item1: {
    icon: <AlertTriangle className="h-4 w-4" />,
    name: "Restrictions on Transferability",
    variant: "error",
    showDescription: true,
    description: "The inability to sell, sublicense, or otherwise transfer the Software could be problematic for APPLE CORP. if its business needs change or if it seeks to monetize unused licenses.",
    showRedline: false,
    workingDocText: "The payment terms in this contract require net 30 days.",
  }
};


export default function IssueCardDemo() {

  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (

    isLoading ? <Loading text="Analyzing your document" /> :

    <div className="flex flex-wrap items-start gap-4 p-4 md:p-8 app-container fade-in">

    <Tabs defaultValue="Unfair" className="w-full">
      <TabsList>
        <TabsTrigger value="Unfair">Important (5)</TabsTrigger>
        <TabsTrigger value="Unusual">Resolved (2)</TabsTrigger>
        <TabsTrigger value="Guidance">Ignored (1)</TabsTrigger>
      </TabsList>
      <TabsContent value="Unfair">
        <FilteredResults issues={issues} tab="unfair" />
      </TabsContent>
      <TabsContent value="Unusual">
        <FilteredResults issues={issues} tab="unusual" />
      </TabsContent>
      <TabsContent value="Guidance">
        <FilteredResults issues={issues} tab="guidance" />
      </TabsContent>
    </Tabs>

    </div>
  );
}
