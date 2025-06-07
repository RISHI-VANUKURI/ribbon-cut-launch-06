
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Lightbulb } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-12 sm:py-16 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
          <Lightbulb className="w-12 h-12 text-gold mx-auto mb-4 animate-bounceIn" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-fadeInUp delay-200">
            Our Mission & Vision
          </h2>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-300">
            Guiding principles that shape our educational philosophy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-slideInLeft hover-lift">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-4 animate-bounceIn delay-200">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold animate-fadeInUp delay-300">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90 animate-fadeInUp delay-400">
                To provide holistic education that nurtures young minds, develops character, 
                and prepares students to become responsible global citizens who can contribute 
                meaningfully to society while maintaining strong moral values and academic excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-slideInRight hover-lift">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-4 animate-bounceIn delay-400">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold animate-fadeInUp delay-500">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90 animate-fadeInUp delay-600">
                To be a leading educational institution that inspires innovation, creativity, 
                and lifelong learning. We envision creating confident, compassionate, and 
                capable individuals who will lead positive change in their communities and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
