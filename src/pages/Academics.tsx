'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Academics = () => {
  const [activeSubject, setActiveSubject] = useState<number | null>(null);
  const [subjectSlide, setSubjectSlide] = useState(0);

  const subjectData = [
    {
      title: 'Mathematics',
      icon: '🔢',
      description:
        'Sharpen logical reasoning, build problem-solving abilities, and explore numerical relationships with real-world applications.',
      images: ['/subjects/maths1.jpg', '/subjects/maths2.jpg', '/subjects/maths3.jpg'],
    },
    {
      title: 'Science',
      icon: '🔬',
      description:
        'Discover the mysteries of nature through interactive experiments and engaging scientific exploration across physics, chemistry, and biology.',
      images: ['/subjects/science1.jpg', '/subjects/science2.jpg', '/subjects/science3.jpg'],
    },
    {
      title: 'Humanities',
      icon: '🌍',
      description:
        'Explore cultures, histories, and societies to gain global perspectives and critical thinking rooted in empathy and ethics.',
      images: ['/subjects/humanities1.jpg', '/subjects/humanities2.jpg', '/subjects/humanities3.jpg'],
    },
    {
      title: 'Languages',
      icon: '🗣️',
      description:
        'Build fluency, communication skills, and literary appreciation across English, Hindi, and regional languages.',
      images: ['/subjects/languages1.jpg', '/subjects/languages2.jpg', '/subjects/languages3.jpg'],
    },
    {
      title: 'Computer Science',
      icon: '💻',
      description:
        'Empower students with 21st-century tech skills through coding, problem-solving, and digital literacy from an early age.',
      images: ['/subjects/cs1.jpg', '/subjects/cs2.jpg', '/subjects/cs3.jpg'],
    },
    {
      title: 'Fine Arts',
      icon: '🎨',
      description:
        'Encourage creative expression through visual arts, music, dance, and performance — nurturing imagination and emotion.',
      images: ['/subjects/arts1.jpg', '/subjects/arts2.jpg', '/subjects/arts3.jpg'],
    },
  ];

  useEffect(() => {
    if (activeSubject === null) return;
    const id = setInterval(() => {
      setSubjectSlide((s) => (s + 1) % subjectData[activeSubject].images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [activeSubject]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive curriculum designed to nurture academic excellence and critical thinking
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Curriculum Overview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our academic programs are designed to provide students with a strong foundation while encouraging
              exploration and creativity across all grade levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow animate-cardFloat hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 text-center">Kindergarten</h3>
                <p className="text-gray-600 mb-4">
                  Play-based learning approach that develops foundational skills through exploration, creativity, and
                  social interaction.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Language and literacy development</li>
                  <li>• Basic numeracy skills</li>
                  <li>• Creative arts and crafts</li>
                  <li>• Social and emotional learning</li>
                  <li>• Motor skills development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow animate-cardFloat delay-200 hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-200">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 text-center">Primary School</h3>
                <p className="text-gray-600 mb-4">
                  Building strong academic foundations with emphasis on critical thinking, problem-solving, and character
                  development.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Core subjects mastery</li>
                  <li>• Introduction to sciences</li>
                  <li>• Language arts and communication</li>
                  <li>• Mathematics fundamentals</li>
                  <li>• Cultural and social studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow animate-cardFloat delay-400 hover-lift">
              <CardContent>
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounceIn delay-400">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 text-center">High School</h3>
                <p className="text-gray-600 mb-4">
                  Academic preparation with specialized tracks to prepare students for higher education and
                  career success.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• placement courses</li>
                  <li>• College preparation programs</li>
                  <li>• Research and project-based learning</li>
                  <li>• Career guidance and counseling</li>
                  <li>• Leadership development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Subject Areas</h2>
            <p className="text-lg text-gray-600">Click any card to explore in depth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectData.map((subject, idx) => (
              <Card
                key={idx}
                className={`p-6 text-center hover:shadow-lg transition-shadow animate-cardFloat delay-${((idx % 3) + 1) * 100
                  } hover-lift cursor-pointer`}
                onClick={() => {
                  setActiveSubject(idx);
                  setSubjectSlide(0);
                }}
              >
                <CardContent>
                  <div className="text-4xl mb-3 animate-bounceIn">{subject.icon}</div>
                  <h3 className="text-xl font-bold text-navy">{subject.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {activeSubject !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
            <div className="bg-white w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 relative">
              <button
                className="absolute top-4 right-4 bg-white text-gray-800 text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 z-10"
                onClick={() => setActiveSubject(null)}
              >
                ×
              </button>
              <div className="p-8 overflow-y-auto">
                <h2 className="text-3xl font-bold mb-4">{subjectData[activeSubject].title}</h2>
                <p className="text-gray-700 text-lg">{subjectData[activeSubject].description}</p>
              </div>
              <div className="relative w-full h-full">
                {subjectData[activeSubject].images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === subjectSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>


{/* Teaching Methodology */}
<section className="py-20 bg-white relative overflow-hidden">
  <div className="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-br from-gold to-yellow-300 opacity-20 rounded-full animate-pulse-slow" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-blue-300 to-navy opacity-10 rounded-full animate-pulse-slow" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="animate-slideInLeft mb-12">
      <h2 className="text-4xl font-bold text-navy mb-6">Teaching Methodology</h2>
      <p className="text-lg text-gray-600 max-w-3xl">
        At BMRS, we believe teaching is both an art and a science. Our approach blends traditional wisdom 
        with modern strategies, ensuring students not only learn — but thrive. Each lesson is crafted to 
        ignite curiosity, spark innovation, and create lifelong learners.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
      {/* Interactive Learning */}
      <div className="flex items-start space-x-4 animate-fadeInUp delay-[100ms]">
        <div className="animate-bounce-slow w-12 h-12 flex items-center justify-center rounded-full bg-gold shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9.75 9.75h4.5v4.5h-4.5z" />
            <path d="M3 3h18v18H3z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-navy text-lg">Interactive Learning</h4>
          <p className="text-gray-600">
            Students engage through discussions, quizzes, games, and real-time feedback to deepen understanding.
          </p>
        </div>
      </div>

      {/* Personalized Attention */}
      <div className="flex items-start space-x-4 animate-fadeInUp delay-[200ms]">
        <div className="animate-spin-slow w-12 h-12 flex items-center justify-center rounded-full bg-gold shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-navy text-lg">Personalized Attention</h4>
          <p className="text-gray-600">
            Our small class sizes allow educators to tailor lessons to individual student needs, maximizing success.
          </p>
        </div>
      </div>

      {/* Technology Integration */}
      <div className="flex items-start space-x-4 animate-fadeInUp delay-[300ms]">
        <div className="animate-pulse-fast w-12 h-12 flex items-center justify-center rounded-full bg-gold shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9.75 9.75h4.5v4.5h-4.5z" />
            <path d="M2 7h20M2 17h20" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-navy text-lg">Technology Integration</h4>
          <p className="text-gray-600">
            Smart classrooms, tablets, and learning apps make knowledge more accessible and engaging.
          </p>
        </div>
      </div>

      {/* Project-Based Learning */}
      <div className="flex items-start space-x-4 animate-fadeInUp delay-[400ms]">
        <div className="animate-ping-slow w-12 h-12 flex items-center justify-center rounded-full bg-gold shadow-md">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 12l2 2 4-4M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-navy text-lg">Project-Based Learning</h4>
          <p className="text-gray-600">
            Students solve real-world problems through hands-on activities that promote critical thinking and teamwork.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Assessment System */}
<section className="py-20 bg-gray-50 relative overflow-hidden">
  <div className="absolute -top-16 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-navy opacity-10 rounded-full animate-pulse-slow" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-yellow-200 to-gold opacity-10 rounded-full animate-pulse-slow" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16 animate-fadeInUp">
      <h2 className="text-4xl font-bold text-navy mb-4">
        Student Assessment System
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Our evaluation system goes beyond report cards — it’s designed to nurture intellect, creativity, character, and collaboration.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Continuous Assessment Box */}
      <div className="bg-white shadow-xl rounded-lg p-8 animate-slideInLeft hover:shadow-2xl transition duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gold rounded-bl-full animate-ping-slow opacity-20" />
        <div className="flex items-center mb-6 space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold text-white animate-bounce-slow shadow-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 17v-6h13v6" />
              <path d="M6 4h16v4H6z" />
              <path d="M4 8h2v12H4z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-navy">Continuous Assessment</h3>
        </div>
        <ul className="space-y-3 text-gray-600">
          <li>• Weekly quizzes and interactive assignments</li>
          <li>• Collaborative project-based evaluation</li>
          <li>• Real-time classroom participation metrics</li>
          <li>• Peer-to-peer knowledge checks</li>
          <li>• Learning portfolios and reflection journals</li>
        </ul>
      </div>

      {/* Holistic Evaluation Box */}
      <div className="bg-white shadow-xl rounded-lg p-8 animate-slideInRight hover:shadow-2xl transition duration-300 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-navy rounded-tr-full animate-ping-slow opacity-20" />
        <div className="flex items-center mb-6 space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-navy text-white animate-spin-slow shadow-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16v4H4z" />
              <path d="M4 10h16v10H4z" />
              <path d="M10 10v10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-navy">Holistic Evaluation</h3>
        </div>
        <ul className="space-y-3 text-gray-600">
          <li>• Academic progress with growth mindset feedback</li>
          <li>• Socio-emotional and interpersonal skill tracking</li>
          <li>• Arts, sports, and creative talent assessments</li>
          <li>• Leadership and initiative-based observations</li>
          <li>• Value-based reflections and character journals</li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Academics;
