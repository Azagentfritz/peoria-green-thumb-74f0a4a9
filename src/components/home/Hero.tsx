
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Hero = () => {
  // Add effect to check if image is loading
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/81c31bbc-b761-4eca-8dad-37958daa283f.png';
    img.onload = () => console.log('Image loaded successfully');
    img.onerror = (e) => console.error('Error loading image:', e);
  }, []);

  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/81c31bbc-b761-4eca-8dad-37958daa283f.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          width: '100%',
          height: '100%',
          filter: 'brightness(0.8)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 h-full relative z-20 flex items-center">
        <div className="max-w-3xl animate-blur-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Transform Your Outdoor Space
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
            Professional landscaping services in Phoenix to create beautiful, sustainable outdoor environments that enhance your property's value and your quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-lawn-600 hover:bg-lawn-700 text-white font-medium px-8 sm:px-6"
              asChild
            >
              <Link to="/services">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white border-opacity-30"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Fallback image as a test */}
      <img 
        src="/lovable-uploads/81c31bbc-b761-4eca-8dad-37958daa283f.png" 
        alt="Fallback test" 
        className="hidden"
        onLoad={() => console.log('Fallback image loaded')}
        onError={(e) => console.error('Fallback error:', e)}
      />
    </div>
  );
};

export default Hero;
