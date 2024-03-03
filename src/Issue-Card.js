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

const issues = {
  issue1: {
    name: "3. USE RESTRICTIONS CP",
    items: [
      {
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
        name: "Prevent training on Licensee Data",
        icon: <AlertTriangle className="h-4 w-4" />,
        variant: "error",
        showDescription: true,
        description: "This clause does not contain any language that limits the Licensors ability to train machine learning models on your data. This may breach confidentiality agreements with the Licensee and their counter-parties.",
        showBanner: true,
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
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (

    // <Loading text="Analyzing your document" />
    isLoading ? <Loading text="Analyzing your document" /> :

    <div className="flex flex-wrap items-start gap-4 p-4 md:p-8 app-container fade-in">

      {Object.keys(issues).map(key => {
        const issue = issues[key];
        return (
          <div className="flex flex-wrap gap-2" key={key}>
            <h3 className='text-black text-xs font-medium w-full pt-3'>{issue.name}</h3>
              <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {issue.items.map(item => (
                  <Card variant="error">
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
                        {/* <div></div> */}
                        <CardContent>
                          <Sparkles className="h-4 w-4" />{item.bannerText}
                        </CardContent>
                      </>
                        ) 
                      : null}
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
                ))}
              </div>
            </div>
          );
        })}




      <h3 className='text-black text-xs font-medium w-full pt-3 border-t-2 mt-8'>Component Demos</h3>
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
