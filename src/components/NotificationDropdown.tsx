
import { useState } from 'react';
import { Lightbulb, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Link } from 'react-router-dom';

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      title: "Admissions are open now!",
      description: "Apply for session 2024-25",
      link: "/contact",
      isExternal: false
    },
    {
      title: "Results have been posted",
      description: "Click here to check your results",
      link: "/academics",
      isExternal: false
    },
    {
      title: "Check out our new photos",
      description: "Latest events and activities",
      link: "/gallery",
      isExternal: false
    },
    {
      title: "Visit our official website",
      description: "bmrsgroupofschools.com",
      link: "https://bmrsgroupofschools.com",
      isExternal: true
    }
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative hover:bg-gold/10 transition-colors"
        >
          <Lightbulb className="w-5 h-5 text-gold hover:text-gold/80 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-navy">Latest Updates</h3>
          <p className="text-sm text-gray-600">Stay updated with BMRS news</p>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.map((notification, index) => (
            <div key={index} className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
              {notification.isExternal ? (
                <a 
                  href={notification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-navy group-hover:text-gold transition-colors">
                        {notification.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors" />
                  </div>
                </a>
              ) : (
                <Link 
                  to={notification.link}
                  className="block group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-navy group-hover:text-gold transition-colors">
                        {notification.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors" />
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationDropdown;
