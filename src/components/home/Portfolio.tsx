
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Portfolio = () => {
  const images: GalleryImage[] = [
    {
      src: '/lovable-uploads/32b3dc89-6e45-438c-9342-1c1d3b2f5064.png',
      alt: 'Backyard pool and outdoor entertainment area',
      category: 'Outdoor Living'
    },
    {
      src: '/lovable-uploads/084ddf75-fdbf-44bf-b19b-4d3a6c8897a4.png',
      alt: 'Stone walkway with water feature',
      category: 'Hardscaping'
    },
    {
      src: '/lovable-uploads/91b21081-0876-423c-8fc6-719215487e86.png',
      alt: 'RV parking with paver driveway',
      category: 'Driveways'
    },
    {
      src: '/lovable-uploads/948fcef5-6837-4be7-8a8c-8609821083ce.png',
      alt: 'Outdoor kitchen with stone features',
      category: 'Outdoor Kitchens'
    },
    {
      src: '/lovable-uploads/ae9dad8f-f778-4317-9445-07f632f87f41.png',
      alt: 'Artificial turf and paver installation',
      category: 'Lawns'
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-gray-600">
            Browse through our portfolio of landscaping projects in Phoenix and see how we've transformed outdoor spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-sm group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 md:opacity-70'}`}>
                <span className="text-white/80 text-sm font-medium mb-1">{image.category}</span>
                <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal-animation">
          <Button 
            size="lg" 
            className="bg-lawn-600 hover:bg-lawn-700 text-white"
            asChild
          >
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
