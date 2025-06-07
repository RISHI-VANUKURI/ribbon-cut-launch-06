
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Building2 } from 'lucide-react';

const BranchDetails = () => {
  const branches = [
    {
      name: "BMRS Ganesh Nagar Campus",
      address: "# 3-101/1, Chengicherla Main Road, Chengicherla, Hyderabad, Telangana 500038",
      email: "bmrsghs2024@gmail.com",
      phone: "+91 9959733822",
      image: "/lovable-uploads/1bd97367-f28f-41ab-aca0-b515339a825b.png"
    },
    {
      name: "BMRS Kranthi Colony Campus",
      address: "Kranthi Colony, Rd No. 2, Bolligudem, Telephone Colony, Chengicherla, Secunderabad, Telangana 500092",
      email: "bmrsghs2024@gmail.com",
      phone: "+91 9502022984",
      image: "/lovable-uploads/f9669ace-38f6-4b23-82f3-5da9319355fc.png"
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
              <div className="p-4">
                <img
                  src={branch.image}
                  alt={`${branch.name} Building`}
                  className="w-full h-48 object-cover rounded-lg hover-scale"
                />
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
