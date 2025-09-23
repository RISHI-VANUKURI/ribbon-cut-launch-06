import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Statistics from '@/components/Statistics';
import ImageCarousel from '@/components/ImageCarousel';
import BranchDetails from '@/components/BranchDetails';
import Testimonials from '@/components/Testimonials';
import MissionVision from '@/components/MissionVision';
import AdmissionPopup from '@/components/AdmissionPopup';

const branchContacts: Record<string, string> = {
  'Ganesh Nagar': '9959733822',
  'Kranthi Colony': '9502022984',
};

const Index = () => {
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false);
  const [showVisitForm, setShowVisitForm] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeSection, setActiveSection] = useState('');

 useEffect(() => {
  const popupShown = sessionStorage.getItem("admissionPopupShown");

  if (!popupShown) {
    const timer = setTimeout(() => {
      setShowAdmissionPopup(true);
      sessionStorage.setItem("admissionPopupShown", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }
}, []);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Slides', 'welcome', 'mission', 'stats', 'testimonials', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendWhatsApp = () => {
    const phone = branchContacts[selectedBranch] || '919000000000';
    const msg = `Hello BMRS Schools,%0aWe would like to schedule a visit at your ${selectedBranch} branch.%0aHere are the details:%0a👨‍👩‍👧 Parent Name: ${parentName}%0a👧 Child Name: ${childName}%0a📞 Contact Number: ${phoneNumber}%0a📅 Date: ${selectedDate}%0a⏰ Time: ${selectedTime}%0aPlease confirm our appointment. Thank you!`;
    window.location.href = `https://wa.me/${phone}?text=${msg}`;
    setShowVisitForm(false);
  };

  return (
    <div className="relative flex">
      {/* Floating Left Sidebar Nav */}
      <nav className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-4 z-[9999] flex-col space-y-3 bg-white/80 backdrop-blur-md rounded-xl px-2 py-3 shadow-xl  hover:w-40 transition-all duration-300 overflow-hidden">
        {['Slides', 'welcome', 'mission', 'stats', 'testimonials', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition text-center whitespace-nowrap ${
              activeSection === id ? 'bg-gold text-white' : 'text-navy hover:bg-gold/20'
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <div className="w-full pt-10">
        <AdmissionPopup isOpen={showAdmissionPopup} onClose={() => setShowAdmissionPopup(false)} />

        <div id="Slides">
          <ImageCarousel />
        </div>

        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-navy/90 to-blue-800/90">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9d1.webp')] bg-cover bg-center opacity-30" />
          <div className="relative z-10 text-center text-white max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Learning Begins With Us</h1>
            <p className="text-xl mb-6">Empowering Young Minds at BMRS Group of Schools</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button className="bg-gold hover:bg-gold/90 text-white px-6 py-3">Know More</Button>
              </Link>
              <Button
                className="bg-white text-blue-700 border border-white hover:bg-blue-100 hover:text-blue-800 px-6 py-3"
                onClick={() => setShowVisitForm(true)}
              >
                Book a Visit
              </Button>
            </div>
          </div>
        </section>

        <section id="welcome" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 px-6">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-4">Welcome to BMRS Group of Schools</h2>
              <p className="text-gray-700 mb-4">
                At BMRS, we believe every child deserves an education that nurtures their individual potential...
              </p>
              <Link to="/about">
                <Button className="bg-navy text-white">Learn More About Us</Button>
              </Link>
            </div>
            <img
              src="/class2.webp"
              alt="Students"
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        <div id="mission">
          <MissionVision />
        </div>

        <div id="stats">
          <Statistics />
        </div>

       
        <div id="testimonials">
          <Testimonials />
        </div>

        <section id="contact" className="py-12 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Visit Us?</h2>
          <p className="text-gray-600 mb-6">Click below to schedule a visit and connect with us on WhatsApp.</p>
          <Button onClick={() => setShowVisitForm(true)} className="bg-gold text-white px-8 py-3">
            Book a Visit
          </Button>
        </section>

        {showVisitForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">Schedule a Visit</h3>
              <label className="block mb-2">
                Parent Name
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
              <label className="block mb-2">
                Child Name
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
              <label className="block mb-2">
                Phone Number
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
              <label className="block mb-2">
                Select Branch
                <div className="mt-2 space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="branch"
                      value="Ganesh Nagar"
                      checked={selectedBranch === 'Ganesh Nagar'}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="accent-blue-600"
                    />
                    <span>Ganesh Nagar</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="branch"
                      value="Kranthi Colony"
                      checked={selectedBranch === 'Kranthi Colony'}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="accent-blue-600"
                    />
                    <span>Kranthi Colony</span>
                  </label>
                </div>
              </label>

              <label className="block mb-2">
                Select Date
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
              <label className="block mb-4">
                Select Time
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </label>
              <div className="flex justify-between gap-4">
                <Button className="bg-green-600 text-white hover:bg-green-700 flex-1" onClick={handleSendWhatsApp}>
                  Send WhatsApp
                </Button>

                <Button variant="outline" className="flex-1" onClick={() => setShowVisitForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
