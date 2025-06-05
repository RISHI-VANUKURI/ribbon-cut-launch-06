
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us to learn more about BMRS or schedule a campus visit
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Address</h3>
                      <p className="text-gray-600">
                        123 Education Street<br />
                        Learning City, LC 12345<br />
                        India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Phone</h3>
                      <p className="text-gray-600">
                        Main Office: +1 (555) 123-4567<br />
                        Admissions: +1 (555) 123-4568
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Email</h3>
                      <p className="text-gray-600">
                        General: info@bmrsschools.edu<br />
                        Admissions: admissions@bmrsschools.edu
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors">
                    <span>f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors">
                    <span>📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors">
                    <span>🐦</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardContent>
                  <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
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

                    <div>
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

                    <div>
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

                    <div>
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

                    <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-white">
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
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Schedule a Campus Visit
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience BMRS firsthand! Schedule a guided tour of our campus and 
            see our facilities, meet our faculty, and discover what makes us special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-navy hover:bg-navy/90 text-white px-8">
              Schedule Visit
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white px-8">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Conveniently located in the heart of the educational district
            </p>
          </div>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-500 text-lg">Interactive Google Maps will be embedded here</p>
              <p className="text-gray-400 text-sm">Showing exact location of BMRS Group of Schools</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
