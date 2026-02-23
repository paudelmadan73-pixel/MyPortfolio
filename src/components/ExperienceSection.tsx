import { Briefcase, BookOpen, Presentation } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const experiences = [
  {
    icon: Briefcase,
    title: 'Business Development Executive',
    org: 'Professional Experience',
    period: 'Present',
    description: 'Driving revenue growth through strategic partnerships, market analysis, and client acquisition. Collaborating across teams to identify new business opportunities and deliver measurable results.',
  },
  {
    icon: BookOpen,
    title: 'Marketing Research Project',
    org: 'Academic Project',
    period: '2024',
    description: 'Conducted comprehensive market research on consumer behavior trends in Nepal\'s hospitality sector, presenting findings with actionable strategies.',
  },
  {
    icon: Presentation,
    title: 'Sales & Branding Presentation',
    org: 'Academic Presentation',
    period: '2024',
    description: 'Delivered a compelling presentation on modern branding strategies and sales funnel optimization for small and medium businesses.',
  },
];

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-card">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Experience & <span className="text-gradient-gold">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto space-y-0">
          {experiences.map(({ icon: Icon, title, org, period, description }, i) => (
            <div key={title} className="relative pl-10 pb-10 last:pb-0">
              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <div className="absolute left-[15px] top-10 bottom-0 w-px bg-border" />
              )}
              {/* Dot */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                <Icon className="text-primary" size={14} />
              </div>

              <div className="group p-5 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                  <span className="text-xs font-body text-primary bg-primary/10 px-3 py-1 rounded-full">{period}</span>
                </div>
                <p className="font-body text-sm text-primary mb-2">{org}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
