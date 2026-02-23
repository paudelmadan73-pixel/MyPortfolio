import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: 'Market Research Analysis',
    category: 'Research',
    description: 'In-depth analysis of hospitality consumer behavior trends in Nepal with actionable marketing strategies.',
  },
  {
    title: 'Brand Strategy Blueprint',
    category: 'Branding',
    description: 'Comprehensive branding guide for an emerging hospitality business, covering positioning, messaging, and visual identity.',
  },
  {
    title: 'Sales Funnel Optimization',
    category: 'Sales',
    description: 'Designed and tested a multi-stage sales funnel that improved lead conversion by streamlining customer touchpoints.',
  },
  {
    title: 'Social Media Campaign',
    category: 'Marketing',
    description: 'Planned and executed a social media awareness campaign targeting young professionals in the hospitality industry.',
  },
];

const PortfolioSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="py-24">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Work <span className="text-gradient-gold">Showcase</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map(({ title, category, description }) => (
            <div
              key={title}
              className="group relative p-6 rounded-xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:gold-border-glow cursor-pointer"
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" style={{ backgroundSize: '200% 100%' }} />

              <span className="relative z-10 inline-block text-xs font-body text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {category}
              </span>
              <h3 className="relative z-10 font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="relative z-10 font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {description}
              </p>
              <ExternalLink className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" size={18} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
