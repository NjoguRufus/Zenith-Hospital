import React from 'react';
import { Activity, Cross } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Cross className="w-8 h-8 text-blue-600" strokeWidth={2.5} />
        <Activity 
          className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500" 
          strokeWidth={2}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight text-blue-900">ZENITH</span>
        <span className="text-sm font-medium tracking-wider text-blue-600">HOSPITAL</span>
      </div>
    </div>
  );
}