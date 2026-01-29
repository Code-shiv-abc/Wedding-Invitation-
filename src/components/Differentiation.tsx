'use client';

import { motion } from 'framer-motion';
import { Heart, Code, Sparkles, CheckCircle2 } from 'lucide-react';

const differentiators = [
  {
    title: "Human-Centered Design Mindset",
    description: "I don't just write code; I design experiences. Every decision is made with the end-user in mind, ensuring high engagement and retention.",
    icon: Heart,
  },
  {
    title: "Clean, Scalable Code",
    description: "Production-ready code that is easy to maintain, test, and scale. No spaghetti code—just robust software engineering practices.",
    icon: Code,
  },
  {
    title: "Modern AI-Assisted Workflows",
    description: "Leveraging the latest in generative AI to speed up development cycles and implement cutting-edge features faster than the competition.",
    icon: Sparkles,
  },
];

export default function Differentiation() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Why AumLab?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            In a sea of generic templates and rushed implementations, AumLab stands for quality, intention, and results. I bring a senior-level engineering perspective to every project.
          </p>

          <ul className="space-y-4">
            {[
              "5+ Years of Frontend Experience",
              "Focus on Core Web Vitals & Performance",
              "SEO-First Development Strategy",
              "Transparent Communication"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                <CheckCircle2 className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="space-y-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl border border-border shadow-sm flex gap-4"
            >
              <div className="shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
