const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center space-y-4">
        <p className="font-display text-lg italic text-muted-foreground">
          "Success is not the key to happiness. Happiness is the key to success."
        </p>
        <div className="w-8 h-px bg-primary mx-auto" />
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Madan Paudel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
