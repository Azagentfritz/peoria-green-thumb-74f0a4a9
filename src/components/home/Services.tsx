
import { Link } from 'react-router-dom';
import { ArrowRight, Paintbrush, Crop, Droplet, Castle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Paintbrush,
    title: 'Landscape Design',
    description: 'Custom designs that match your style and property needs.',
    link: '/services#design'
  },
  {
    icon: Crop,
    title: 'Lawn Maintenance',
    description: 'Regular care to keep your lawn healthy and beautiful all year.',
    link: '/services#maintenance'
  },
  {
    icon: Droplet,
    title: 'Irrigation Systems',
    description: 'Efficient watering solutions that save water and money.',
    link: '/services#irrigation'
  },
  {
    icon: Castle,
    title: 'Hardscaping',
    description: 'Patios, walkways, and walls that enhance your outdoor living spaces.',
    link: '/services#hardscaping'
  },
  {
    icon: Home,
    title: 'Outdoor Living',
    description: 'Create functional outdoor spaces for entertainment and relaxation.',
    link: '/services#outdoor-living'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Landscaping Services</h2>
          <p className="text-gray-600">
            We offer comprehensive landscaping solutions tailored to your unique needs and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col h-full"
            >
              <div className="bg-lawn-50 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-lawn-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link}
                className="text-lawn-600 hover:text-lawn-700 font-medium inline-flex items-center text-sm mt-auto"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal-animation">
          <Button 
            size="lg" 
            className="bg-lawn-600 hover:bg-lawn-700 text-white"
            asChild
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
