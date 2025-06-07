
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Statistics from '@/components/Statistics';
import ImageCarousel from '@/components/ImageCarousel';
import BranchDetails from '@/components/BranchDetails';
import Testimonials from '@/components/Testimonials';
import MissionVision from '@/components/MissionVision';
import Highlights from '@/components/Highlights';
import SportsSection from '@/components/SportsSection';
import AdmissionPopup from '@/components/AdmissionPopup';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Index = () => {
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false);

  useEffect(() => {
    // Show admission popup after 3 seconds
    const timer = setTimeout(() => {
      setShowAdmissionPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Admission Popup */}
      <AdmissionPopup 
        isOpen={showAdmissionPopup} 
        onClose={() => setShowAdmissionPopup(false)} 
      />

      {/* Image Carousel Section */}
      <div className="animate-fadeIn">
        <ImageCarousel />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-navy/90 to-blue-800/90 animate-slideInUp">
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
          <p className="text-base sm:text-lg mb-6 sm:mb-8 animate-fadeInUp delay-300 opacity-80">
            Visit us at: <span className="text-gold font-semibold">bmrsgroupofschools.com</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400">
            <Link to="/about">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto hover-lift animate-scaleIn delay-500">
                Know More
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-navy px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto hover-lift animate-scaleIn delay-600 transition-all duration-300"
              >
                Book a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 sm:mb-6 animate-fadeInUp">
                Welcome to BMRS Group of Schools
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed animate-fadeInUp delay-200">
                At BMRS, we believe that every child is unique and deserves an education 
                that nurtures their individual potential. Our comprehensive approach to 
                learning combines academic excellence with character development, 
                preparing students for success in an ever-changing world.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fadeInUp delay-300">
                With over two decades of educational excellence, we have established 
                ourselves as a trusted institution that values innovation, creativity, 
                and holistic development.
              </p>
              <Link to="/about">
                <Button className="bg-navy hover:bg-navy/90 text-white w-full sm:w-auto hover-lift animate-bounceIn delay-400">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="animate-slideInRight">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80"
                alt="Students in classroom"
                className="rounded-lg shadow-xl w-full h-auto hover-scale animate-scaleIn delay-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <div className="animate-fadeIn delay-100">
        <MissionVision />
      </div>

      {/* Statistics Section */}
      <div className="animate-fadeIn delay-200">
        <Statistics />
      </div>

      {/* Branch Details Section */}
      <div className="animate-fadeIn delay-300">
        <BranchDetails />
      </div>

      {/* Highlights & Achievements Section */}
      <div className="animate-fadeIn delay-400">
        <Highlights />
      </div>

      {/* Sports Section */}
      <div className="animate-fadeIn delay-500">
        <SportsSection />
      </div>

      {/* Testimonials Section */}
      <div className="animate-fadeIn delay-600">
        <Testimonials />
      </div>

      {/* Quote Section */}
      <section className="py-12 sm:py-16 bg-navy text-white animate-slideInUp delay-300">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fadeInUp delay-400">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light italic mb-4 sm:mb-6 leading-relaxed animate-scaleIn delay-500">
            "We inspire our students to dream more, learn more, and become more."
          </blockquote>
          <p className="text-lg sm:text-xl opacity-80 animate-fadeIn delay-600">- BMRS Group of Schools Philosophy</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50 animate-fadeIn delay-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fadeInUp delay-500">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 animate-bounceIn delay-600">
              Why Choose BMRS?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-700">
              Discover what makes us the preferred choice for quality education
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow animate-cardFloat delay-100 hover-lift">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounceIn delay-200">
                  <span className="text-xl sm:text-2xl">🎓</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2 sm:mb-3 animate-fadeInUp delay-300">Academic Excellence</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed animate-fadeIn delay-400">
                  Comprehensive curriculum designed to challenge and inspire students 
                  to achieve their academic potential.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow animate-cardFloat delay-200 hover-lift">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounceIn delay-300">
                  <span className="text-xl sm:text-2xl">🌟</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2 sm:mb-3 animate-fadeInUp delay-400">Holistic Development</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed animate-fadeIn delay-500">
                  Focus on overall personality development including sports, arts, 
                  and extracurricular activities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1 animate-cardFloat delay-300 hover-lift">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounceIn delay-400">
                  <span className="text-xl sm:text-2xl">👥</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2 sm:mb-3 animate-fadeInUp delay-500">Expert Faculty</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed animate-fadeIn delay-600">
                  Highly qualified and experienced teachers committed to 
                  student success and growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white animate-fadeIn delay-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fadeInUp delay-600">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 sm:mb-6 animate-scaleIn delay-700">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fadeIn delay-800">
            Join our community of learners and discover the BMRS difference. 
            Schedule a campus visit today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-6 sm:px-8 w-full sm:w-auto hover-lift animate-bounceIn delay-900">
                Schedule Campus Visit
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-6 sm:px-8 w-full sm:w-auto hover-lift animate-scaleIn delay-1000">
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
