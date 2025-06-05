
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About BMRS Group of Schools</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A legacy of educational excellence, nurturing young minds for over two decades
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to provide quality education that goes beyond textbooks, 
                BMRS Group of Schools has been at the forefront of educational innovation. 
                We believe in creating an environment where students can explore, discover, 
                and develop their unique talents.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple yet powerful belief: every child deserves 
                an education that prepares them not just for exams, but for life. Today, 
                we continue to uphold this philosophy through our comprehensive educational 
                programs and dedicated faculty.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="School building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Vision</h3>
                <p className="text-gray-600">
                  To be a leading educational institution that empowers students to 
                  become confident, creative, and compassionate global citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Mission</h3>
                <p className="text-gray-600">
                  To provide quality education through innovative teaching methods, 
                  fostering critical thinking, and developing well-rounded individuals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Values</h3>
                <p className="text-gray-600">
                  Excellence, Integrity, Respect, Innovation, and Community - 
                  the core values that shape our educational approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                alt="Principal"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy mb-6">Principal's Message</h2>
              <blockquote className="text-lg text-gray-600 italic mb-6">
                "Education is not just about filling minds with knowledge; it's about 
                igniting the spark of curiosity and creativity in every child. At BMRS, 
                we are committed to providing an environment where students can discover 
                their passions, develop their skills, and build the confidence to 
                pursue their dreams."
              </blockquote>
              <p className="text-lg text-gray-600 mb-4">
                Our dedicated team of educators works tirelessly to ensure that each 
                student receives personalized attention and guidance. We believe in 
                nurturing not just academic excellence, but also emotional intelligence, 
                social responsibility, and leadership qualities.
              </p>
              <p className="font-semibold text-navy">
                - Dr. Sarah Johnson, Principal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Campus Highlights
            </h2>
            <p className="text-lg text-gray-600">
              State-of-the-art facilities designed for optimal learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Modern Classrooms", icon: "🏫", description: "Smart classrooms with interactive technology" },
              { title: "Science Labs", icon: "🔬", description: "Well-equipped laboratories for hands-on learning" },
              { title: "Sports Complex", icon: "⚽", description: "Comprehensive sports facilities for all ages" },
              { title: "Library", icon: "📚", description: "Extensive collection of books and digital resources" },
              { title: "Art Studio", icon: "🎨", description: "Creative spaces for artistic expression" },
              { title: "Computer Lab", icon: "💻", description: "Modern technology for digital literacy" },
              { title: "Auditorium", icon: "🎭", description: "State-of-the-art venue for events and performances" },
              { title: "Cafeteria", icon: "🍽️", description: "Nutritious meals in a comfortable setting" }
            ].map((facility, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-3xl mb-3">{facility.icon}</div>
                  <h3 className="font-semibold text-navy mb-2">{facility.title}</h3>
                  <p className="text-sm text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Visit Our Campus</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of the educational district
            </p>
          </div>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Maps integration will be placed here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
