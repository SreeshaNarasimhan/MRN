import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
}) => {
  return (
    <Component className={cn('max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </Component>
  );
};
