import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id="main-content">{children}</div>;
  }

  return (
    <motion.main
      key={pathname}
      id="main-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="flex-grow min-h-screen"
    >
      {children}
    </motion.main>
  );
};
