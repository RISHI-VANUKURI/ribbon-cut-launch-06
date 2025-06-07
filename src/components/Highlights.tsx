
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Star, Users, BookOpen, Zap } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "100% pass rate in board examinations for the last 5 consecutive years"
    },
    {
      icon: Trophy,
      title: "Sports Achievements",
      description: "State-level winners in Kabaddi, Cricket, and Athletics competitions"
    },
    {
      icon: Star,
      title: "Quality Education",
      description: "CBSE affiliated school with modern teaching methodologies and smart classrooms"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "20+ qualified teachers with average 10+ years of teaching experience"
    },
    {
      icon: BookOpen,
      title: "Holistic Development",
      description: "Focus on academics, arts, sports, and character building for complete personality development"
    },
    {
      icon: Zap,
      title: "Modern Infrastructure",
      description: "Well-equipped laboratories, library, computer lab, and sports facilities"
    }
  ];

  const achievements = [
    "District Level Science Exhibition - 1st Prize (2023)",
    "State Level Kabaddi Championship - Winners (2023)",
    "Inter-School Cultural Fest - Best Performance Award (2023)",
    "Mathematics Olympiad - 15 students qualified for nationals (2023)",
    "Environmental Awareness Campaign - Best School Award (2022)"
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlights Section */}
        <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
          <Star className="w-12 h-12 text-gold mx-auto mb-4 animate-bounceIn" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 animate-fadeInUp delay-200">
            School Highlights
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-300">
            What makes BMRS Group of Schools stand out
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-cardFloat hover-lift" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 animate-bounceIn" style={{animationDelay: `${index * 150}ms`}}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3 animate-fadeInUp" style={{animationDelay: `${index * 200}ms`}}>
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed animate-fadeIn" style={{animationDelay: `${index * 250}ms`}}>
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg animate-slideInUp">
          <div className="text-center mb-8">
            <Trophy className="w-12 h-12 text-gold mx-auto mb-4 animate-bounceIn" />
            <h3 className="text-2xl font-bold text-navy mb-4 animate-fadeInUp delay-200">
              Recent Achievements & Results
            </h3>
            <p className="text-gray-600 animate-fadeIn delay-300">
              Our students' outstanding accomplishments
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gold/10 transition-colors animate-slideInLeft hover-lift" 
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 animate-bounceIn" style={{animationDelay: `${index * 200}ms`}}>
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 animate-fadeInUp" style={{animationDelay: `${index * 250}ms`}}>
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
