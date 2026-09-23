import React from 'react';

// Data array is currently empty as per brief. Renders nothing when empty.
const socialData: { name: string; href: string; iconName: string }[] = [];

export const SocialLinks: React.FC<{ className?: string }> = ({ className }) => {
  if (socialData.length === 0) return null;

  return (
    <div className={className}>
      {/* Social links will render here when provided */}
    </div>
  );
};
