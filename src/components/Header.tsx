import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border-muted z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center">
            <span className="text-background font-bold text-sm">A</span>
          </div>
          <span className="ml-3 text-xl font-semibold text-foreground">Apple</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground-muted hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#products" className="text-foreground-muted hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#support" className="text-foreground-muted hover:text-foreground transition-colors">
            Support
          </a>
        </nav>

        {/* CTA Button */}
        <Button className="bg-accent-primary hover:bg-accent-primary-hover text-background font-medium px-6">
          Get Started
        </Button>
      </div>
    </header>
  );
};