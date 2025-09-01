"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BookOpen, Building2, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const DashboardDemo = () => {
  const [, setActiveTab] = useState("institution");

  const dashboardViews = [
    {
      id: "institution",
      label: "Institution View",
      icon: <Building2 className="w-4 h-4 mr-2" />,
      title: "Complete Institutional Overview",
      description:
        "Manage multiple libraries, track system-wide analytics, and oversee all operations from a single dashboard.",
      image: "/dashboard/d1.png", // Replace with your actual image path
      features: [
        "Multi-library management",
        "System-wide analytics",
        "Financial reports",
        "Administrative controls",
      ],
    },
    {
      id: "librarian",
      label: "Librarian View",
      icon: <BookOpen className="w-4 h-4 mr-2" />,
      title: "Comprehensive Library Management",
      description:
        "Manage daily operations, track inventory, process checkouts, and generate library-specific reports.",
      image: "/dashboard/librarian-dash.png", // Replace with your actual image path
      features: [
        "Inventory management",
        "Checkout processing",
        "Member management",
        "Circulation reports",
      ],
    },
    // {
    //   id: "school",
    //   label: "School View",
    //   icon: <School className="w-4 h-4 mr-2" />,
    //   title: "Educational Institution Dashboard",
    //   description:
    //     "Monitor student reading patterns, track curriculum resources, and manage class assignments.",
    //   image: "/dashboards/school-dash.png", // Replace with your actual image path
    //   features: [
    //     "Student reading analytics",
    //     "Curriculum resources",
    //     "Class assignments",
    //     "Teacher portals",
    //   ],
    // },
    // {
    //   id: "student",
    //   label: "Student View",
    //   icon: <User className="w-4 h-4 mr-2" />,
    //   title: "Personal Learning Portal",
    //   description:
    //     "Browse available books, manage personal checkouts, and track reading history and recommendations.",
    //   image: "/dashboards/student-dash.png", // Replace with your actual image path
    //   features: [
    //     "Book browsing",
    //     "Personal checkout history",
    //     "Reading recommendations",
    //     "Digital content access",
    //   ],
    // },
  ];

  // const activeDashboard = dashboardViews.find((dash) => dash.id === activeTab);

  return (
    <section id="demo" className="py-24 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* <Badge
            variant="outline"
            className="mb-4 text-primary font-semibold py-1 px-3"
          >
            Platform Preview
          </Badge> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            NITI BOOK IN ACTION
          </h2>
          <Separator className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Explore our intuitive dashboards designed for every user in your
            educational ecosystem.
          </p>
        </div>

        <Tabs
          defaultValue="institution"
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-3xl">
              {dashboardViews.map((view) => (
                <TabsTrigger
                  key={view.id}
                  value={view.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {view.icon}
                  <span className="hidden sm:inline">{view.label}</span>
                  <span className="sm:hidden">{view.label.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {dashboardViews.map((view) => (
            <TabsContent key={view.id} value={view.id} className="mt-4">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {view.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{view.description}</p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {view.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-primary/10 rounded-full p-1 mr-3 mt-1">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <Button className="gap-2">
                      <Play className="w-4 h-4" />
                      Watch Demo
                    </Button> */}
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-gray-100 p-8 flex items-center justify-center relative">
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        Live Preview
                      </Badge>
                    </div>

                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl border border-gray-200">
                      <Image
                        src={view.image || "/placeholder-dashboard.png"}
                        alt={`${view.label} dashboard preview`}
                        fill
                        className="object-cover"
                      />
                      {/* Placeholder in case images aren't available */}
                      {!view.image && (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-400/10 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-primary font-medium">
                              Dashboard Preview
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                              {view.label}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to explore all features?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get a personalized tour of our platform and see how NITI BOOK can
              transform your library management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              {/* <Button size="lg" variant="outline">
                Explore Features
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardDemo;
