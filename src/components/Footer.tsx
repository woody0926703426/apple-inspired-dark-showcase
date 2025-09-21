export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-muted bg-surface/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  iPhone
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  iPad
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Mac
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-md bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center mr-3">
              <span className="text-background font-bold text-xs">A</span>
            </div>
            <span className="text-foreground font-semibold">Apple</span>
          </div>
          
          <p className="text-foreground-muted text-sm">
            © {currentYear} Apple Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};