'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container-width text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Let’s build something impactful together.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Whether you need a full-scale application or a high-converting landing page, I’m here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:contact@aumlab.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-background rounded-full hover:bg-secondary transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Link>

            <Link
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-foreground border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              Book a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
