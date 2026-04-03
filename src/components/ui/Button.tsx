"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[#FF6B00] text-white hover:bg-[#E65C00] active:scale-[0.98]",
    secondary:
      "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] active:scale-[0.98]",
    outline:
      "bg-transparent border border-[#E5E7EB] text-[#374151] hover:bg-[#FAFAFA] hover:border-[#D1D5DB] active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {icon && <ArrowRight weight="bold" className="w-4 h-4" />}
    </motion.button>
  );
}
