"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { AnimatedServiceCard } from "../home/ui/AnimatedServiceCard";

export const HoverLayoutGrid = ({
  cards,
  className,
}: {
  cards: any[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div
      className={cn(
        "w-full grid grid-cols-1 md:grid-cols-2 mt-16 gap-4",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((item, idx) => (
        <motion.div
          key={item?.id}
          className="relative group block p-2 h-full w-full"
          variants={itemVariants}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.5] dark:bg-slate-800/[0.5] block rounded-[var(--borderRadius)]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          
          {/* Floating particles effect */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-[var(--primaryColor)] rounded-full"
                    initial={{
                      x: Math.random() * 100,
                      y: Math.random() * 100,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      x: Math.random() * 100,
                      y: Math.random() * 100,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>
          
          <AnimatedServiceCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};
