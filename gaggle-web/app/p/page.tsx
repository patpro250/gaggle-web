"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, School } from "lucide-react";
import Link from "next/link";

const apps = [
  // {
  //   name: "School App",
  //   desc: "Manage your school library efficiently with real-time tracking and digital checkouts.",
  //   icon: <School className="h-12 w-12 text-blue-600" />,
  //   color: "from-blue-50 to-blue-100",
  //   hover: "hover:bg-blue-50",
  // },
  {
    name: "Institution App",
    desc: "Advanced tools for universities and colleges — bulk management, analytics, and integration.",
    icon: <School className="h-12 w-12 text-blue-600" />,
    color: "from-emerald-50 to-emerald-100",
    hover: "hover:bg-emerald-50",
    url: "https://admin.gaggleniti.com",
  },
  {
    name: "Librarian App",
    desc: "Full control over books, accounts, borrowing history, and user permissions.",
    icon: <BookOpen className="h-12 w-12 text-purple-600" />,
    color: "from-purple-50 to-purple-100",
    hover: "hover:bg-purple-50",
    url: "https://lib.gaggleniti.com",
  },
];

export default function AppSelector() {
  return (
    <div className="min-h-screen pt-30 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="text-center pt-12 pb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          📚 Gaggle Niti
        </h1>
        <p className="text-lg text-slate-600 mt-3 max-w-md mx-auto">
          Choose the right application for your role and start managing smarter.
        </p>
      </div>

      {/* App Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 px-6 pb-16 max-w-6xl mx-auto">
        {apps.map((app, index) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className={`bg-gradient-to-b  p-1 rounded-t-lg`}></div>
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="p-3 bg-white rounded-full shadow-md border group-hover:scale-105 transition-transform duration-300">
                  {app.icon}
                </div>
                <CardTitle className="mt-4">{app.name}</CardTitle>
                <CardDescription className="text-slate-600 mt-2 px-2">
                  {app.desc}
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href={app.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className={`w-full font-medium ${app.hover} border-slate-200 text-slate-700`}
                  >
                    Launch {app.name}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Decorative Background Elements */}
      {/* <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
      </div> */}
    </div>
  );
}
