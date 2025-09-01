"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Features",
      path: "/#features",
      subItems: [
        { name: "Librarian Dashboard", path: "/#features" },
        { name: "Reading Analytics", path: "/#features" },
        { name: "Smart Book Tracking", path: "/#features" },
      ],
    },
    {
      name: "Plans",
      path: "/#plans",
      subItems: [
        { name: "Basic", path: "/#plans" },
        { name: "Pro", path: "/#plans" },
        { name: "plus", path: "/#plans" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "F&Q | contact", path: "/f&q" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-primary"
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={"/c/image.png"}
                width={80}
                height={80}
                alt="NitiBook Logo"
                className="h-15 w-15"
              />
            </motion.div>
            <span className="text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Gaggleniti
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/20">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.name}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Explore our {subItem.name.toLowerCase()}{" "}
                                    features
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/p">Login</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            <Link href="/p">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 pb-6 border-b">
                <Image
                  src={"/image.svg"}
                  width={32}
                  height={32}
                  alt="NitiBook Logo"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  NitiBook
                </span>
              </div>
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="text-lg font-medium transition-colors hover:text-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 mt-auto pt-6">
                <Button asChild variant="outline">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                  <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
