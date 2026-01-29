'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard helping merchants track sales in real-time.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    image: "https://placehold.co/600x400/f5f5f5/a3a3a3.png?text=Dashboard+Preview",
    link: "#",
  },
  {
    title: "SaaS Landing Page",
    description: "High-converting landing page optimized for speed and lead generation.",
    tags: ["React", "Framer Motion", "Stripe"],
    image: "https://placehold.co/600x400/f5f5f5/a3a3a3.png?text=Landing+Page",
    link: "#",
  },
  {
    title: "AI Content Generator",
    description: "An interface for generating marketing copy using OpenAI's GPT-4 API.",
    tags: ["Next.js", "OpenAI API", "Vercel SDK"],
    image: "https://placehold.co/600x400/f5f5f5/a3a3a3.png?text=AI+Tool",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Projects that showcase my ability to solve real-world problems.
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium border-b border-primary pb-0.5 hover:text-muted-foreground transition-colors">
            View Github Profile
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video bg-secondary overflow-hidden">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-1.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
