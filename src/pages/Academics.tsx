
import { Card, CardContent } from '@/components/ui/card';

const Academics = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive curriculum designed to nurture academic excellence and critical thinking
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Curriculum Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our academic programs are designed to provide students with a strong foundation 
              while encouraging exploration and creativity across all grade levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow animate-cardFloat hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 text-center">Kindergarten</h3>
                <p className="text-gray-600 mb-4">
                  Play-based learning approach that develops foundational skills through 
                  exploration, creativity, and social interaction.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Language and literacy development</li>
                  <li>• Basic numeracy skills</li>
                  <li>• Creative arts and crafts</li>
                  <li>• Social and emotional learning</li>
                  <li>• Motor skills development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow animate-cardFloat delay-200 hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-200">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 text-center">Primary School</h3>
                <p className="text-gray-600 mb-4">
                  Building strong academic foundations with emphasis on critical thinking, 
                  problem-solving, and character development.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Core subjects mastery</li>
                  <li>• Introduction to sciences</li>
                  <li>• Language arts and communication</li>
                  <li>• Mathematics fundamentals</li>
                  <li>• Cultural and social studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow animate-cardFloat delay-400 hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-400">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 text-center">High School</h3>
                <p className="text-gray-600 mb-4">
                  Advanced academic preparation with specialized tracks to prepare 
                  students for higher education and career success.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Advanced placement courses</li>
                  <li>• College preparation programs</li>
                  <li>• Research and project-based learning</li>
                  <li>• Career guidance and counseling</li>
                  <li>• Leadership development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Subject Areas
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive education across diverse disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mathematics",
                icon: "🔢",
                description: "Problem-solving, logical thinking, and analytical skills development through comprehensive mathematical concepts."
              },
              {
                title: "Science",
                icon: "🔬",
                description: "Hands-on experiments and research to understand the natural world and develop scientific inquiry skills."
              },
              {
                title: "Humanities",
                icon: "🌍",
                description: "Social studies, history, and geography to build global awareness and cultural understanding."
              },
              {
                title: "Languages",
                icon: "🗣️",
                description: "Communication skills in multiple languages including English, and regional languages."
              },
              {
                title: "Computer Science",
                icon: "💻",
                description: "Digital literacy, programming, and technology skills for the modern world."
              },
              {
                title: "Fine Arts",
                icon: "🎨",
                description: "Creative expression through visual arts, music, dance, and drama programs."
              }
            ].map((subject, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-shadow animate-cardFloat delay-${(index % 3 + 1) * 100} hover-lift`}>
                <CardContent>
                  <div className={`text-4xl mb-4 animate-bounceIn delay-${(index % 3 + 1) * 200}`}>{subject.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3">{subject.title}</h3>
                  <p className="text-gray-600">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-navy mb-6">Teaching Methodology</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our innovative teaching approach combines traditional educational values 
                with modern pedagogical techniques to create an engaging and effective 
                learning environment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 animate-slideInUp">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Interactive Learning</h4>
                    <p className="text-gray-600">Engaging classroom activities that promote active participation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 animate-slideInUp delay-100">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Personalized Attention</h4>
                    <p className="text-gray-600">Small class sizes ensuring individual student focus</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 animate-slideInUp delay-200">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Technology Integration</h4>
                    <p className="text-gray-600">Modern tools and digital resources to enhance learning</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 animate-slideInUp delay-300">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">Project-Based Learning</h4>
                    <p className="text-gray-600">Real-world applications that develop practical skills</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slideInRight">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Teaching methodology"
                className="rounded-lg shadow-xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assessment System */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Student Assessment System
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation methods that focus on holistic development 
              rather than just academic performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 animate-cardFloat hover-lift">
              <CardContent>
                <h3 className="text-xl font-bold text-navy mb-4">Continuous Assessment</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Regular quizzes and assignments</li>
                  <li>• Project-based evaluations</li>
                  <li>• Classroom participation</li>
                  <li>• Peer learning activities</li>
                  <li>• Portfolio development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 animate-cardFloat delay-200 hover-lift">
              <CardContent>
                <h3 className="text-xl font-bold text-navy mb-4">Holistic Evaluation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Academic progress tracking</li>
                  <li>• Social skills development</li>
                  <li>• Creative expression assessment</li>
                  <li>• Leadership qualities evaluation</li>
                  <li>• Character development review</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
