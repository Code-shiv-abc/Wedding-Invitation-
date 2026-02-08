'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FloatingInput({ label, className, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative group pt-4">
      <motion.label
        initial={false}
        animate={{
          y: isFocused || hasValue ? -24 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          opacity: isFocused ? 1 : 0.6,
          color: isFocused ? 'var(--color-accent-gold)' : 'var(--color-text-light)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute left-0 top-3 origin-top-left pointer-events-none text-base font-serif italic tracking-wide"
      >
        {label}
      </motion.label>
      <input
        {...props}
        className={cn(
          "w-full bg-transparent border-b border-ivory-light/20 text-ivory-light py-2 focus:outline-none transition-colors",
          "placeholder-transparent font-sans text-base tracking-wide",
          className
        )}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(!!e.target.value);
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setHasValue(!!e.target.value);
          props.onChange?.(e);
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent-gold origin-left"
      />
    </div>
  );
}

interface CustomRadioProps {
    label: string;
    checked: boolean;
    onChange: () => void;
    name?: string;
    value?: string;
}

export function CustomRadio({ label, checked, onChange, name, value }: CustomRadioProps) {
  return (
    <label className="flex items-center gap-4 cursor-pointer group select-none relative">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div className="relative w-5 h-5 rounded-full border border-ivory-light/40 group-hover:border-accent-gold transition-colors flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: checked ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-2.5 h-2.5 rounded-full bg-accent-gold"
        />
      </div>
      <span className={cn(
        "font-sans text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-300",
        checked ? "text-accent-gold" : "text-ivory-light/60 group-hover:text-ivory-light"
      )}>
        {label}
      </span>
    </label>
  );
}
