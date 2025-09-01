"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Library, Sparkles, Users } from "lucide-react";
import Link from "next/link";

const BrandIllustrationCard = () => {
  return (
    <section
      id="brand"
      className="px-4 py-12 md:py-24 bg-gradient-to-b from-white to-blue-50/40 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* SVG Illustration with animated elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8"
        >
          <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
            {/* Main SVG Illustration */}
            <svg
              viewBox="0 0 500 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <rect width="500" height="400" fill="#f8fafc" rx="20" />

              {/* Library Building */}
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <rect
                  x="150"
                  y="120"
                  width="200"
                  height="180"
                  fill="#e0e7ff"
                  rx="10"
                />
                <rect
                  x="170"
                  y="140"
                  width="40"
                  height="40"
                  fill="#4f46e5"
                  rx="5"
                />
                <rect
                  x="230"
                  y="140"
                  width="40"
                  height="40"
                  fill="#4f46e5"
                  rx="5"
                />
                <rect
                  x="290"
                  y="140"
                  width="40"
                  height="40"
                  fill="#4f46e5"
                  rx="5"
                />
                <rect
                  x="170"
                  y="200"
                  width="40"
                  height="40"
                  fill="#4f46e5"
                  rx="5"
                />
                <rect
                  x="230"
                  y="200"
                  width="40"
                  height="40"
                  fill="#4f46e5"
                  rx="5"
                />
                <rect
                  x="290"
                  y="200"
                  width="40"
                  height="40"
                  fill="#4f46e5"
                  rx="5"
                />
                <rect
                  x="190"
                  y="80"
                  width="120"
                  height="40"
                  fill="#818cf8"
                  rx="5"
                />
              </motion.g>

              {/* Books */}
              <motion.g
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <rect
                  x="80"
                  y="220"
                  width="40"
                  height="100"
                  fill="#6366f1"
                  rx="5"
                />
                <rect
                  x="90"
                  y="230"
                  width="20"
                  height="10"
                  fill="#fff"
                  rx="2"
                />
                <rect
                  x="90"
                  y="250"
                  width="20"
                  height="10"
                  fill="#fff"
                  rx="2"
                />
              </motion.g>

              <motion.g
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <rect
                  x="380"
                  y="220"
                  width="40"
                  height="100"
                  fill="#818cf8"
                  rx="5"
                />
                <rect
                  x="390"
                  y="230"
                  width="20"
                  height="10"
                  fill="#fff"
                  rx="2"
                />
                <rect
                  x="390"
                  y="250"
                  width="20"
                  height="10"
                  fill="#fff"
                  rx="2"
                />
              </motion.g>

              {/* People */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <circle cx="120" cy="280" r="15" fill="#4f46e5" />
                <circle cx="120" cy="310" r="20" fill="#4f46e5" />
                <circle cx="380" cy="280" r="15" fill="#818cf8" />
                <circle cx="380" cy="310" r="20" fill="#818cf8" />
              </motion.g>

              {/* Rwanda Flag Elements */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <circle cx="250" cy="50" r="25" fill="#00a3de" />
                <circle cx="250" cy="50" r="20" fill="#fad201" />
                <circle cx="250" cy="50" r="15" fill="#00a3de" />
                <circle cx="250" cy="50" r="10" fill="#009e49" />
              </motion.g>

              {/* Digital elements */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <rect
                  x="220"
                  y="250"
                  width="60"
                  height="40"
                  fill="#fff"
                  rx="5"
                  stroke="#6366f1"
                  strokeWidth="2"
                />
                <path d="M230 265 H270" stroke="#6366f1" strokeWidth="2" />
                <path d="M230 275 H270" stroke="#6366f1" strokeWidth="2" />
                <path d="M230 285 H260" stroke="#6366f1" strokeWidth="2" />
              </motion.g>
            </svg>

            {/* Floating elements around the illustration */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-2 -right-2 bg-blue-100 text-blue-700 p-2 rounded-full shadow-sm"
            >
              <BookOpen className="w-5 h-5" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -bottom-2 -left-2 bg-indigo-100 text-indigo-700 p-2 rounded-full shadow-sm"
            >
              <Library className="w-5 h-5" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute top-10 -left-4 bg-amber-100 text-amber-700 p-2 rounded-full shadow-sm"
            >
              <Users className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text content with staggered animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4 mr-1.5" />
            Innovation in Education
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transforming Libraries Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Rwanda
            </span>{" "}
            with Niti Book
          </motion.h2>

          <motion.p
            className="text-md text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Niti Book is reimagining how libraries work — bringing smart
            technology, better management tools, and a renewed focus on reading
            skills to institutions across Rwanda. We&apos;re building a future
            where every reader has access to knowledge, and every library
            becomes a center of innovation.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-3 text-gray-600"
          >
            <li className="flex items-start">
              <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span>Digital transformation for traditional libraries</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span>Custom solutions for Rwandan educational needs</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
              <span>Building literacy and learning communities</span>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="pt-4 flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Link href="#">
                Discover Our Mission
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#">View Success Stories</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIllustrationCard;
