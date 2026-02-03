import React from 'react';

export default function Diya({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-end ${className}`}>
      {/* Flame */}
      <div className="w-2 h-4 bg-orange-500 rounded-full animate-pulse blur-[1px] absolute -top-3 z-10"
           style={{ boxShadow: '0 0 10px 2px rgba(255, 165, 0, 0.6)' }}
      ></div>
      <div className="w-1.5 h-3 bg-yellow-300 rounded-full absolute -top-2 z-20 animate-bounce"
           style={{ animationDuration: '2s' }}
      ></div>

      {/* Lamp Body */}
      <svg
        viewBox="0 0 50 25"
        className="text-accent-gold fill-current w-full h-auto drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 5 Q 25 25 50 5 L 45 20 Q 25 30 5 20 Z" />
        <path d="M5 5 Q 25 20 45 5" fill="rgba(0,0,0,0.2)" />
      </svg>
    </div>
  );
}
