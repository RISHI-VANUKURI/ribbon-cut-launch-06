import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white animate-slideUpIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">BMRS Group of Schools</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering young minds with quality education, fostering creativity, 
              and building character for a brighter tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="YouTube">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-gold transition-colors">Academics</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-gold transition-colors">Activities</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Admissions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 H NO 3-101/1, GANESH NAGAR COLONY, MAIN ROAD, CHENGICHERLA, India</p>
              <p>📞 +91 9959733822</p>
              <p>✉️ bmrsghs2024@gmail.com</p>
              <p>🕒 Mon - Fri: 9:30 a.m. – 4:00 p.m.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 BMRS Group of Schools. All rights reserved.</p>
          <p className="mt-2">
            Built by{' '}
            <span className="text-gold font-semibold">ReView AI Tech and Solutions</span>
            {' '}- {' '}
            <a 
              href="https://reviewrv25.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors underline"
            >
              Get a website for yourself
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
