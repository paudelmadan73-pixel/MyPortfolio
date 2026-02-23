import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/Madan.jpg.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Business Development Executive
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Madan <span className="text-gradient-gold">Paudel</span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              "Learning Today, Leading Tomorrow"
            </p>
            <p className="font-body text-muted-foreground max-w-lg mb-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              Passionate about marketing, business growth, and hospitality — building bridges between brands and their audiences from Nepal to the world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '1s' }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden gold-border-glow border-2 border-primary/30">
              <img
                src={heroImage}
                alt="Madan Paudel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-primary" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
