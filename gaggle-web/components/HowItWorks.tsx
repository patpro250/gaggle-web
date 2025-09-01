import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Building2, CopyCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: <Building2 className="w-10 h-10" />,
      title: "Create institution account",
      description:
        "Set up your school or organization profile with basic information",
      color: "bg-green-100 text-green-600",
    },
    {
      step: 2,
      icon: <CopyCheck className="w-10 h-10" />,
      title: "Copy Code In Dashboard",
      description: "share code to you librarian use it to sign up ",
      color: "bg-purple-100 text-purple-600",
    },
    // {
    //   step: 4,
    //   icon: <BookOpen className="w-10 h-10" />,
    //   title: "Manage library",
    //   description:
    //     "Catalog books, manage checkouts, and organize your collection",
    //   color: "bg-amber-100 text-amber-600",
    // },
    // {
    //   step: 5,
    //   icon: <BarChart3 className="w-10 h-10" />,
    //   title: "Track & report",
    //   description:
    //     "Generate insights, track usage, and create comprehensive reports",
    //   color: "bg-rose-100 text-rose-600",
    // },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            // className="mb-4  text-primary font-semibold py-1 px-3"
          >
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your library digital in just 5 simple steps. Our streamlined
            process makes onboarding quick and effortless.
          </p>
        </div>

        <div className="relative flex flex-col items-center ">
          {/* Connecting line for steps */}
          {/* <div className="absolute left-1/2 top-20 transform -translate-x-1/2 h-2/3 w-1 bg-gradient-to-b from-blue-200 to-rose-200 hidden lg:block"></div> */}

          <div className="grid grid-cols-1  lg:grid-cols-2 gap-6  ">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center align-middle "
              >
                {/* Step indicator */}

                <div
                  className={`w-30 h-30 rounded-full flex items-center justify-center mb-6 ${step.color} relative z-10`}
                >
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  {step.icon}
                </div>

                {/* Step card */}

                <Card className="text-center h-64 hover:shadow-lg transition-all border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow between steps (mobile only) */}

                {index < steps.length - 1 && (
                  <div className="lg:hidden my-4">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8 py-6 text-lg">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-gray-500 mt-4">
            No credit card required. Start your free trial today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
