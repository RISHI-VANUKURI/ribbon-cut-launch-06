
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
    { id: 'cultural', name: 'Cultural Programs' }
  ];

  const galleryItems = [
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
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School campus",
      category: "campus",
      title: "Beautiful Campus View"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students in classroom",
      category: "campus",
      title: "Interactive Learning Session"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students studying",
      category: "campus",
      title: "Library Study Hours"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School playground",
      category: "sports",
      title: "Morning Assembly"
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
