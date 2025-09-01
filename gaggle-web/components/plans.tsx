"use client";

import { useQuery } from "@tanstack/react-query";

import { GetPlans } from "@/lib/get";
// import { LoadingOverlay } from "@/components/ui/loading-overlay";
import PlanCard, { Plan } from "./plansCard";

// const plans = [
//   {
//     id: "fe3b06f7-f4bc-4b3e-96c3-56f719c5b7be",
//     name: "Free",
//     price: "0",
//     duration: 30,
//     features:
//       "Up to 500 book records, Basic user management, Email support, Limited analytics",
//     description: "Perfect for small libraries getting started",
//     buttonData: "Current Plan",
//     status: "ACTIVE",
//     limitations: {
//       maxBooks: 500,
//       supportLevel: "Email Only",
//       maxLibrarians: 1,
//     },
//     tokens: 8000,
//     discount: null,
//     freeTrialDays: 0,
//     mostPopular: false,
//   },
//   {
//     id: "a2c8e4b1-d3f5-4g6h-7i8j-9k0l1m2n3o4p",
//     name: "Basic",
//     price: "29",
//     duration: 30,
//     features:
//       "Up to 5,000 book records, Advanced user management, Priority email support, Full analytics, API access",
//     description: "Ideal for growing libraries with moderate needs",
//     buttonData: "Upgrade Now",
//     status: "INACTIVE",
//     limitations: {
//       maxBooks: 5000,
//       supportLevel: "Priority Email",
//       maxLibrarians: 3,
//     },
//     tokens: 25000,
//     discount: 10,
//     freeTrialDays: 7,
//     mostPopular: true,
//   },
//   {
//     id: "b5d9f2e8-c7a1-4b3d-9e8f-7a6b5c4d3e2f",
//     name: "Pro",
//     price: "99",
//     duration: 30,
//     features:
//       "Unlimited book records, Full user management, 24/7 phone support, Advanced analytics, API access, Custom reports",
//     description: "For large libraries and institutions with heavy usage",
//     buttonData: "Upgrade Now",
//     status: "INACTIVE",
//     limitations: {
//       maxBooks: 100000,
//       supportLevel: "24/7 Phone",
//       maxLibrarians: 10,
//     },
//     tokens: 100000,
//     discount: null,
//     freeTrialDays: 14,
//     mostPopular: false,
//   },
// ];

export default function PricingSection() {
  const {
    data: plans,
    error,
    isLoading,
  } = useQuery<Plan[]>({
    queryKey: ["plans"],
    queryFn: GetPlans,
  });
  if (error) return "error";
  // if (data) return "yes";
  if (isLoading) return <p>Loading...</p>;
  return (
    <section id="plans" className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          pricing Plans
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the right plan for your library and scale with confidence.
        </p>
      </div>

      {/* Pricing grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans?.map((plan) => (
          <div key={plan.id} className="relative">
            {/* {plan.mostPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              </div>
            )} */}
            <PlanCard
              plan={plan}
              isCurrent={plan.status === "ACTIVE"}
              // className={`rounded-2xl transition-all duration-300 ${
              //   plan.mostPopular
              //     ? "border-2 border-blue-500 shadow-lg scale-[1.02]"
              //     : "border border-gray-200 hover:shadow-md"
              // }`}
            />
          </div>
        ))}
      </div>

      {/* Footer note */}
      {/* <div className="mt-16 text-center text-sm text-gray-500">
        <p>All plans include a 30-day satisfaction guarantee.</p>
        <p className="mt-1">
          Need something custom?{" "}
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline hover:text-blue-700"
          >
            Contact us
          </a>{" "}
          for enterprise solutions.
        </p>
      </div> */}
    </section>
  );
}
