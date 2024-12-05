"use client";

import React, { ReactNode } from "react"; // Add this import
import { motion, AnimatePresence } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
}

const MotionWrapper = ({ children }: PageWrapperProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default MotionWrapper;
