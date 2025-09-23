import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';


const About = () => {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

const branchImages = [
  "/lovable-uploads/1bd97367-f28f-41ab-aca0-b515339a825b.webp",
  "/lovable-uploads/f9669ace-38f6-4b23-82f3-5da9319355fc.webp",
];
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % branchImages.length);
  }, 4000); // Change every 4 seconds
  return () => clearInterval(interval);
}, []);


  useEffect(() => {
    if (active === null) return;
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % 2); // Since we use 2 images per facility
    }, 4000);
    return () => clearInterval(interval);
  }, [active]);

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

<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Text Content */}
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

      {/* Slideshow Image with smooth fade */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl animate-slideInRight">
        {branchImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`BMRS Branch ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
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

     {/* Messages from Leadership */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
    
    {/* Principal's Message */}
    <div className="grid lg:grid-cols-3 gap-12 items-center">
      <div className="lg:col-span-1 animate-slideInLeft">
       <img
  src="/cor.webp"
  alt="Correspondent"
  className="rounded-lg shadow-lg w-full hover-scale"
/>

      </div>
      <div className="lg:col-span-2 animate-slideInRight">
        <h2 className="text-3xl font-bold text-navy mb-6">A Word from the Correspondent’s Desk</h2>
        <blockquote className="text-lg text-gray-600 italic mb-6">
          "

At our institution, we believe education is not limited to textbooks — it is a journey that nurtures young minds with knowledge, values, and skills for life. Our vision is to create an environment where every student is empowered to discover their potential, express their creativity, and grow into a responsible global citizen.

In today’s world, technology and communication are powerful tools in education. By introducing digital tablets, advanced computer labs, and audio-visual conference halls, we enable personalized learning and innovative teaching. These resources strengthen the bond between teachers, students, parents, and management, while also encouraging creativity, teamwork, and project-based learning.

Our state-of-the-art computer laboratories enhance digital literacy and provide students with access to the skills required in a rapidly evolving world. Alongside academics, we emphasize the importance of sports and fitness, fostering discipline, confidence, leadership, and healthy lifestyle habits that positively influence academic performance and problem-solving abilities.

        </blockquote>
        <p className="text-lg text-gray-600 mb-4">
         
Equally important are the values that shape character. Through moral and ethical education, we encourage our students to embrace gratitude, kindness, and responsibility. These principles guide them to make wise decisions and to become compassionate individuals.

Together, with the support of our dedicated teachers and the trust of our parents, we strive to provide a holistic education — one that balances knowledge, skills, and values — preparing our students not just for exams, but for life itself."
        </p>
        <p className="font-semibold text-navy">- Mr.Jaipal Reddy , Correspondent</p>
      </div>
    </div>

    {/* Founder's Message */}
    <div className="grid lg:grid-cols-3 gap-12 items-center">
      <div className="lg:col-span-1 order-2 lg:order-1 animate-slideInLeft">
       <img
  src="/founder.webp"
  alt="Founder"
  className="rounded-lg shadow-lg w-full hover-scale"
/>

      </div>
      <div className="lg:col-span-2 order-1 lg:order-2 animate-slideInRight">
        <h2 className="text-3xl font-bold text-navy mb-6">Founder's Message</h2>
        <blockquote className="text-lg text-gray-600 italic mb-6">
          Growing up in my village, I witnessed firsthand the struggles of our education system. Schools often lacked proper facilities and resources, making it difficult for both students and teachers to thrive. Inadequate infrastructure, shortage of learning materials, lack of transportation, and scarcity of qualified teachers were daily challenges. Many families, bound by poverty, relied on farming or labor work, and education was often considered secondary.

Yet, as a child, I was deeply fond of going to school. I carried a dream in my heart — to one day build a school with proper facilities, where children could learn without limitations and where education could open doors to brighter futures.



        </blockquote>
        <p className="text-lg text-gray-600 mb-4">
          
In 2008, I took the first step toward making this dream a reality. With the support of my family, friends, and well-wishers, I established this school, determined to provide quality education not only for children in my own village but also for those in neighboring communities.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          
Today, I am proud to see that vision come to life. Our students are pursuing higher education, with many even studying abroad and securing respected careers. Their success stands as proof that when given the right opportunities, children can achieve beyond boundaries.

Education is the strongest foundation for progress. It is my hope that this institution continues to inspire, nurture, and empower generations to come.
        </p>
        <p className="font-semibold text-navy">- Mr. Boppidi Malla Reddy , Founder</p>
      </div>
    </div>

    {/* Director's Message 
    <div className="grid lg:grid-cols-3 gap-12 items-center">
      <div className="lg:col-span-1 animate-slideInLeft">
        <img
         src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
          alt="Director"
          className="rounded-lg shadow-lg w-full hover-scale"
        />
      </div>
      <div className="lg:col-span-2 animate-slideInRight">
        <h2 className="text-3xl font-bold text-navy mb-6">Director's Message</h2>
        <blockquote className="text-lg text-gray-600 italic mb-6">
          "Our students are our priority—and their growth is our responsibility. 
          As Director, I believe in the power of innovation, discipline, and 
          collaboration to drive success across all walks of life."
        </blockquote>
        <p className="text-lg text-gray-600 mb-4">
          We strive to offer an education ecosystem that fosters both 
          academic achievement and personal growth. By bridging modern 
          learning methods with timeless values, we ensure our students 
          are well-rounded and ready for the future.
        </p>
        <p className="font-semibold text-navy">- Mrs. Priya Desai, Director</p>
      </div>
    </div>
    */}

  </div>
</section>


{/* Campus Highlights */}<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Campus Highlights</h2>
      <p className="text-lg text-gray-600">Click any box to explore more about each facility.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Modern Classrooms", icon: "🏫" },
        { title: "Science Labs", icon: "🔬" },
        { title: "Sports Complex", icon: "⚽" },
        { title: "Library", icon: "📚" },
        { title: "Art Studio", icon: "🎨" },
        { title: "Computer Lab", icon: "💻" }
      ].map((facility, idx) => (
        <div
          key={idx}
          className={`relative group text-center p-6 rounded-lg bg-white shadow-md border border-gray-200 transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-navy/40 hover:bg-navy/5 animate-cardFloat delay-${((idx % 4) + 1) * 100}`}
          onClick={() => {
            setActive(idx);
            setSlide(0);
          }}
        >
          <div className="text-3xl mb-3 animate-bounceIn">{facility.icon}</div>
          <h3 className="font-semibold text-navy text-lg">{facility.title}</h3>

      

          {/* Click hint at bottom */}
          <div className="mt-4 text-sm text-gray-400 group-hover:text-navy transition-all">
            Click to explore
          </div>
        </div>
      ))}
    </div>
  </div>

  {active !== null && (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 relative">

        {/* Updated Close Button */}
        <button
          className="absolute top-4 right-4 bg-white text-gray-800 text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 z-10"
          onClick={() => setActive(null)}
        >
          ×
        </button>

        {/* Left: Title + paragraph */}
        <div className="p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">
            {[
              "Modern Classrooms",
              "Science Labs",
              "Sports Complex",
              "Library",
              "Art Studio",
              "Computer Lab",
              "Auditorium",
              "Cafeteria",
            ][active]}
          </h2>
          <p className="text-gray-700 text-lg max-w-full">
            {[
              "Our modern classrooms are equipped with state-of-the-art smart boards, ergonomic seating, advanced air circulation, and real-time digital content sharing. The space is designed to encourage interactive learning, group discussions, and multimedia presentations. Natural light floods each room, creating a bright and energizing learning atmosphere. Our layout promotes student engagement by allowing educators to seamlessly integrate technology with traditional teaching. With ample whiteboards, digital projectors, and acoustic enhancements, these classrooms foster innovation and productivity. Wi-Fi connectivity, mobile charging stations, and flexible furniture ensure adaptability to any teaching method. The environment inspires curiosity and collaboration while supporting mental and physical comfort. Overall, the classroom design embodies our commitment to preparing students for success in a tech-driven world where comfort meets innovation in every corner.",
              "Our science labs empower students to explore biology, chemistry, and physics through hands-on learning in a real-world context. With professional-grade lab stations, precise measuring instruments, and the latest safety equipment, students engage in projects that ignite critical thinking and curiosity. From chemical reactions to DNA experiments, the labs foster inquiry and experimentation. Fume hoods, chemical storage, and ventilation systems ensure safety during complex procedures. Our labs support curriculum-aligned activities as well as research-level projects under expert supervision. The collaborative workspaces encourage teamwork, and digital interfaces allow students to record and analyze data with accuracy. Learning through experimentation builds confidence and bridges the gap between theory and application. Students leave with skills essential for higher education and scientific careers.",
              "The sports complex offers a dynamic environment for students to nurture athletic talent and overall fitness. Facilities include indoor badminton courts, a full-size basketball court, a soccer field, and a fully equipped gymnasium. We also offer a running track, yoga space, and outdoor workout zones. Each area is designed to encourage holistic well-being through structured games and physical training. Professional coaches provide guidance, and inter-school tournaments give students competitive exposure. The sports infrastructure emphasizes inclusivity—catering to both beginners and elite athletes. It’s a place for building discipline, resilience, and team spirit. Whether students aim for professional sports or personal fitness, our complex provides them with everything they need to grow in a healthy, energized, and focused manner.",
              "The campus library stands as a quiet sanctuary for learning and exploration. With thousands of physical and digital titles, it caters to readers of every discipline. Students can find textbooks, journals, novels, magazines, and research archives under one roof. Cozy reading zones, private cubicles, and group discussion tables offer options for every reading mood. High-speed internet, e-book access, and research tools enhance academic performance. The library fosters a culture of deep focus, reflection, and knowledge acquisition. Friendly staff are always ready to assist in book recommendations and research navigation. It’s more than a place for books—it’s a hub for idea generation and academic dialogue. Whether for study, leisure reading, or research, our library offers an ideal learning environment.",
              "The art studio is a haven for creativity where students can express themselves across a variety of media. With dedicated zones for painting, sculpting, digital design, and mixed media, the studio supports all levels of artistic development. Natural light and open space enhance focus and imagination. Supplies such as acrylics, charcoal, watercolors, clay, and digital tablets are available. Students participate in exhibitions, art competitions, and collaborative murals. Creative thinking is encouraged, and guidance from faculty artists ensures each student refines their personal style. The studio isn't just for talent—it's a space to discover it. Artistic expression improves emotional well-being and opens new career pathways. Here, students learn that every brushstroke and idea has value in the creative journey.",
              "Our computer lab is a gateway to the digital world, equipped with high-speed systems, dual monitors, and modern software for programming, design, and innovation. Students can code, build apps, edit videos, and simulate digital environments. Industry-grade tools like IDEs, design suites, and network testing software are available. The space supports both guided instruction and independent exploration. From HTML basics to machine learning models, students grow in both skill and confidence. VR and AI tools further expand the lab's possibilities. With daily access and scheduled workshops, learners stay updated on the latest in tech. This is where future developers, designers, and analysts are shaped. The lab fosters critical thinking, problem-solving, and tech fluency needed in tomorrow’s workforce.",
               ][active]}
          </p>
        </div>

        {/* Right: 3‑image carousel */}
        <div className="relative w-full h-full">
          {[
            ["/class1.webp","/class2.webp"],
            [
  "https://indianschool.bh/images/facilities/science-lab/9.jpg"
            ],
            ["/lovable-uploads/3d2c8101-41e7-4789-a7cd-9dfb63d82806"],
            [],
            [],
            [],
          ][active].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )}
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
