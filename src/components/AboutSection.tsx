import { MapPin, Briefcase, GraduationCap, Target } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  { icon: MapPin, label: 'Nepal' },
  { icon: Briefcase, label: 'Business Development' },
  { icon: GraduationCap, label: 'Marketing Student' },
  { icon: Target, label: 'Growth Focused' },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-card">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient-gold">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            I'm Madan Paudel, a driven Business Development Executive and Marketing student from Nepal.
            My passion lies at the intersection of marketing strategy, hospitality, and sales — where I turn
            ideas into meaningful customer relationships and sustainable business growth. I believe in continuous
            learning and leading with empathy, creativity, and data-driven decisions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 hover:gold-border-glow transition-all duration-300 group"
            >
              <Icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={28} />
              <span className="font-body text-sm text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
