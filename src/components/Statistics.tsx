
import { useEffect, useState } from 'react';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ end, label, suffix = '' }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building a legacy of excellence through dedicated education and community engagement
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <StatItem end={2000} label="Students Enrolled" suffix="+" />
          <StatItem end={90} label="Qualified Staff" suffix="+" />
          <StatItem end={80} label="Clubs & Activities" suffix="+" />
          <StatItem end={100} label="PTFA Members" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
