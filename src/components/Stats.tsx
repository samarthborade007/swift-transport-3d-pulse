import { useEffect, useState, useRef } from 'react';
import { Truck, Users, Calendar, TrendingUp, MapPin, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon, value, suffix, label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          setTimeout(() => {
            const duration = 2000;
            const increment = value / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 16);

            return () => clearInterval(timer);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, delay, isVisible]);

  return (
    <div ref={ref} className="text-center group hover-lift">
      <div className="card-gradient p-8 rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-smooth">
        <div className="inline-flex items-center justify-center w-16 h-16 primary-gradient rounded-xl mb-4 glow-primary group-hover:scale-110 transition-spring">
          {icon}
        </div>
        <div className="counter text-primary">{count}{suffix}</div>
        <p className="text-muted-foreground mt-2 font-medium">{label}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: <Truck className="h-8 w-8 text-white" />,
      value: 75,
      suffix: '+',
      label: 'Vehicles',
      delay: 0
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      value: 150,
      suffix: '+',
      label: 'Staff Members',
      delay: 200
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      value: 20,
      suffix: '+',
      label: 'Years of Service',
      delay: 400
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      value: 50,
      suffix: '%',
      label: 'Annual Growth',
      delay: 600
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      value: 12,
      suffix: '+',
      label: 'Major Clients',
      delay: 800
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      value: 10,
      suffix: '+',
      label: 'States Covered',
      delay: 1000
    }
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="primary-gradient bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and reliability in logistics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-muted-foreground">
            Building India's logistics future, one delivery at a time
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;