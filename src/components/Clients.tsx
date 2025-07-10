import { Badge } from '@/components/ui/badge';
import { Award, Star, TrendingUp } from 'lucide-react';

const Clients = () => {
  const clients = [
    'LG India', 'Videocon', 'Onida', 'Philips', 'Colgate Palmolive',
    'Capital Foods', 'Ipca Pharma', 'Lifestyle Int.', 'TCL', 'Shreya Life Sciences',
    'Godrej', 'Mahindra', 'Bajaj', 'Reliance', 'Tata Motors'
  ];

  const testimonials = [
    {
      company: 'LG India',
      text: 'SWIFT TRANSPORT has been our reliable logistics partner for over 5 years. Their commitment to timely delivery is unmatched.',
      rating: 5
    },
    {
      company: 'Colgate Palmolive',
      text: 'Exceptional service quality and professional handling of our sensitive cargo. Highly recommended for pharmaceutical logistics.',
      rating: 5
    },
    {
      company: 'Lifestyle International',
      text: 'Their real-time tracking system and customer support have transformed our supply chain efficiency.',
      rating: 5
    }
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 p-2 border-primary/30 text-primary">
            <Award className="h-4 w-4 mr-2" />
            Trusted by India's Top Brands
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="primary-gradient bg-clip-text text-transparent">Clientele</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serving industry leaders across multiple sectors with excellence and reliability
          </p>
        </div>

        {/* Client Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="card-gradient p-6 rounded-xl shadow-card border border-border/50 hover:border-primary/30 transition-smooth text-center h-full flex items-center justify-center">
                  <div className="text-foreground font-semibold text-sm lg:text-base group-hover:text-primary transition-smooth">
                    {client}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-muted-foreground">
              Real feedback from our valued partners
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-smooth h-full">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Company */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.company}</div>
                      <div className="text-sm text-muted-foreground">Valued Client</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center animate-fade-in-up">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Featured in Forbes</div>
                <div className="text-sm text-muted-foreground">India's COVID Heroes</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Trusted Partner</div>
                <div className="text-sm text-muted-foreground">12+ Major Brands</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Growing Network</div>
                <div className="text-sm text-muted-foreground">50% Annual Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;