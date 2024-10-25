import React from 'react';

export const RSLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="px4 py-2">
        {/* {Header} */}
        {children}
      </div>
    </div>
  );
};
