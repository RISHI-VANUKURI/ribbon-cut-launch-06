
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/501e9147-d192-4ecb-98d8-21cc820c40d0.png",
      alt: "Students in science exhibition"
    },
    {
      src: "/lovable-uploads/c01ece17-b55f-4278-aa0c-5d2710d15453.png",
      alt: "Sports activities - Kabaddi"
    },
    {
      src: "/lovable-uploads/7871e098-d1b8-4c35-a1d9-0ca06df3f4fe.png",
      alt: "Cultural dance performance"
    },
    {
      src: "/lovable-uploads/40f4f173-ccff-4dce-a285-2900c4482c3a.png",
      alt: "Sports competition"
    },
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "School campus"
    }
  ];

  return (
    <section className="py-0">
      <div className="max-w-full mx-auto">
        <Carousel 
          className="w-full"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-4">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Life at BMRS
                      </h2>
                      <p className="text-lg md:text-xl opacity-90">
                        Discover the vibrant campus life, activities, and memorable moments at BMRS Group of Schools
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
