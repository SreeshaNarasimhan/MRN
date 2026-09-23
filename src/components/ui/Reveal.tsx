import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  amount?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  amount = 0.2,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
