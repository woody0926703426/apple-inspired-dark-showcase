import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';
import heroProduct from '@/assets/hero-product.jpg';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h1 className="text-display gradient-text mb-6">
            Think Different.
            <br />
            Create Amazing.
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={80}>
          <p className="text-body-large text-foreground-muted max-w-2xl mx-auto mb-12">
            Experience the future of technology with our revolutionary products designed 
            to enhance your digital life and unlock new possibilities.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={160}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent-primary hover:bg-accent-primary-hover text-background font-semibold px-8 py-4 text-lg"
            >
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border text-foreground hover:bg-surface-elevated px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={240}>
          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card p-4 hover-lift">
              <img 
                src={heroProduct} 
                alt="Revolutionary tech product showcasing sleek design and premium quality"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};