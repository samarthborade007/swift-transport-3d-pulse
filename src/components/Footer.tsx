import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Phone, Mail, MapPin, Award, Shield, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Our Clients', href: '#clients' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Transportation', href: '#services' },
      { name: 'Warehousing', href: '#services' },
      { name: 'Same-Day Delivery', href: '#services' },
      { name: 'Value-Added Services', href: '#services' }
    ],
    support: [
      { name: 'Customer Support', href: '#contact' },
      { name: 'Emergency Service', href: '#contact' },
      { name: 'Track Shipment', href: '#' },
      { name: 'Get Quote', href: '#contact' }
    ]
  };

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="primary-gradient p-2 rounded-xl glow-primary">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">SWIFT TRANSPORT</h3>
                <p className="text-xs text-muted-foreground">India's Finest Logistics</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "We make every possible effort to make your move smooth." - Your trusted logistics partner with over 20 years of excellence.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <Badge variant="outline" className="border-primary/30 text-primary">
                <Award className="h-4 w-4 mr-2" />
                Featured in Forbes India
              </Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-400">
                <Shield className="h-4 w-4 mr-2" />
                Trusted by India's Top Brands
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-foreground font-medium">9820146104</div>
                  <div className="text-foreground font-medium">9833725104</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-foreground">itsmedhruv418@gmail.com</div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-foreground">Bhandup, Mumbai</div>
                  <div className="text-foreground">Thane, Maharashtra</div>
                </div>
              </div>
            </div>

            {/* Emergency Button */}
            <Button className="mt-6 crimson-gradient hover-lift glow-crimson w-full">
              <Phone className="mr-2 h-4 w-4" />
              Emergency Support
            </Button>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="text-center">
            <h4 className="text-xl font-bold text-foreground mb-4">Leadership</h4>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div className="text-center">
                <h5 className="font-semibold text-foreground">Anand Shamrao Borade</h5>
                <p className="text-sm text-muted-foreground">Founder & Chairman</p>
              </div>
              <div className="text-center">
                <h5 className="font-semibold text-foreground">Dhruv Anand Borade</h5>
                <p className="text-sm text-muted-foreground">Chief Financial Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background/80 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 SWIFT TRANSPORT. All rights reserved.
              </p>
              <p className="text-primary text-sm font-medium">
                "Swift Delivery. Trusted Journey."
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Proudly serving Maharashtra</span>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="hover:border-primary hover:text-primary transition-smooth"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;