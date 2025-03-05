
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
};

const GalleryPage = () => {
  const galleryItems: GalleryItem[] = [
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
    },
    {
      src: '/lovable-uploads/32b3dc89-6e45-438c-9342-1c1d3b2f5064.png',
      alt: 'Custom pool deck design',
      category: 'Pools'
    },
    {
      src: '/lovable-uploads/084ddf75-fdbf-44bf-b19b-4d3a6c8897a4.png',
      alt: 'Desert landscape with water feature',
      category: 'Water Features'
    },
    {
      src: '/lovable-uploads/91b21081-0876-423c-8fc6-719215487e86.png',
      alt: 'Custom driveway extension',
      category: 'Driveways'
    },
    {
      src: '/lovable-uploads/ae9dad8f-f778-4317-9445-07f632f87f41.png',
      alt: 'Backyard transformation with artificial grass',
      category: 'Lawns'
    }
  ];

  const categories = Array.from(new Set(galleryItems.map(item => item.category)));
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  const filteredGallery = activeFilter
    ? galleryItems.filter(item => item.category === activeFilter)
    : galleryItems;

  return (
    <Layout>
      <Helmet>
        <title>Project Gallery - Peoria Lawn Care</title>
        <meta name="description" content="Browse our portfolio of landscaping projects in Phoenix including hardscaping, outdoor living spaces, irrigation systems, and more." />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(/lovable-uploads/948fcef5-6837-4be7-8a8c-8609821083ce.png)`,
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-blur-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our Project Gallery
            </h1>
            <p className="text-lg text-white/80">
              Explore our landscaping portfolio and get inspired for your own project
            </p>
          </div>
        </div>
      </div>
      
      {/* Gallery */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-animation">
            <Button
              variant={activeFilter === null ? "default" : "outline"}
              onClick={() => setActiveFilter(null)}
              className={activeFilter === null ? "bg-lawn-600 hover:bg-lawn-700" : ""}
            >
              All Projects
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "bg-lawn-600 hover:bg-lawn-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            {filteredGallery.map((item, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-sm group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/80 text-sm font-medium mb-1">{item.category}</span>
                  <h3 className="text-white text-lg font-semibold">{item.alt}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center reveal-animation">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your landscaping needs and get a free quote for your project.
            </p>
            <Button 
              size="lg" 
              className="bg-lawn-600 hover:bg-lawn-700 text-white"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white text-xl p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              <p className="text-white/80">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
