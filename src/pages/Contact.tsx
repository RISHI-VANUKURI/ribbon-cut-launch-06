
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const branches = [
    {
      name: "🏫 Ganesh Nagar Campus",
      address: "📍 # 3-101/1, Chengicherla Main Road, Chengicherla, Hyderabad, Telangana 500038",
      phone: "📞 9959733822",
      email: "bmrsghs2024@gmail.com"
    },
    {
      name: "🏫 Kranthi Colony Campus", 
      address: "📍 Kranthi Colony, Rd No. 2, Bolligudem, Telephone Colony, Chengicherla, Secunderabad, Telangana 500092",
      phone: "📞 9502022984",
      email: "bmrsghs2024@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us to learn more about BMRS or schedule a campus visit
          </p>
        </div>
      </section>

      {/* Branch Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Campus Locations</h2>
            <p className="text-lg text-gray-600">Visit either of our campuses for admissions and inquiries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <Card key={index} className="p-6 hover-lift animate-cardFloat" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="text-center">
                  <h3 className="text-xl font-bold text-navy mb-4 animate-fadeInUp">
                    {branch.name}
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-600 animate-slideInLeft text-sm">
                      {branch.address}
                    </p>
                    <p className="text-gray-600 animate-slideInLeft delay-100">
                      {branch.phone}
                    </p>
                    <p className="text-gray-600 animate-slideInLeft delay-200">
                      ✉️ {branch.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slideInLeft">
              <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card className="p-6 hover-lift animate-cardFloat">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 animate-bounceIn">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Main Campus Address</h3>
                      <p className="text-gray-600 text-sm">
                        # 3-101/1, Chengicherla Main Road<br />
                        Chengicherla, Hyderabad<br />
                        Telangana 500038, India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover-lift animate-cardFloat delay-200">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 animate-bounceIn delay-200">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Phone Numbers</h3>
                      <p className="text-gray-600">
                        Ganesh Nagar Campus: +91 9959733822<br />
                        Kranthi Colony Campus: +91 9502022984<br />
                        Timing: 9:30 a.m. – 4:00 p.m.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover-lift animate-cardFloat delay-400">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 animate-bounceIn delay-400">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Email</h3>
                      <p className="text-gray-600">
                        bmrsghs2024@gmail.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover-lift animate-cardFloat delay-600">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0 animate-bounceIn delay-600">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:30 a.m. – 4:00 p.m.<br />
                        Saturday: Contact for availability<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8 animate-fadeInUp delay-300">
                <h3 className="text-xl font-semibold text-navy mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors hover-scale">
                    <span>f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors hover-scale">
                    <span>📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors hover-scale">
                    <span>🐦</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slideInRight">
              <Card className="p-8 hover-lift">
                <CardContent>
                  <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-slideInUp">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>

                    <div className="animate-slideInUp delay-100">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full"
                      />
                    </div>

                    <div className="animate-slideInUp delay-200">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>

                    <div className="animate-slideInUp delay-300">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry or how we can help you"
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-white hover-lift animate-fadeInUp delay-400">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Visit CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Schedule a Campus Visit
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience BMRS firsthand! Schedule a guided tour of our campus and 
            see our facilities, meet our faculty, and discover what makes us special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8 hover-lift">
              Schedule Visit
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8 hover-lift">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-navy mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Conveniently located in Chengicherla area
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Ganesh Nagar Campus Map */}
            <div className="animate-slideInUp">
              <h3 className="text-xl font-bold text-navy mb-4 text-center">Ganesh Nagar Campus</h3>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8754847890543!2d78.56285437595158!3d17.469953500956753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2s3-101%2F1%2C%20Chengicherla%20Main%20Rd%2C%20Chengicherla%2C%20Hyderabad%2C%20Telangana%20500038!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BMRS Grammar High School - Ganesh Nagar Campus"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                # 3-101/1, Chengicherla Main Road, Hyderabad, Telangana 500038
              </p>
            </div>

            {/* Kranthi Colony Campus Map */}
            <div className="animate-slideInUp delay-200">
              <h3 className="text-xl font-bold text-navy mb-4 text-center">Kranthi Colony Campus</h3>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8754847890543!2d78.56285437595158!3d17.469953500956753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sKranthi%20Colony%2C%20Rd%20No.%202%2C%20Bolligudem%2C%20Telephone%20Colony%2C%20Chengicherla%2C%20Secunderabad%2C%20Telangana%20500092!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BMRS Grammar School - Kranthi Colony Campus"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Kranthi Colony, Rd No. 2, Bolligudem, Telephone Colony, Secunderabad, Telangana 500092
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
