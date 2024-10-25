import React from 'react';

export const Template = ({ children }: { children: React.ReactNode }) => {
  return <div className="animate-appear">{children}</div>;
};
