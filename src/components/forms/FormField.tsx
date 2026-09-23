import React from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  helpText?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  error,
  required = false,
  children,
  className,
  helpText,
}) => {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-ink-900 font-sans">
        {label} {required && <span className="text-maroon-700">*</span>}
      </label>
      {children}
      {helpText && !error && (
        <span className="text-[11px] text-ink-700 font-sans">{helpText}</span>
      )}
      {error && (
        <span id={`${id}-error`} className="text-xs font-medium text-maroon-700 font-sans" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};
