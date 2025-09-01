"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart,
  BookOpen,
  Layers,
  LayoutDashboard,
  Lock,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Smart Book Tracking",
    desc: "Track borrowed books, due dates, and returns automatically with ease.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    delay: 0.1,
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "Librarian Dashboard",
    desc: "Control library activity with intuitive tools for inventory and reader management.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    delay: 0.2,
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Reading Analytics",
    desc: "Gain insights into reading patterns and library usage by students.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    delay: 0.3,
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Multi-Library Support",
    desc: "Manage several school or institution libraries from a single account.",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    delay: 0.4,
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Reading Skill Tools",
    desc: "Support readers with digital tools to improve literacy and engagement.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    delay: 0.5,
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Cloud-Based & Secure",
    desc: "Your data is safe, encrypted, and accessible from anywhere at any time.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    delay: 0.6,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge
            variant="outline"
            className="px-4 py-1.5 mb-4 text-sm font-medium bg-white/80 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-1.5 fill-blue-400 text-blue-400" />
            Powerful Features
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-sky-600 ">Powerful Tools</span> for Smarter
            Libraries
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Niti Book brings together innovation and usability to help Rwandan
            libraries lead in digital transformation.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: feature.delay,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              className="h-full"
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 overflow-hidden">
                <CardContent className="">
                  {/* Icon with gradient background */}
                  <div className={`${feature.bgColor} p-6 flex justify-center`}>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                          delay: feature.delay + 0.2,
                        },
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-md`}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>

                  {/* Content */}

                  <div className="p-6">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                          delay: feature.delay + 0.3,
                        },
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors"
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                          delay: feature.delay + 0.4,
                        },
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="text-gray-600 mb-4"
                    >
                      {feature.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                          delay: feature.delay + 0.5,
                        },
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {/* <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto font-normal text-blue-600 hover:text-blue-700 group-hover:underline"
                      >
                        Learn more
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button> */}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to transform your library management?
          </p>
          {/* <Button size="lg" className="blue-500 hover:blue-700 ">
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
