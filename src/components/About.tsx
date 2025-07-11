import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Target, Users, Lightbulb, Heart, Shield, Quote } from 'lucide-react';
import warehouseImage from '@/assets/warehouse-3d.jpg';
import anandBorade from '@/assets/anand-borade.jpg';
import forbesFeature from '@/assets/forbes-feature.jpg';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Integrity',
      description: 'Honest and transparent business practices in every interaction'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Understanding',
      description: 'Deep comprehension of client needs and market dynamics'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Excellence',
      description: 'Delivering superior quality in every service we provide'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Unity',
      description: 'Strong teamwork and collaboration across all operations'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Responsibility',
      description: 'Accountable for results and committed to sustainability'
    }
  ];

  const covidStory = {
    title: "COVID-19 Heroes - Forbes India Feature",
    date: "June 6, 2020",
    description: "During the pandemic, SWIFT TRANSPORT stepped up as frontline heroes, supplying essential equipment to Mumbai's major hospitals including Kasturba, JJ, and Nair. We fixed morgue cooling systems, installed medical freezers, and served across Maharashtra - all within hours when the city needed us most."
  };

  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="primary-gradient bg-clip-text text-transparent">SWIFT TRANSPORT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end transport solution provider offering unmatched speed, flexibility, and customer-first services
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <Badge variant="outline" className="mb-4 p-2 border-primary/30 text-primary">
                <Award className="h-4 w-4 mr-2" />
                Founder & Proprietor
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Anand Shamrao Borade
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded SWIFT TRANSPORT with a vision to revolutionize logistics in Maharashtra. Under his leadership, the company has grown to become one of the most trusted transport partners in the region.
              </p>
              
              {/* Testimony */}
              <div className="card-gradient p-6 rounded-2xl border border-border/50 bg-background/50">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg italic text-foreground leading-relaxed mb-4">
                  "When I started SWIFT TRANSPORT over 30 years ago, my vision was simple - to provide reliable, efficient transport solutions that businesses could depend on. Today, seeing our team of 150+ professionals serve clients across Maharashtra fills me with immense pride. We don't just move goods; we move dreams, aspirations, and the wheels of commerce that drive India forward."
                </blockquote>
                <cite className="text-primary font-semibold">- Anand Shamrao Borade, Founder & Proprietor</cite>
              </div>
            </div>
          </div>

          {/* Right - Founder Photo */}
          <div className="relative animate-zoom-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-crimson/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative card-gradient p-1 rounded-3xl shadow-premium hover-lift">
                <img
                  src={anandBorade}
                  alt="Anand Shamrao Borade - Founder & Proprietor of SWIFT TRANSPORT"
                  className="w-full h-96 object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent rounded-b-3xl p-6">
                  <h4 className="text-xl font-bold text-foreground mb-1">Anand Shamrao Borade</h4>
                  <p className="text-primary font-medium">Founder & Proprietor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <Badge variant="outline" className="mb-4 p-2 border-primary/30 text-primary">
                <Award className="h-4 w-4 mr-2" />
                30+ Years of Excellence
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Building India's Logistics Future
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                SWIFT TRANSPORT has grown from a vision to become one of Maharashtra's most trusted logistics partners. Under the leadership of CFO <span className="text-primary font-semibold">Dhruv Anand Borade</span>, we continue to innovate and expand our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our business model increases agility, reduces overhead, and maximizes customer satisfaction through strategic partnerships and cutting-edge technology integration.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Fleet owners and contractors with 75+ vehicles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Serving Mumbai, Thane & all over Maharashtra</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">150+ dedicated professionals ensuring quality service</span>
              </div>
            </div>

     
          </div>

          {/* Right Image */}
          <div className="relative animate-zoom-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-crimson/20 rounded-3xl blur-2xl transform -rotate-6"></div>
              <div className="relative card-gradient p-1 rounded-3xl shadow-premium hover-lift">
                <img
                  src={warehouseImage}
                  alt="SWIFT TRANSPORT Warehouse and Logistics Facility"
                  className="w-full h-80 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* COVID Story Feature */}
        <div className="mb-20 animate-fade-in-up">
          <div className="card-gradient p-8 lg:p-12 rounded-3xl shadow-premium border border-border/50 hover:border-primary/30 transition-smooth">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-red-500/10 text-red-400 border-red-500/30">
                    <Award className="h-4 w-4 mr-2" />
                    Featured in Forbes India
                  </Badge>
                  <span className="text-sm text-muted-foreground">{covidStory.date}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {covidStory.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {covidStory.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl"></div>
<a
  href="https://www.forbesindia.com/article/coronavirus/covid19-meet-those-who-are-lending-a-helping-hand/59905/1"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={forbesFeature}
    alt="Forbes India COVID-19 Heroes Feature"
    className="relative w-full h-64 object-cover rounded-2xl shadow-lg hover-lift"
  />
</a>

                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center glow-crimson">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Aspiration */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Aspiration</h3>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
              "Our aspiration is to be a <span className="text-primary font-semibold">world-class transport company</span> with dominant Indian leadership and <span className="text-primary font-semibold">global presence</span>."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-xl text-muted-foreground">
              The principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-gradient p-6 rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-smooth text-center h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 primary-gradient rounded-xl mb-4 glow-primary group-hover:scale-110 transition-spring">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;