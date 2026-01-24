import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className={`font-display text-xl md:text-2xl font-bold transition-colors ${
              scrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}>
              <span className="text-accent">Bright</span>Pixel
            </div>
          </a>
          
          {/* CTA */}
          <Button 
            variant={scrolled ? "hero" : "heroOutline"} 
            size="sm"
            className={!scrolled ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary' : ''}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
