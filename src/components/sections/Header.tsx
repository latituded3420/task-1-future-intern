import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldUseDarkText = scrolled || !isHomePage;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHomePage
        ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`font-display text-xl md:text-2xl font-bold transition-colors ${
              shouldUseDarkText ? 'text-foreground' : 'text-primary-foreground'
            }`}>
              <span className="text-accent">Bright</span>Pixel
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  shouldUseDarkText ? 'text-foreground' : 'text-primary-foreground'
                } ${location.pathname === link.href ? 'text-accent' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button 
              variant={shouldUseDarkText ? "hero" : "heroOutline"} 
              size="sm"
              className={!shouldUseDarkText ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary' : ''}
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${shouldUseDarkText ? 'text-foreground' : 'text-primary-foreground'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${shouldUseDarkText ? 'text-foreground' : 'text-primary-foreground'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === link.href ? 'text-accent' : 'text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
