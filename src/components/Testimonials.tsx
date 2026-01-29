'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AumLab transformed our outdated platform into a high-performance web app. The attention to detail and code quality exceeded our expectations.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow Inc.",
  },
  {
    quote: "Working with AumLab was a game-changer. Not only did we get a beautiful site, but our conversion rates increased by 40% in the first month.",
    author: "Michael Chen",
    role: "Founder, Growthify",
  },
  {
    quote: "The ability to translate complex requirements into simple, elegant UI is rare. AumLab delivered exactly what we needed, on time and within budget.",
    author: "Elena Rodriguez",
    role: "Product Manager, InnovateX",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here is what my partners have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/20 p-8 rounded-2xl relative"
            >
              <Quote className="text-primary/20 w-10 h-10 mb-4" />
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                &quot;{t.quote}&quot;
              </p>
              <div>
                <div className="font-semibold text-foreground">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
