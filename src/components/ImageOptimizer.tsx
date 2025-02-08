import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export function ImageOptimizer({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
}: ImageOptimizerProps) {
  // Add quality and format parameters to Unsplash URLs
  const optimizedSrc = src.includes('unsplash.com')
    ? `${src}&q=80&fm=webp${width ? `&w=${width}` : ''}`
    : src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
    />
  );
}