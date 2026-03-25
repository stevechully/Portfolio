"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle"; // Import the toggle

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <motion.div
      initial={{ opacity: 1, y: -100 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-zinc-200 dark:border-zinc-800 rounded-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm z-[5000] px-6 py-3 items-center justify-center space-x-6",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className="relative text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
        >
          {navItem.name}
        </Link>
      ))}
      
      {/* Add a subtle divider and the toggle button */}
      <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800"></div>
      <ModeToggle />
    </motion.div>
  );
};