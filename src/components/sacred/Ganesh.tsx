import React from 'react';

export default function Ganesh({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`text-accent-gold fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
        {/* Abstract Ganesha Form */}
        <path d="M50 10 C 30 10 20 25 20 40 C 20 60 35 70 35 70 C 35 70 30 80 20 85" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M80 40 C 80 25 70 10 50 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M80 40 C 80 60 65 70 65 70 C 65 70 70 80 80 85" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Trunk */}
        <path d="M50 40 C 50 40 55 50 55 60 C 55 75 45 75 40 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Head/Crown details */}
        <circle cx="50" cy="30" r="2" fill="currentColor" />
        <path d="M40 20 L 60 20" stroke="currentColor" strokeWidth="1" />
        <path d="M42 16 L 58 16" stroke="currentColor" strokeWidth="1" />
        {/* Eyes */}
        <path d="M40 35 Q 43 32 46 35" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M54 35 Q 57 32 60 35" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Tilak */}
        <path d="M50 25 L 50 32" stroke="currentColor" strokeWidth="1" />
        {/* Ears */}
        <path d="M25 35 C 15 30 10 45 20 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M75 35 C 85 30 90 45 80 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
