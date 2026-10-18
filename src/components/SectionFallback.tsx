import React from 'react';

/** Reserves space for lazily loaded below-the-fold sections so nothing jumps when they arrive. */
export const SectionFallback: React.FC = () => (
  <div aria-hidden="true" className="w-full min-h-[600px] bg-white" />
);
