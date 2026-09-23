import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconName,
  className,
}) => {
  const IconComponent = (LucideIcons[iconName as keyof typeof LucideIcons] ||
    LucideIcons.ShieldCheck) as React.FC<{ className?: string; size?: number; strokeWidth?: number }>;

  return (
    <div
      className={cn(
        'bg-cream-50/90 border border-gold-400/25 rounded-2xl p-7 shadow-[0_2px_20px_-10px_rgba(102,18,35,0.2)] hover:border-gold-400/50 hover:-translate-y-1 transition-all duration-300',
        className
      )}
    >
      <div className="w-11 h-11 rounded-xl bg-maroon-700/10 flex items-center justify-center mb-4 text-maroon-700">
        <IconComponent size={22} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-serif font-semibold text-ink-900 mb-2">{title}</h3>
      <p className="text-sm text-ink-700 leading-relaxed font-sans">{description}</p>
    </div>
  );
};
