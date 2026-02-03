import React from 'react';

export default function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`fill-none stroke-current opacity-10 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="70" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="30" strokeWidth="0.5" />

      {/* Petals */}
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d="M100 100 Q 110 70 100 40 Q 90 70 100 100"
          transform={`rotate(${i * 30} 100 100)`}
          strokeWidth="0.5"
        />
      ))}
       {[...Array(24)].map((_, i) => (
        <path
          key={`outer-${i}`}
          d="M100 100 Q 105 85 100 70 Q 95 85 100 100"
          transform={`rotate(${i * 15} 100 100)`}
          strokeWidth="0.25"
        />
      ))}
    </svg>
  );
}
