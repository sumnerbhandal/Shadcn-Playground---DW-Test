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
} from "lucide-react";
import Loading from './loading';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

const FilteredResults = ({ issues, tab }) => {
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
                        <Trash2 className="h-4 w-4 stroke-dwGreen-700 cursor-pointer" />
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
        <TabsTrigger value="Unfair">Unfair (5)</TabsTrigger>
        <TabsTrigger value="Unusual">Unusual (2)</TabsTrigger>
        <TabsTrigger value="Guidance">Guidance (1)</TabsTrigger>
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
