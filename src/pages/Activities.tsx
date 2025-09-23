import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Club Data
const clubData = [
  {
    name: "Science Club",
    icon: "🔬",
    summary: "Explore, experiment, discover!",
    details:
      "Students dive into hands-on experiments, science fairs, and projects that ignite scientific curiosity beyond textbooks.",
  },
  {
    name: "Debate Society",
    icon: "🗣️",
    summary: "Speak. Think. Win.",
    details:
      "Sharpen public speaking, critical reasoning, and argumentation through structured debates and mock parliaments.",
  },
  {
    name: "Environmental Club",
    icon: "🌱",
    summary: "Go green, live clean.",
    details:
      "Students lead sustainability projects and green drives, instilling environmental responsibility and awareness.",
  },
  {
    name: "Mathematics Club",
    icon: "📊",
    summary: "Crack logic, bend numbers.",
    details:
      "Engage in Olympiads, brain teasers, and math hunts that nurture logic and creative problem-solving.",
  },
  {
    name: "Literature Society",
    icon: "📖",
    summary: "Words that inspire.",
    details:
      "From poetry slams to book reviews, this society brings the magic of words alive through creativity and discussion.",
  },
  {
    name: "Technology Club",
    icon: "💻",
    summary: "Code. Build. Innovate.",
    details:
      "Hands-on with coding, robotics, and design challenges — building real-world tech skills through innovation.",
  },
];

// Sports Carousel
const sports = [
  { name: "Football", icon: "⚽", description: "Team strategy and physical fitness. Promotes coordination, endurance, and tactical thinking." },
  { name: "Basketball", icon: "🏀", description: "Enhances agility and quick decision-making. Encourages communication and teamwork." },
  { name: "Cricket", icon: "🏏", description: "Precision and mental focus. Teaches patience and fosters team collaboration." },
  { name: "Athletics", icon: "🏃", description: "Track and field events. Develops stamina and focus. Celebrates individual achievement." },
  { name: "Swimming", icon: "🏊", description: "Boosts full-body strength and lung capacity. Ensures survival skills and fun." },
  { name: "Badminton", icon: "🏸", description: "Agility and quick reflexes. Builds reaction time. Great indoor sport for all." },
  { name: "Table Tennis", icon: "🏓", description: "Requires sharp reflexes. Ideal for indoor fun. Nurtures focus and rhythm." },
  { name: "Volleyball", icon: "🏐", description: "Team strategy and timing. Fun beach and court sport. Promotes team spirit." },
  { name: "Kabaddi", icon: "🤼", description: "Agility, strength, and strategy. Great for reflex training. Encourages quick thinking." },
  { name: "Kho-Kho", icon: "🏃‍♂️", description: "Speed and teamwork. Builds stamina and teaches evasion and planning." },
  { name: "Chess", icon: "♟️", description: "Strategy, patience, and foresight. Teaches planning and critical thinking." },
];

// Achievement Data (with real images from Unsplash CDN)
const achievementsData = [
  {
    title: "Regional Science Fair",
    award: "1st Place",
    year: "2024",
    img: "https://source.unsplash.com/800x400/?science,fair",
    description: "Our students showcased an innovative renewable energy project that won first place.",
  },
  {
    title: "State Debate Championship",
    award: "Winners",
    year: "2023",
    img: "https://source.unsplash.com/800x400/?debate,public-speaking",
    description: "Students argued compellingly and won the state title in an intense final round.",
  },
  {
    title: "Inter-School Sports Meet",
    award: "Overall Champions",
    year: "2024",
    img: "https://source.unsplash.com/800x400/?school,sports",
    description: "With dedication and teamwork, we outperformed 20+ schools to claim the trophy.",
  },
  {
    title: "National Art Competition",
    award: "Gold Medal",
    year: "2023",
    img: "https://source.unsplash.com/800x400/?art,painting",
    description: "Creativity met excellence as our student's artwork stood out nationally.",
  },
];

const SportsCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % sports.length);
    }, 4000); // slower cycle
    return () => clearInterval(interval);
  }, [paused]);

  const getDisplayIndexes = (index: number) => {
    const left = (index - 1 + sports.length) % sports.length;
    const right = (index + 1) % sports.length;
    return { left, center: index, right };
  };

  const { left, center, right } = getDisplayIndexes(centerIndex);
  const visible = [left, center, right];

  return (
    <div
      className="relative flex justify-center items-center h-[30rem] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex w-full justify-center items-center">
        {visible.map((index, position) => {
          const sport = sports[index];
          const isCenter = position === 1;
          const isLeft = position === 0;
          const isRight = position === 2;

          return (
            <div
              key={index}
              className="absolute transition-all duration-[2500ms] ease-in-out"
              style={{
                transform: isCenter
                  ? "translateX(0) scale(1)"
                  : isLeft
                  ? "translateX(-320px) scale(0.85)"
                  : "translateX(320px) scale(0.85)",
                opacity: isCenter ? 1 : 0.5,
                zIndex: isCenter ? 10 : 5,
              }}
            >
              <Card className="text-center w-80 p-8 shadow-xl hover:scale-105 transition-transform duration-500">
                <CardContent>
                  <div className="text-5xl mb-4">{sport.icon}</div>
                  <h3 className="font-bold text-navy text-lg mb-3">{sport.name}</h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                    {sport.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const AchievementList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {achievementsData.map((item, index) => (
        <div key={index} className="border rounded-lg shadow-sm bg-white">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-6 py-4 hover:bg-gray-50 transition flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
              <p className="text-gold font-medium">{item.award} • {item.year}</p>
            </div>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-6 animate-fadeIn">
              <img src={item.img} alt={item.title} className="w-full rounded-md mb-4" />
              <p className="text-gray-700">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Activities = () => {
  return (
    <div className="min-h-screen">
      <section id="hero" className="relative py-20 bg-gradient-to-r from-navy to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Activities & Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Beyond books – nurturing creativity, confidence, and character through diverse activities
          </p>
        </div>
      </section>

      <section id="excellence" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Co-Curricular Excellence</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            At BMRS, we believe that true education extends far beyond the classroom. Our co-curricular
            program helps students discover their passions and build lasting friendships.
          </p>
        </div>
      </section>

      <section id="sports" className="py-20 bg-gray-50">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Sports & Games</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Promoting physical fitness, team spirit, and mental agility through diverse sports activities.
          </p>
        </div>
        <SportsCarousel />
      </section>

      <section id="clubs" className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Academic Clubs & Societies
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Hover to learn more about our clubs — where intellect finds its tribe.
          </p>

          <div className="relative overflow-hidden marquee-wrapper">
            <div className="flex marquee-track">
              {[...clubData, ...clubData].map((club, index) => (
                <span
                  key={index}
                  className="inline-block mx-6 relative group cursor-pointer"
                >
                  <span className="text-xl">{club.icon}</span>{" "}
                  <span className="font-medium text-gray-700">{club.name}</span>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white border border-gray-300 shadow-xl p-4 rounded-xl w-72 text-left text-sm text-gray-800 pointer-events-auto">
                    <h4 className="font-bold text-navy mb-1">
                      {club.icon} {club.name}
                    </h4>
                    <p className="text-gray-600">{club.details}</p>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Student Achievements</h2>
            <p className="text-lg text-gray-600">Celebrating excellence and success across all activities</p>
          </div>
          <AchievementList />
        </div>
      </section>
      <section id="testimonials" className="py-16 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl opacity-90">Hear from students about their experiences in our activity programs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white text-navy">
              <CardContent>
                <blockquote className="text-lg italic mb-4">
                  "The debate society helped me build confidence and improved my public speaking skills tremendously.
                  I feel more confident expressing my ideas now."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Arjun Sharma</p>
                    <p className="text-sm text-gray-600">Grade 10, Debate Society</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 bg-white text-navy">
              <CardContent>
                <blockquote className="text-lg italic mb-4">
                  "Being part of the football team taught me about teamwork and perseverance. The coaching staff is
                  amazing and always encourages us to do our best."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">PR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Priya Reddy</p>
                    <p className="text-sm text-gray-600">Grade 9, Football Team</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gold text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-6">
            "Beyond books – nurturing creativity and confidence."
          </blockquote>
          <p className="text-xl opacity-90">- BMRS Activities Philosophy</p>
        </div>
      </section>
    </div>
  );
};

export default Activities;
