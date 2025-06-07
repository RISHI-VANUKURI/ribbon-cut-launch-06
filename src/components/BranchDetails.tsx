
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Building2 } from 'lucide-react';

const BranchDetails = () => {
  const branches = [
    {
      name: "BMRS Main Campus",
      address: "H NO 3-101/1, GANESH NAGAR COLONY, MAIN ROAD, CHENGICHERLA, Hyderabad, Telangana, India",
      email: "bmrsghs2024@gmail.com",
      phone: "+91 9959733822",
      images: [
        "/lovable-uploads/501e9147-d192-4ecb-98d8-21cc820c40d0.png",
        "/lovable-uploads/c01ece17-b55f-4278-aa0c-5d2710d15453.png",
        "/lovable-uploads/7871e098-d1b8-4c35-a1d9-0ca06df3f4fe.png"
      ]
    },
    {
      name: "BMRS Secondary Branch",
      address: "Coming Soon - New Branch Location, Hyderabad, Telangana, India",
      email: "branch2@bmrsgroupofschools.com",
      phone: "+91 9959733823",
      images: [
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
          <Building2 className="w-12 h-12 text-gold mx-auto mb-4 animate-bounceIn" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 animate-fadeInUp delay-200">
            Our Branches
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-300">
            Discover our campus locations and facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {branches.map((branch, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-cardFloat hover-lift" style={{animationDelay: `${index * 200}ms`}}>
              <div className="grid grid-cols-3 gap-2 p-4">
                {branch.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${branch.name} - Image ${imgIndex + 1}`}
                    className="w-full h-24 object-cover rounded-lg hover-scale"
                  />
                ))}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-4 animate-fadeInUp">
                  {branch.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 animate-slideInLeft">
                    <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3 animate-slideInLeft delay-100">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                    <a 
                      href={`mailto:${branch.email}`} 
                      className="text-navy hover:text-gold transition-colors text-sm"
                    >
                      {branch.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3 animate-slideInLeft delay-200">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    <a 
                      href={`tel:${branch.phone}`} 
                      className="text-navy hover:text-gold transition-colors text-sm"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchDetails;
