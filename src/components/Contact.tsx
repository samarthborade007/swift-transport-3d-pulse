import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Numbers',
      details: ['9820146104', '9833725104'],
      action: 'Call Now'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Address',
      details: ['itsmedhruv418@gmail.com'],
      action: 'Send Email'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Locations',
      details: ['Bhandup, Mumbai', 'Thane, Maharashtra'],
      action: 'Get Directions'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 7:00 PM', '24/7 Emergency Support'],
      action: 'Emergency Line'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 p-2 border-primary/30 text-primary">
            <Award className="h-4 w-4 mr-2" />
            24/7 Customer Support
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="primary-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to streamline your logistics? Contact us for a personalized quote and consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="card-gradient p-8 lg:p-10 rounded-3xl shadow-premium border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-2">Request a Quote</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you with a customized solution
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="bg-background/50 border-border/50 hover:border-primary/30 transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="bg-background/50 border-border/50 hover:border-primary/30 transition-smooth"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="bg-background/50 border-border/50 hover:border-primary/30 transition-smooth"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company Name
                    </label>
                    <Input
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-background/50 border-border/50 hover:border-primary/30 transition-smooth"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Service Required
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="bg-background/50 border-border/50 hover:border-primary/30 transition-smooth">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transportation">Transportation</SelectItem>
                      <SelectItem value="warehousing">Warehousing</SelectItem>
                      <SelectItem value="same-day">Same-Day Delivery</SelectItem>
                      <SelectItem value="secure">Secure Transit</SelectItem>
                      <SelectItem value="route-optimization">Route Optimization</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your logistics requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="bg-background/50 border-border/50 hover:border-primary/30 transition-smooth"
                  />
                </div>

                <Button type="submit" className="w-full primary-gradient hover-lift glow-primary group">
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Send Quote Request
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="hover-lift"
              >
                <div className="card-gradient p-6 rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="primary-gradient p-3 rounded-xl glow-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                      <Button variant="outline" size="sm" className="mt-3 hover:border-primary hover:text-primary transition-smooth">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="card-gradient p-6 rounded-2xl shadow-card border border-crimson/30 hover:border-crimson/50 transition-smooth">
              <div className="text-center">
                <div className="w-16 h-16 crimson-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-crimson">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Emergency Support</h4>
                <p className="text-muted-foreground mb-4">
                  Need urgent logistics support? Our emergency team is available 24/7
                </p>
                <Button className="crimson-gradient hover-lift glow-crimson">
                  Call Emergency Line
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Locations</h3>
            <p className="text-xl text-muted-foreground">
              Visit our offices in Mumbai and Thane for in-person consultations
            </p>
          </div>

          <div className="card-gradient p-1 rounded-3xl shadow-premium">
            <div className="bg-muted/20 h-96 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">Interactive Map</h4>
                <p className="text-muted-foreground">
                  Embedded Google Maps showing our office locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;