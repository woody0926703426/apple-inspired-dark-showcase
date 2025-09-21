import { AnimatedSection } from './AnimatedSection';

const features = [
  {
    title: 'Revolutionary Design',
    description: 'Crafted with precision and attention to detail, our products set new standards for elegance and functionality.',
    icon: '✨',
  },
  {
    title: 'Seamless Performance',
    description: 'Experience lightning-fast performance with our cutting-edge technology that anticipates your needs.',
    icon: '⚡',
  },
  {
    title: 'Intuitive Interface',
    description: 'Navigate effortlessly with interfaces designed for natural interaction and maximum productivity.',
    icon: '🎯',
  },
  {
    title: 'Premium Quality',
    description: 'Built to last with premium materials and rigorous testing to ensure exceptional durability.',
    icon: '🏆',
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-headline text-foreground mb-4">
              Innovation Meets Excellence
            </h2>
            <p className="text-body-large text-foreground-muted max-w-2xl mx-auto">
              Discover the features that make our products extraordinary and see why 
              millions trust us to enhance their digital experience.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 80}>
              <div className="glass-card p-8 text-center hover-lift h-full">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};