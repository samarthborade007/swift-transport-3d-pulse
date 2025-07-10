import { Truck, Package, Clock, Shield, MapPin, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import transportIcons from '@/assets/transport-icons.jpg';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Transportation',
      description: 'Guaranteed, on-time, safe delivery with our fleet of owned and partnered vehicles across India.',
      features: ['Real-time tracking', 'Temperature controlled', 'Express delivery', 'Bulk transportation']
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Warehousing',
      description: 'Secure storage solutions with advanced inventory management and distribution capabilities.',
      features: ['Climate controlled', '24/7 security', 'Inventory management', 'Cross-docking']
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Same-Day Delivery',
      description: 'Urgent delivery solutions for time-critical shipments within Mumbai and Maharashtra.',
      features: ['2-hour delivery', 'Emergency service', 'City-wide coverage', 'Real-time updates']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Transit',
      description: 'High-value cargo protection with insurance coverage and specialized handling protocols.',
      features: ['Insurance coverage', 'GPS tracking', 'Secure vehicles', 'Professional drivers']
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Route Optimization',
      description: 'Smart logistics planning to ensure fastest, most cost-effective delivery routes.',
      features: ['AI-powered routes', 'Traffic analysis', 'Fuel efficiency', 'Time optimization']
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: 'Value-Added Services',
      description: 'Tailored logistics solutions designed after comprehensive customer consultation.',
      features: ['Custom solutions', '24/7 support', 'Dedicated account manager', 'Flexible pricing']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="primary-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to meet every transportation need with precision and reliability
          </p>
        </div>

        {/* Hero Service Image */}
        <div className="mb-20 relative animate-zoom-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-crimson/10 rounded-3xl blur-2xl"></div>
            <div className="relative card-gradient p-1 rounded-3xl shadow-premium">
              <img
                src={transportIcons}
                alt="SWIFT TRANSPORT Services - 3D Logistics Icons"
                className="w-full h-64 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">End-to-End Logistics Solutions</h3>
                <p className="text-muted-foreground">From pickup to delivery, we handle every aspect of your logistics needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-smooth h-full">
                {/* Service Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 primary-gradient rounded-xl mb-6 glow-primary group-hover:scale-110 transition-spring">
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Our team of logistics experts can design a tailored solution that perfectly fits your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="primary-gradient hover-lift glow-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Custom Quote
              </Button>
              <Button 
                variant="outline" 
                className="hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;