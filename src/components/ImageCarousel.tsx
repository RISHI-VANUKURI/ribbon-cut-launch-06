
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
      src: "/lovable-uploads/db69c9f5-1a37-4de9-84ba-83eec330e7d7.png",
      alt: "BMRS students visit to National Remote Sensing Centre"
    },
    {
      src: "/lovable-uploads/6c1bcfd3-0725-4784-932e-41ab4b43eb30.png",
      alt: "BMRS SSC Toppers 2024-2025 achievements"
    },
    {
      src: "/lovable-uploads/3d2c8101-41e7-4789-a7cd-9dfb63d82806.png",
      alt: "Sports activities - Kabaddi competition"
    },
    {
      src: "/lovable-uploads/cdc0fa74-9d58-43cd-9ee4-e6357aafb05a.png",
      alt: "School assembly and morning activities"
    },
    {
      src: "/lovable-uploads/323bb2f7-a65b-44d9-9d78-20da9531097d.png",
      alt: "Cultural event - Traditional dance performances"
    },
    {
      src: "/lovable-uploads/5155050f-e127-4a71-bf95-d9eb1caf73cd.png",
      alt: "Cultural program - Classical dance performance"
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
                <div className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                        BMRS Group Of Schools
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed">
                        A Partnership For Your Child's Success
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4 h-8 w-8 sm:h-10 sm:w-10" />
          <CarouselNext className="right-2 sm:right-4 h-8 w-8 sm:h-10 sm:w-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
