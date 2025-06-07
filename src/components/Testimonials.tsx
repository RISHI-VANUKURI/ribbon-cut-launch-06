
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Users, GraduationCap, Heart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      type: "parent",
      quote: "BMRS has been instrumental in shaping my child's character and academic excellence. The teachers are dedicated and the environment is nurturing. We couldn't have asked for a better school.",
      name: "Mrs. Priya Sharma",
      designation: "Parent of Grade 8 Student",
      icon: Heart
    },
    {
      type: "teacher",
      quote: "Working at BMRS has been an incredible journey. The school's commitment to both student and teacher development creates an environment where everyone can thrive and grow together.",
      name: "Mr. Rajesh Kumar",
      designation: "Mathematics Teacher",
      icon: Users
    },
    {
      type: "alumni",
      quote: "The values and education I received at BMRS have been the foundation of my success. The school prepared me not just academically but also as a responsible citizen.",
      name: "Sarah Mohammed",
      designation: "Alumni, Class of 2018",
      icon: GraduationCap
    },
    {
      type: "parent",
      quote: "The holistic approach at BMRS ensures that children develop in all aspects - academics, sports, arts, and social skills. It's truly a complete educational experience.",
      name: "Mr. Venkat Reddy",
      designation: "Parent of Grade 5 Student",
      icon: Heart
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
          <Quote className="w-12 h-12 text-gold mx-auto mb-4 animate-bounceIn" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 animate-fadeInUp delay-200">
            What Our Community Says
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-300">
            Hear from parents, teachers, and alumni about their BMRS experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-cardFloat hover-lift" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 animate-bounceIn" style={{animationDelay: `${index * 200}ms`}}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy animate-fadeInUp" style={{animationDelay: `${index * 250}ms`}}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 animate-fadeIn" style={{animationDelay: `${index * 300}ms`}}>
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                  
                  <Quote className="w-8 h-8 text-gray-300 mb-2 animate-scaleIn" style={{animationDelay: `${index * 350}ms`}} />
                  <p className="text-gray-700 italic leading-relaxed animate-fadeInUp" style={{animationDelay: `${index * 400}ms`}}>
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
