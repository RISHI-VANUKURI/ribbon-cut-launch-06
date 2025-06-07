
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FloatingGalleryButton = () => {
  return (
    <Link to="/gallery">
      <Button
        size="lg"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gold hover:bg-gold/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift z-50 animate-bounceIn"
      >
        <Camera className="w-6 h-6" />
      </Button>
    </Link>
  );
};

export default FloatingGalleryButton;
