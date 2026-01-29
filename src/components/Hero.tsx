'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for new projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Building Digital Experiences That <span className="text-muted-foreground">Convert</span>.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I help startups and visionary brands build premium, high-performance web applications that impress users and drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-all shadow-sm group"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://calendly.com/" // Placeholder, user can update
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-foreground bg-background border border-border rounded-full hover:bg-secondary transition-colors"
            >
              <Calendar className="mr-2 w-4 h-4" />
              Book a Call
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Abstract geometric visual representing structure and clarity */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-3xl rotate-3 border border-border"></div>
             <div className="absolute inset-0 bg-white rounded-3xl -rotate-3 border border-border shadow-xl flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-2 gap-4 p-8 w-full h-full opacity-50">
                   <div className="bg-gray-100 rounded-lg w-full h-32"></div>
                   <div className="bg-gray-100 rounded-lg w-full h-32 translate-y-8"></div>
                   <div className="bg-gray-100 rounded-lg w-full h-32 -translate-y-8"></div>
                   <div className="bg-gray-100 rounded-lg w-full h-32"></div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50 rounded-bl-full -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-50 rounded-tr-full -z-10 opacity-50"></div>
    </section>
  );
}
