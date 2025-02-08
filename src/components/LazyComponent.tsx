import React, { Suspense } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
}

export function LazyComponent({ children }: LazyComponentProps) {
  return (
    <Suspense
      fallback={
        <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full"></div>
      }
    >
      {children}
    </Suspense>
  );
}