import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="w-full bg-primary-dark py-12 border-t border-accent-gold/20">
      <Container className="text-center">
         <p className="text-accent-gold/60 text-xs tracking-[0.3em] uppercase mb-4">
            The Eternal Union
         </p>
         <p className="text-ivory-light/30 text-[10px] tracking-widest font-sans">
            © 2026 Himanshu & Anjali. Designed with Love.
         </p>
      </Container>
    </footer>
  );
}
