
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';

const About = () => {
  const openDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
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
            <div className="animate-slideInLeft">
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
            <div className="animate-slideInRight">
              <img
                src="/lovable-uploads/1bd97367-f28f-41ab-aca0-b515339a825b.png"
                alt="BMRS School Building"
                className="rounded-lg shadow-xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow animate-cardFloat hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Vision</h3>
                <p className="text-gray-600">
                  To be a leading educational institution that empowers students to 
                  become confident, creative, and compassionate global citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow animate-cardFloat delay-200 hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-200">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Mission</h3>
                <p className="text-gray-600">
                  To provide quality education through innovative teaching methods, 
                  fostering critical thinking, and developing well-rounded individuals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow animate-cardFloat delay-400 hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-400">
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
            <div className="lg:col-span-1 animate-slideInLeft">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                alt="Principal"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
            </div>
            <div className="lg:col-span-2 animate-slideInRight">
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
          <div className="text-center mb-12 animate-fadeInUp">
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
              <Card key={index} className={`text-center p-6 hover:shadow-lg transition-shadow animate-cardFloat delay-${(index % 4 + 1) * 100} hover-lift`}>
                <CardContent>
                  <div className="text-3xl mb-3 animate-bounceIn delay-300">{facility.icon}</div>
                  <h3 className="font-semibold text-navy mb-2">{facility.title}</h3>
                  <p className="text-sm text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Campus Locations</h2>
            <p className="text-lg text-gray-600">
              Visit either of our campuses for admissions and inquiries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Ganesh Nagar Campus */}
            <div className="animate-slideInUp">
              <Card className="overflow-hidden shadow-lg hover-lift">
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-64 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8754847890543!2d78.56285437595158!3d17.469953500956753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaea09c7%3A0x9c6e5c7b9c6e5c7b!2s3-101%2F1%2C%20Chengicherla%20Main%20Rd%2C%20Chengicherla%2C%20Hyderabad%2C%20Telangana%20500038!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="BMRS Grammar High School - Ganesh Nagar Campus"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-4">BMRS GRAMMAR HIGH SCHOOL</h3>
                    <div className="space-y-3 mb-4">
                      <p className="text-gray-600 text-sm">
                        📍 # 3-101/1, Chengicherla Main Road, Chengicherla, Hyderabad, Telangana 500038
                      </p>
                      <p className="text-gray-600">📞 +91 9959733822</p>
                      <p className="text-gray-600">✉️ bmrsghs2024@gmail.com</p>
                    </div>
                    <Button 
                      onClick={() => openDirections("# 3-101/1, Chengicherla Main Road, Chengicherla, Hyderabad, Telangana 500038")}
                      className="w-full bg-gold hover:bg-gold/90 text-white"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Kranthi Colony Campus */}
            <div className="animate-slideInUp delay-200">
              <Card className="overflow-hidden shadow-lg hover-lift">
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-64 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8754847890543!2d78.56285437595158!3d17.469953500956753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaea09c7%3A0x9c6e5c7b9c6e5c7b!2sKranthi%20Colony%2C%20Rd%20No.%202%2C%20Bolligudem%2C%20Telephone%20Colony%2C%20Chengicherla%2C%20Secunderabad%2C%20Telangana%20500092!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="BMRS Grammar School - Kranthi Colony Campus"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-4">BMRS GRAMMAR SCHOOL</h3>
                    <div className="space-y-3 mb-4">
                      <p className="text-gray-600 text-sm">
                        📍 Kranthi Colony, Rd No. 2, Bolligudem, Telephone Colony, Chengicherla, Secunderabad, Telangana 500092
                      </p>
                      <p className="text-gray-600">📞 +91 9502022984</p>
                      <p className="text-gray-600">✉️ bmrsghs2024@gmail.com</p>
                    </div>
                    <Button 
                      onClick={() => openDirections("Kranthi Colony, Rd No. 2, Bolligudem, Telephone Colony, Chengicherla, Secunderabad, Telangana 500092")}
                      className="w-full bg-gold hover:bg-gold/90 text-white"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
