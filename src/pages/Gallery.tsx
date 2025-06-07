
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ZoomIn } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'School Events' },
    { id: 'sports', name: 'Sports Activities' },
    { id: 'campus', name: 'Campus Life' },
    { id: 'cultural', name: 'Cultural Programs' },
    { id: 'academics', name: 'Academic Activities' }
  ];

  const galleryItems = [
    // Carousel images
    {
      id: 1,
      src: "/lovable-uploads/501e9147-d192-4ecb-98d8-21cc820c40d0.png",
      alt: "Students in science exhibition",
      category: "events",
      title: "Science Exhibition 2024"
    },
    {
      id: 2,
      src: "/lovable-uploads/c01ece17-b55f-4278-aa0c-5d2710d15453.png",
      alt: "Sports activities - Kabaddi",
      category: "sports",
      title: "Inter-School Kabaddi Tournament"
    },
    {
      id: 3,
      src: "/lovable-uploads/7871e098-d1b8-4c35-a1d9-0ca06df3f4fe.png",
      alt: "Cultural dance performance",
      category: "cultural",
      title: "Annual Cultural Day"
    },
    {
      id: 4,
      src: "/lovable-uploads/40f4f173-ccff-4dce-a285-2900c4482c3a.png",
      alt: "Sports competition",
      category: "sports",
      title: "Athletic Championship"
    },
    {
      id: 5,
      src: "/lovable-uploads/6c1bcfd3-0725-4784-932e-41ab4b43eb30.png",
      alt: "BMRS SSC Toppers 2024-2025 achievements",
      category: "events",
      title: "SSC Toppers 2024-2025"
    },
    {
      id: 6,
      src: "/lovable-uploads/db69c9f5-1a37-4de9-84ba-83eec330e7d7.png",
      alt: "BMRS students visit to National Remote Sensing Centre",
      category: "events",
      title: "National Remote Sensing Centre Visit"
    },
    // New academic images
    {
      id: 7,
      src: "/lovable-uploads/ee319959-1030-42ac-b1cd-cce2b117c623.png",
      alt: "Morning assembly with students",
      category: "campus",
      title: "Morning Assembly"
    },
    {
      id: 8,
      src: "/lovable-uploads/14d28323-06ae-4fe0-a40c-062565df1341.png",
      alt: "Students with science project models",
      category: "academics",
      title: "Science Project Exhibition"
    },
    {
      id: 9,
      src: "/lovable-uploads/3bb55dd9-f581-4174-bd26-2a3ad1d11820.png",
      alt: "Science exhibition with students presenting projects",
      category: "academics",
      title: "Student Science Fair"
    },
    {
      id: 10,
      src: "/lovable-uploads/c24924a9-a2ec-427b-9348-960ec90a58c2.png",
      alt: "Students in science laboratory",
      category: "academics",
      title: "Science Laboratory Session"
    },
    {
      id: 11,
      src: "/lovable-uploads/0eedf1c8-4a4a-4c1c-97c3-baba673ba9d7.png",
      alt: "Students with thermometer types project",
      category: "academics",
      title: "Physics Project - Thermometers"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
            Photo Gallery
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Explore moments that capture the essence of life at BMRS Group of Schools
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id 
                    ? 'bg-gold hover:bg-gold/90 text-white' 
                    : 'border-gold text-gold hover:bg-gold hover:text-white'
                } transition-colors`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift animate-cardFloat"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/90 hover:bg-white text-navy"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="bg-white/90 hover:bg-white text-navy"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Want to be part of these moments?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join BMRS Group of Schools and create your own memorable experiences.
          </p>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-white px-8 hover-lift"
          >
            Apply for Admission
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
