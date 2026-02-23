import { TrendingUp, Handshake, Users, MessageSquare, Hotel } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skills = [
  { icon: TrendingUp, title: 'Marketing Strategy', level: 85, description: 'Crafting data-driven campaigns that resonate with target audiences.' },
  { icon: Handshake, title: 'Business Development', level: 90, description: 'Building strategic partnerships and identifying growth opportunities.' },
  { icon: Users, title: 'Customer Relationship', level: 88, description: 'Nurturing long-term client relationships and maximizing retention.' },
  { icon: MessageSquare, title: 'Sales Communication', level: 82, description: 'Persuasive storytelling that converts prospects into loyal customers.' },
  { icon: Hotel, title: 'Hospitality Marketing', level: 80, description: 'Specialized strategies for the hospitality and tourism industry.' },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient-gold">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map(({ icon: Icon, title, level, description }) => (
            <div
              key={title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:gold-border-glow"
            >
              <Icon className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{description}</p>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-gold-glow rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${level}%` }}
                />
              </div>
              <span className="font-body text-xs text-muted-foreground mt-1 inline-block">{level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
