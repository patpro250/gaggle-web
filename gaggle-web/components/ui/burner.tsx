"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Library, Users, Star } from "lucide-react";

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-indigo-50/60 py-24 sm:py-32"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"
      ></motion.div>

      {/* Floating elements */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute top-1/4 left-1/4"
      >
        <BookOpen className="w-12 h-12 text-indigo-400" />
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-1/3 right-1/4"
      >
        <Library className="w-10 h-10 text-blue-400" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-medium bg-white/80 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 mr-1.5 fill-yellow-400 text-yellow-400" />
              Empowering Rwandan Libraries
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Gaggleniti group company
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-2 text-xl text-gray-700 font-medium"
            >
              Modern Library Management System
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-sm text-gray-600 mb-5">Here We go!</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
          >
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Libraries Served</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-indigo-600">10K+</div>
                <div className="text-sm text-gray-600">Books Managed</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm col-span-2 md:col-span-1">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-600">5K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Link href="../../../d/auth12/s">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="#features">
                <Users className="mr-2 h-4 w-4" />
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 text-white fill-current"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroBanner;
