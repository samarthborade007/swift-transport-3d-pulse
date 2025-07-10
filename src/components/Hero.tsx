import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Truck, Users, Globe } from 'lucide-react';
import heroTruck from '@/assets/hero-truck.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient mesh-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-crimson/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Forbes Badge */}
            <Badge variant="outline" className="inline-flex items-center gap-2 p-3 text-sm glow-primary border-primary/30">
              <Award className="h-4 w-4 text-primary" />
              Featured in Forbes India 2020
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">SWIFT</span>
                <br />
                <span className="primary-gradient bg-clip-text text-transparent">TRANSPORT</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                We make every possible effort to make your move smooth.
              </p>
            </div>

            {/* Stats Preview */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">75+ Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">150+ Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">10+ States</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="primary-gradient hover-lift glow-primary group"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </div>

            {/* Company Legacy */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">20+ years</span> of excellence in logistics • 
                Founded by <span className="text-foreground font-medium">Anand Shamrao Borade</span>
              </p>
            </div>
          </div>

          {/* Right Content - 3D Truck Image */}
          <div className="relative animate-zoom-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-crimson/20 rounded-3xl blur-2xl transform rotate-6"></div>
              
              {/* Main Image Container */}
              <div className="relative card-gradient p-1 rounded-3xl shadow-premium hover-lift">
                <img
                  src={heroTruck}
                  alt="SWIFT TRANSPORT - Modern Logistics Solutions"
                  className="w-full h-auto rounded-3xl"
                />
                
                {/* Floating Info Cards */}
                <div className="absolute top-6 right-6 card-gradient p-4 rounded-xl shadow-card animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground font-medium">Real-time Tracking</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 card-gradient p-4 rounded-xl shadow-card animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99.8%</div>
                    <div className="text-xs text-muted-foreground">On-time Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;