import { useState } from 'react';
import { Mail, Phone, Linkedin, Facebook, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message sent!', description: 'Thank you for reaching out. I\'ll get back to you soon.' });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-gradient-gold">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <p className="font-body text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, and conversations. Whether it's a business proposition or just a friendly hello — let's connect!
            </p>

            <div className="space-y-4">
              <a href="mailto:paudelmadan73@email.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="font-body text-sm">paudelmadan73@email.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <span className="font-body text-sm">+977-XXXXXXXXXX</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/madan-paudel-378105369?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 border border-transparent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-primary" size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 border border-transparent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="text-primary" size={18} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-secondary/50 border-border focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-secondary/50 border-border focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="bg-secondary/50 border-border focus:border-primary resize-none"
            />
            <Button variant="hero" size="lg" type="submit" className="w-full gap-2">
              <Send size={16} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
