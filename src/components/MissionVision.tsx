
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-lg animate-slideInUp">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 animate-fadeInUp delay-200">
                Our Mission & Vision
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-300">
                Guiding principles that shape our educational approach
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="text-center animate-slideInLeft">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-200">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 animate-fadeInUp delay-300">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed animate-fadeIn delay-400">
                  To provide quality education that nurtures young minds, builds character, 
                  and prepares students to become responsible global citizens. We strive to 
                  create an environment where every child can discover their potential and 
                  achieve excellence in academics, sports, and personal development.
                </p>
              </div>

              <div className="text-center animate-slideInRight">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-400">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 animate-fadeInUp delay-500">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed animate-fadeIn delay-600">
                  To be recognized as a premier educational institution that inspires 
                  lifelong learning, innovation, and leadership. We envision graduates 
                  who are confident, compassionate, and equipped with the knowledge and 
                  skills needed to make a positive impact in their communities and beyond.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MissionVision;
