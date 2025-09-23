 
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingGalleryButton from "./components/FloatingGalleryButton";
import FloatingNavigation from "./components/FloatingNavigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change and floating navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Define sections for each page
  const getPageSections = () => {
    switch (pathname) {
      case '/':
        return [
          { id: 'slides', label: 'Slides' },
          { id: 'welcome', label: 'Welcome' },
          { id: 'mission', label: 'Mission' },
          { id: 'stats', label: 'Stats' },
          { id: 'testimonials', label: 'Testimonials' },
          { id: 'contact', label: 'Contact' }
        ];
      case '/about':
        return [
          { id: 'hero', label: 'About' },
          { id: 'story', label: 'Story' },
          { id: 'foundation', label: 'Foundation' },
          { id: 'leadership', label: 'Leadership' },
          { id: 'facilities', label: 'Facilities' }
        ];
      case '/academics':
        return [
          { id: 'hero', label: 'Academics' },
          { id: 'curriculum', label: 'Curriculum' },
          { id: 'subjects', label: 'Subjects' },
          { id: 'methodology', label: 'Teaching' },
          { id: 'assessment', label: 'Assessment' }
        ];
      case '/activities':
        return [
          { id: 'hero', label: 'Activities' },
          { id: 'excellence', label: 'Excellence' },
          { id: 'sports', label: 'Sports' },
          { id: 'clubs', label: 'Clubs' },
          { id: 'achievements', label: 'Achievements' },
          { id: 'testimonials', label: 'Reviews' }
        ];
      case '/contact':
        return [
          { id: 'hero', label: 'Contact' },
          { id: 'locations', label: 'Locations' },
          { id: 'contact-info', label: 'Info' },
          { id: 'visit-cta', label: 'Visit' }
        ];
      default:
        return [];
    }
  };

  return <FloatingNavigation sections={getPageSections()} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow pt-4">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
