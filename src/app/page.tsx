import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Differentiation from '@/components/Differentiation';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "AumLab",
    "jobTitle": "Senior Frontend Engineer & UX/UI Lead",
    "url": "https://aumlab.com",
    "sameAs": [
      "https://github.com",
      "https://linkedin.com",
      "https://twitter.com"
    ],
    "knowsAbout": ["Web Development", "UX/UI Design", "Next.js", "React", "SEO", "Generative AI"],
    "description": "I help startups and brands build premium, high-performance web applications."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Projects />
      <Differentiation />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
