
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
                  In today’s world, technology and communication are powerful tools in education. 
                  By introducing digital tablets, advanced computer labs, and audio-visual conference halls, we enable personalized learning and innovative teaching.
                  These resources strengthen the bond between teachers, students, parents, and management, while also encouraging creativity, teamwork, and project-based learning.

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
                At our institution, we believe education is not limited to textbooks — it is a journey that nurtures young minds with knowledge, values, and skills for life. Our vision is to create an environment where every student is empowered to discover their potential, express their creativity, and grow into a responsible global citizen.

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
