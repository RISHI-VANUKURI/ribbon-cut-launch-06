
import { Card, CardContent } from '@/components/ui/card';

const Activities = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Activities & Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Beyond books – nurturing creativity, confidence, and character through diverse activities
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Co-Curricular Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            At BMRS, we believe that true education extends far beyond the classroom. 
            Our comprehensive co-curricular program is designed to help students 
            discover their passions, develop new skills, and build lasting friendships 
            while fostering creativity, leadership, and teamwork.
          </p>
        </div>
      </section>

      {/* Sports Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Sports & Athletics
            </h2>
            <p className="text-lg text-gray-600">
              Building physical fitness, teamwork, and competitive spirit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Football", icon: "⚽", description: "Team strategy and physical fitness" },
              { name: "Basketball", icon: "🏀", description: "Coordination and team dynamics" },
              { name: "Cricket", icon: "🏏", description: "Precision and mental focus" },
              { name: "Athletics", icon: "🏃", description: "Track and field events" },
              { name: "Swimming", icon: "🏊", description: "Water sports and endurance" },
              { name: "Badminton", icon: "🏸", description: "Agility and quick reflexes" },
              { name: "Table Tennis", icon: "🏓", description: "Hand-eye coordination" },
              { name: "Volleyball", icon: "🏐", description: "Team coordination and strategy" }
            ].map((sport, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-4xl mb-3">{sport.icon}</div>
                  <h3 className="font-bold text-navy mb-2">{sport.name}</h3>
                  <p className="text-sm text-gray-600">{sport.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Arts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Creative Arts</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our arts program encourages students to express themselves creatively 
                and develop their artistic talents across various mediums and forms.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "Visual Arts", icon: "🎨", skills: "Drawing, Painting, Sculpture" },
                  { name: "Music", icon: "🎵", skills: "Vocal, Instrumental, Composition" },
                  { name: "Dance", icon: "💃", skills: "Classical, Contemporary, Folk" },
                  { name: "Drama", icon: "🎭", skills: "Theater, Performance, Expression" }
                ].map((art, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent>
                      <div className="text-3xl mb-2">{art.icon}</div>
                      <h3 className="font-bold text-navy mb-1">{art.name}</h3>
                      <p className="text-sm text-gray-600">{art.skills}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Students in art class"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Clubs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Academic Clubs & Societies
            </h2>
            <p className="text-lg text-gray-600">
              Specialized clubs that deepen academic interests and build expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Science Club",
                icon: "🔬",
                description: "Experiments, research projects, and science fairs to explore scientific concepts beyond the classroom."
              },
              {
                name: "Debate Society",
                icon: "🗣️",
                description: "Developing critical thinking, public speaking, and argumentation skills through structured debates."
              },
              {
                name: "Environmental Club",
                icon: "🌱",
                description: "Promoting environmental awareness and sustainability through various green initiatives."
              },
              {
                name: "Mathematics Club",
                icon: "📊",
                description: "Problem-solving competitions, mathematical puzzles, and advanced concept exploration."
              },
              {
                name: "Literature Society",
                icon: "📖",
                description: "Book clubs, creative writing, poetry, and literary discussions to foster love for literature."
              },
              {
                name: "Technology Club",
                icon: "💻",
                description: "Coding, robotics, and digital innovation projects to enhance technological skills."
              }
            ].map((club, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-4xl mb-4">{club.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3">{club.name}</h3>
                  <p className="text-gray-600">{club.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Student Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Celebrating excellence and success across all activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { achievement: "Regional Science Fair", award: "1st Place", year: "2024" },
              { achievement: "State Debate Championship", award: "Winners", year: "2023" },
              { achievement: "Inter-School Sports Meet", award: "Overall Champions", year: "2024" },
              { achievement: "National Art Competition", award: "Gold Medal", year: "2023" },
              { achievement: "Mathematics Olympiad", award: "Top 10", year: "2024" },
              { achievement: "Cultural Fest", award: "Best Performance", year: "2023" },
              { achievement: "Environmental Project", award: "Excellence Award", year: "2024" },
              { achievement: "Music Competition", award: "1st Place", year: "2023" }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="font-bold text-navy mb-2">{item.achievement}</h3>
                  <p className="text-gold font-semibold mb-1">{item.award}</p>
                  <p className="text-sm text-gray-600">{item.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl opacity-90">
              Hear from students about their experiences in our activity programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white text-navy">
              <CardContent>
                <blockquote className="text-lg italic mb-4">
                  "The debate society helped me build confidence and improved my public 
                  speaking skills tremendously. I feel more confident expressing my ideas now."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Arjun Sharma</p>
                    <p className="text-sm text-gray-600">Grade 10, Debate Society</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white text-navy">
              <CardContent>
                <blockquote className="text-lg italic mb-4">
                  "Being part of the football team taught me about teamwork and perseverance. 
                  The coaching staff is amazing and always encourages us to do our best."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">PR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Priya Reddy</p>
                    <p className="text-sm text-gray-600">Grade 9, Football Team</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gold text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-6">
            "Beyond books – nurturing creativity and confidence."
          </blockquote>
          <p className="text-xl opacity-90">- BMRS Activities Philosophy</p>
        </div>
      </section>
    </div>
  );
};

export default Activities;
