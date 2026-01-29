'use client';

import { motion } from 'framer-motion';
import { Layout, Palette, Bot, Zap } from 'lucide-react';

const services = [
  {
    title: "Web Design & Development",
    description: "Building responsive, pixel-perfect websites that function flawlessly on all devices.",
    icon: Layout,
  },
  {
    title: "UX/UI & Experience Design",
    description: "Crafting intuitive user journeys that simplify complex problems and delight users.",
    icon: Palette,
  },
  {
    title: "AI Tool Integration",
    description: "Leveraging modern AI tools to automate workflows and enhance user interaction.",
    icon: Bot,
  },
  {
    title: "Performance & SEO",
    description: "Optimizing for speed, accessibility, and search engine visibility to drive traffic.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I combine technical expertise with design thinking to deliver comprehensive digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 text-primary">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
