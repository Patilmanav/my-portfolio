"use client";

import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { IServiceItem } from "@/types";
import Image from "next/image";

export function AnimatedServiceCard({
  item,
}: Readonly<{ item: IServiceItem }>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="z-20 transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardSkeletonContainer>
        <IconSkeleton item={item} isHovered={isHovered} />
      </CardSkeletonContainer>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
      
      {/* Automation Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <CircuitLines isHovered={isHovered} />
      </div>
    </Card>
  );
}

const IconSkeleton = ({ item, isHovered }: Readonly<{ item: IServiceItem; isHovered: boolean }>) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = item.icons.map((_, index) => [
    `.circle-${index + 1}`,
    {
      scale,
      transform,
    },
    { duration: 0.8 },
  ]);

  useEffect(() => {
    if (isHovered) {
      animate(sequence, {
        repeat: Infinity,
        repeatDelay: 1,
      } as any);
    }
  }, [isHovered, sequence]);

  return (
    <div className="overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        {item.icons.map((icon, index) => (
          <motion.div
            key={index}
            className={`circle-${index + 1}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: isHovered ? [-2, 2, -2] : 0
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              repeat: isHovered ? Infinity : 0,
              repeatType: "reverse"
            }}
          >
            <IconContainer>
              <Image
                src={icon}
                alt={`icon-${index + 1}`}
                width={144}
                height={144}
                sizes="100%"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                className="aspect-square h-6 w-6"
              />
            </IconContainer>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Sparkles with Automation Theme */}
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-[var(--primaryColor)] to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <AutomationSparkles isHovered={isHovered} />
        </div>
      </div>
    </div>
  );
};

const AutomationSparkles = ({ isHovered }: { isHovered: boolean }) => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  
  return (
    <div className="absolute inset-0">
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={`sparkle-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: isHovered ? [0, 1, 0] : randomOpacity(),
            scale: isHovered ? [0, 1.5, 0] : [1, 1.2, 0],
            rotate: isHovered ? [0, 360] : 0,
          }}
          transition={{
            duration: isHovered ? random() * 1 + 2 : random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `${isHovered ? 3 : 2}px`,
            height: `${isHovered ? 3 : 2}px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className={`inline-block ${isHovered ? 'bg-yellow-400' : 'bg-white'}`}
        ></motion.span>
      ))}
    </div>
  );
};

const CircuitLines = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Horizontal Circuit Lines */}
      <motion.div
        className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primaryColor)] to-transparent"
        animate={{
          scaleX: isHovered ? [0, 1, 0] : 0,
          opacity: isHovered ? [0, 1, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primaryColor)] to-transparent"
        animate={{
          scaleX: isHovered ? [0, 1, 0] : 0,
          opacity: isHovered ? [0, 1, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          delay: 1,
          ease: "easeInOut"
        }}
      />
      
      {/* Vertical Circuit Lines */}
      <motion.div
        className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-transparent via-[var(--primaryColor)] to-transparent"
        animate={{
          scaleY: isHovered ? [0, 1, 0] : 0,
          opacity: isHovered ? [0, 1, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          delay: 0.5,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-0 bottom-0 right-4 w-px bg-gradient-to-b from-transparent via-[var(--primaryColor)] to-transparent"
        animate={{
          scaleY: isHovered ? [0, 1, 0] : 0,
          opacity: isHovered ? [0, 1, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          delay: 1.5,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export const Card = ({
  className,
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full mx-auto overflow-hidden rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] group transition-all duration-300",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h3
      className={cn(
        "text-lg lg:text-xl xl:text-2xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColor)] py-2 tracking-wide",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm/6 lg:text-base/6 font-normal tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[var(--borderRadius)] z-40 mb-4",
        className,
        showGradient &&
          "bg-bg-[rgba(40,40,40,0.70)] dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const IconContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    border border-[rgba(255,255,255,0.10)] backdrop-blur-sm transition-all duration-300 hover:bg-[rgba(248,248,248,0.05)] hover:shadow-[0px_0px_16px_0px_rgba(248,248,248,0.35)_inset]`,
        className
      )}
    >
      {children}
    </div>
  );
};
