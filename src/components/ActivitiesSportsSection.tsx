
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const ActivitiesSportsSection = () => {
  const sports = [
    {
      name: "Kabaddi",
      description: "Traditional Indian sport with state-level championship victories",
      achievements: "State Champions 2023, District Winners 2022-2023",
      icon: "🤼"
    },
    {
      name: "Cricket",
      description: "Inter-school tournaments and coaching by certified trainers",
      achievements: "District Level Semi-finalists 2023",
      icon: "🏏"
    },
    {
      name: "Athletics",
      description: "Track and field events including running, jumping, and throwing",
      achievements: "Multiple individual medals in district competitions",
      icon: "🏃"
    },
    {
      name: "Basketball",
      description: "Indoor sports facility with professional coaching",
      achievements: "Regional Tournament Participants 2023",
      icon: "🏀"
    },
    {
      name: "Badminton",
      description: "Indoor courts with equipment and trained instructors",
      achievements: "School level tournaments and coaching programs",
      icon: "🏸"
    },
    {
      name: "Table Tennis",
      description: "Multiple tables for practice and competitive play",
      achievements: "Inter-school competitions and skill development",
      icon: "🏓"
    }
  ];

  const facilities = [
    {
      icon: Target,
      title: "Professional Coaching",
      description: "Qualified sports instructors and trainers"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Focus on teamwork and leadership skills"
    },
    {
      icon: Zap,
      title: "Modern Equipment",
      description: "Quality sports equipment and facilities"
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
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
          <Trophy className="w-12 h-12 text-gold mx-auto mb-4 animate-bounceIn" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 animate-fadeInUp delay-200">
            Sports & Athletics
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-300">
            Building champions through sports and physical fitness
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {sports.map((sport, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-cardFloat hover-lift" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-0">
                <div className="text-4xl mb-4 animate-bounceIn" style={{animationDelay: `${index * 150}ms`}}>
                  {sport.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3 animate-fadeInUp" style={{animationDelay: `${index * 200}ms`}}>
                  {sport.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed animate-fadeIn" style={{animationDelay: `${index * 250}ms`}}>
                  {sport.description}
                </p>
                <div className="bg-gold/10 rounded-lg p-3 animate-slideInUp" style={{animationDelay: `${index * 300}ms`}}>
                  <p className="text-sm font-medium text-gold">
                    🏆 {sport.achievements}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sports Facilities */}
        <div className="bg-navy rounded-2xl p-8 text-white mb-12 animate-slideInUp">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 animate-fadeInUp">
              Sports Facilities & Programs
            </h3>
            <p className="opacity-90 animate-fadeIn delay-200">
              Excellence in sports through quality infrastructure and coaching
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="text-center animate-cardFloat hover-lift" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 animate-bounceIn" style={{animationDelay: `${index * 250}ms`}}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 animate-fadeInUp" style={{animationDelay: `${index * 300}ms`}}>
                    {facility.title}
                  </h4>
                  <p className="text-sm opacity-90 animate-fadeIn" style={{animationDelay: `${index * 350}ms`}}>
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Achievements */}
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

export default ActivitiesSportsSection;
