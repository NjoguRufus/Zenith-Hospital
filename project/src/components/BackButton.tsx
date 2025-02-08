import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed left-4 top-20 z-40 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
      aria-label="Go back"
    >
      <ArrowLeft className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
    </button>
  );
}