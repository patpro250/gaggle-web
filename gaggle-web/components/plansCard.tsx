"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckIcon,
  StarIcon,
  ZapIcon,
  BookOpenIcon,
  UsersIcon,
  MailIcon,
  BarChart2Icon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

export interface Plan {
  id: string;
  name: string;
  price: string;
  duration: number;
  features: string;
  description: string;
  buttonData: string;
  status: string;
  limitations: {
    maxBooks: number;
    supportLevel: string;
    maxLibrarians: number;
  };
  tokens: number;
  discount: number | null;
  freeTrialDays: number;
}

interface PlanCardProps {
  plan: Plan;
  isCurrent?: boolean;
  className?: string;
  maxFeaturesToShow?: number;
}

export default function PlanCard({
  plan,
  isCurrent = false,
  className,
  maxFeaturesToShow = 4,
}: PlanCardProps) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const featuresList = plan.features.split(", ");
  const hasMoreFeatures = featuresList.length > maxFeaturesToShow;
  const displayedFeatures = showAllFeatures
    ? featuresList
    : featuresList.slice(0, maxFeaturesToShow);

  const getPlanColor = () => {
    switch (plan.name.toLowerCase()) {
      case "free":
        return "bg-blue-100 text-blue-800";
      case "basic":
        return "bg-green-100 text-green-800";
      case "pro":
        return "bg-purple-100 text-purple-800";
      case "plus":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPlanIcon = () => {
    switch (plan.name.toLowerCase()) {
      case "free":
        return <StarIcon className="w-5 h-5" />;
      case "basic":
        return <BookOpenIcon className="w-5 h-5" />;
      case "pro":
        return <ZapIcon className="w-5 h-5" />;
      case "plus":
        return <UsersIcon className="w-5 h-5" />;
      default:
        return <StarIcon className="w-5 h-5" />;
    }
  };

  return (
    <Card
      className={cn(
        "w-full max-w-md border-2 transition-all hover:shadow-lg flex flex-col",
        isCurrent ? "border-blue-500" : "border-transparent",
        "h-[600px]", // Fixed height
        className
      )}
    >
      <CardHeader className="relative">
        <div className="absolute top-4 right-4">
          <Badge
            variant="outline"
            className={cn("flex items-center gap-1 py-1", getPlanColor())}
          >
            {getPlanIcon()}
            {plan.name}
          </Badge>
        </div>

        <div className="flex items-end gap-2 pt-6">
          <CardTitle className="text-4xl font-bold">{plan.price} Rwf</CardTitle>
          <CardDescription className="text-sm">
            /{plan.duration} days
          </CardDescription>
        </div>

        {plan.discount && (
          <Badge variant="destructive" className="w-fit mt-2 animate-pulse">
            {plan.discount}% OFF
          </Badge>
        )}

        <CardDescription className="mt-2 text-base line-clamp-2">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 flex-1 overflow-hidden">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex-1 flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4 text-blue-500" />
            <span>Up to {plan.limitations.maxBooks} books</span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <UsersIcon className="w-4 h-4 text-blue-500" />
            <span>{plan.limitations.maxLibrarians} librarian(s)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MailIcon className="w-4 h-4 text-blue-500" />
          <span>{plan.limitations.supportLevel} support</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <BarChart2Icon className="w-4 h-4 text-blue-500" />
          <span>{plan.tokens.toLocaleString()} AI tokens</span>
        </div>

        <div className="border-t pt-4 mt-4 space-y-3">
          {displayedFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckIcon className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}

          {hasMoreFeatures && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-2 text-blue-600 hover:text-blue-700"
              onClick={() => setShowAllFeatures(!showAllFeatures)}
            >
              {showAllFeatures ? (
                <>
                  <ChevronUpIcon className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDownIcon className="w-4 h-4 mr-2" />
                  View {featuresList.length - maxFeaturesToShow} More
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link href={`/dashboard/pay?amount=${plan.price}`}>
          <Button
            disabled={plan.price === "0" || plan.name.toLowerCase() === "plus"}
            className={cn(
              "w-full",
              isCurrent
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gradient-to-r from-blue-500 to-blue-600"
            )}
            size="lg"
          >
            {isCurrent ? (
              <span className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4" />
                {plan.buttonData}
              </span>
            ) : plan.freeTrialDays > 0 ? (
              `Try ${plan.freeTrialDays}-Day Free Trial`
            ) : (
              "Upgrade Now"
            )}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
