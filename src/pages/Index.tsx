
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Statistics from '@/components/Statistics';
import ImageCarousel from '@/components/ImageCarousel';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Image Carousel Section - Now at the top */}
      <div className="animate-fadeIn">
        <ImageCarousel />
      </div>

      {/* Hero Section - Now below carousel */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-navy/90 to-blue-800/90">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-navy/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp">
            Learning Begins With Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fadeInUp delay-200 opacity-90 leading-relaxed">
            Empowering Young Minds at BMRS Group of Schools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400">
            <Link to="/about">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto hover-lift">
                Know More
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-navy bg-navy text-white hover:bg-navy/90 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto hover-lift"
            >
              Book a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 sm:mb-6">
                Welcome to BMRS Group of Schools
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At BMRS, we believe that every child is unique and deserves an education 
                that nurtures their individual potential. Our comprehensive approach to 
                learning combines academic excellence with character development, 
                preparing students for success in an ever-changing world.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                With over two decades of educational excellence, we have established 
                ourselves as a trusted institution that values innovation, creativity, 
                and holistic development.
              </p>
              <Link to="/about">
                <Button className="bg-navy hover:bg-navy/90 text-white w-full sm:w-auto hover-lift">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="animate-slideInRight">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80"
                alt="Students in classroom"
                className="rounded-lg shadow-xl w-full h-auto hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="animate-fadeIn delay-200">
        <Statistics />
      </div>

      {/* Quote Section */}
      <section className="py-12 sm:py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fadeInUp">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light italic mb-4 sm:mb-6 leading-relaxed">
            "We inspire our students to dream more, learn more, and become more."
          </blockquote>
          <p className="text-lg sm:text-xl opacity-80">- BMRS Group of Schools Philosophy</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose BMRS?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover what makes us the preferred choice for quality education
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow animate-cardFloat hover-lift">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounceIn">
                  <span className="text-xl sm:text-2xl">🎓</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2 sm:mb-3">Academic Excellence</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Comprehensive curriculum designed to challenge and inspire students 
                  to achieve their academic potential.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow animate-cardFloat delay-200 hover-lift">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounceIn delay-200">
                  <span className="text-xl sm:text-2xl">🌟</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2 sm:mb-3">Holistic Development</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Focus on overall personality development including sports, arts, 
                  and extracurricular activities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1 animate-cardFloat delay-400 hover-lift">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounceIn delay-400">
                  <span className="text-xl sm:text-2xl">👥</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2 sm:mb-3">Expert Faculty</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Highly qualified and experienced teachers committed to 
                  student success and growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 sm:mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Join our community of learners and discover the BMRS difference. 
            Schedule a campus visit today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-6 sm:px-8 w-full sm:w-auto hover-lift">
                Schedule Campus Visit
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-6 sm:px-8 w-full sm:w-auto hover-lift">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
