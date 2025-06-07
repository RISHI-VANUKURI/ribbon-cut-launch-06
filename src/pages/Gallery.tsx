
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, ZoomIn, X } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'events', name: 'School Events' },
    { id: 'sports', name: 'Sports Activities' },
    { id: 'campus', name: 'Campus Life' },
    { id: 'cultural', name: 'Cultural Programs' },
    { id: 'academics', name: 'Academic Activities' }
  ];

  // Group photos by events
  const events = [
    {
      id: 'science-exhibition',
      title: 'Science Exhibition 2024',
      category: 'events',
      description: 'Annual science exhibition showcasing student innovations and projects',
      photos: [
        {
          id: 1,
          src: "/lovable-uploads/501e9147-d192-4ecb-98d8-21cc820c40d0.png",
          alt: "Students in science exhibition",
          title: "Science Exhibition 2024"
        },
        {
          id: 8,
          src: "/lovable-uploads/14d28323-06ae-4fe0-a40c-062565df1341.png",
          alt: "Students with science project models",
          title: "Science Project Exhibition"
        },
        {
          id: 9,
          src: "/lovable-uploads/3bb55dd9-f581-4174-bd26-2a3ad1d11820.png",
          alt: "Science exhibition with students presenting projects",
          title: "Student Science Fair"
        }
      ]
    },
    {
      id: 'sports-activities',
      title: 'Sports Championship',
      category: 'sports',
      description: 'Inter-school sports competitions and athletic events',
      photos: [
        {
          id: 2,
          src: "/lovable-uploads/c01ece17-b55f-4278-aa0c-5d2710d15453.png",
          alt: "Sports activities - Kabaddi",
          title: "Inter-School Kabaddi Tournament"
        },
        {
          id: 4,
          src: "/lovable-uploads/40f4f173-ccff-4dce-a285-2900c4482c3a.png",
          alt: "Sports competition",
          title: "Athletic Championship"
        }
      ]
    },
    {
      id: 'cultural-day',
      title: 'Annual Cultural Day',
      category: 'cultural',
      description: 'Cultural performances and traditional dance programs',
      photos: [
        {
          id: 3,
          src: "/lovable-uploads/7871e098-d1b8-4c35-a1d9-0ca06df3f4fe.png",
          alt: "Cultural dance performance",
          title: "Annual Cultural Day"
        }
      ]
    },
    {
      id: 'ssc-toppers',
      title: 'SSC Toppers 2024-2025',
      category: 'events',
      description: 'Celebrating academic excellence and achievements',
      photos: [
        {
          id: 5,
          src: "/lovable-uploads/6c1bcfd3-0725-4784-932e-41ab4b43eb30.png",
          alt: "BMRS SSC Toppers 2024-2025 achievements",
          title: "SSC Toppers 2024-2025"
        }
      ]
    },
    {
      id: 'nrsc-visit',
      title: 'NRSC Educational Visit',
      category: 'events',
      description: 'Educational visit to National Remote Sensing Centre',
      photos: [
        {
          id: 6,
          src: "/lovable-uploads/db69c9f5-1a37-4de9-84ba-83eec330e7d7.png",
          alt: "BMRS students visit to National Remote Sensing Centre",
          title: "National Remote Sensing Centre Visit"
        }
      ]
    },
    {
      id: 'campus-life',
      title: 'Daily Campus Life',
      category: 'campus',
      description: 'Morning assemblies and daily school activities',
      photos: [
        {
          id: 7,
          src: "/lovable-uploads/ee319959-1030-42ac-b1cd-cce2b117c623.png",
          alt: "Morning assembly with students",
          title: "Morning Assembly"
        }
      ]
    },
    {
      id: 'academic-activities',
      title: 'Academic Laboratory Sessions',
      category: 'academics',
      description: 'Hands-on learning in science laboratories',
      photos: [
        {
          id: 10,
          src: "/lovable-uploads/c24924a9-a2ec-427b-9348-960ec90a58c2.png",
          alt: "Students in science laboratory",
          title: "Science Laboratory Session"
        },
        {
          id: 11,
          src: "/lovable-uploads/0eedf1c8-4a4a-4c1c-97c3-baba673ba9d7.png",
          alt: "Students with thermometer types project",
          title: "Physics Project - Thermometers"
        }
      ]
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
            Event Gallery
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Explore memorable moments from various events at BMRS Group of Schools
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

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <Dialog key={event.id}>
                <DialogTrigger asChild>
                  <Card 
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift animate-cardFloat cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={event.photos[0].src}
                          alt={event.photos[0].alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                            <p className="text-sm font-medium">View {event.photos.length} photo{event.photos.length > 1 ? 's' : ''}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {event.description}
                        </p>
                        <div className="mt-3 text-xs text-gold font-medium">
                          {event.photos.length} photo{event.photos.length > 1 ? 's' : ''}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-navy">
                      {event.title}
                    </DialogTitle>
                    <p className="text-gray-600">{event.description}</p>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {event.photos.map((photo) => (
                      <div key={photo.id} className="relative group">
                        <div className="aspect-square overflow-hidden rounded-lg">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="secondary"
                              className="bg-white/90 hover:bg-white text-navy"
                              onClick={() => window.open(photo.src, '_blank')}
                            >
                              <ZoomIn className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="secondary"
                              className="bg-white/90 hover:bg-white text-navy"
                              onClick={() => {
                                const link = document.createElement('a');
                                link.href = photo.src;
                                link.download = photo.title;
                                link.click();
                              }}
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-medium text-navy">{photo.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found in this category.</p>
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
