const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-foreground">
              <span className="text-accent">Bright</span>Pixel
            </span>
            <span className="text-muted-foreground">Digital</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BrightPixel Digital. Bangalore, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
