
import { Helmet } from 'react-helmet';
import { ArrowRight, Paintbrush, Crop, Droplet, Castle, Home, Tractor, Hammer, Trees } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicePage = () => {
  const services = [
    {
      id: 'design',
      icon: Paintbrush,
      title: 'Landscape Design',
      description: 'Our professional designers create custom landscape plans that match your style, property needs, and budget. We consider factors such as soil conditions, sun exposure, water requirements, and your aesthetic preferences.',
      features: [
        'Custom design plans',
        'Plant selection and placement',
        'Sustainable design practices',
        'Seasonal color planning',
        '3D visualization available'
      ],
      image: '/lovable-uploads/ae9dad8f-f778-4317-9445-07f632f87f41.png'
    },
    {
      id: 'maintenance',
      icon: Crop,
      title: 'Lawn Maintenance',
      description: 'Keep your lawn looking its best with our professional maintenance services. We provide regular mowing, fertilization, weed control, and other essential services to ensure your landscape remains beautiful and healthy.',
      features: [
        'Weekly or bi-weekly mowing',
        'Fertilization programs',
        'Weed control and prevention',
        'Aeration and dethatching',
        'Disease and pest management'
      ],
      image: '/lovable-uploads/ae9dad8f-f778-4317-9445-07f632f87f41.png'
    },
    {
      id: 'irrigation',
      icon: Droplet,
      title: 'Irrigation Systems',
      description: 'Our irrigation solutions ensure your landscape receives the right amount of water while conserving this precious resource. We design, install, and maintain efficient irrigation systems tailored to your specific landscape needs.',
      features: [
        'Drip irrigation installation',
        'Sprinkler system design',
        'Smart controller installation',
        'System maintenance and repairs',
        'Water conservation solutions'
      ],
      image: '/lovable-uploads/084ddf75-fdbf-44bf-b19b-4d3a6c8897a4.png'
    },
    {
      id: 'hardscaping',
      icon: Castle,
      title: 'Hardscaping',
      description: 'Enhance your outdoor space with beautiful and functional hardscape elements. Our team creates patios, walkways, retaining walls, and other structures that complement your landscape and increase your property value.',
      features: [
        'Paver patios and walkways',
        'Stone and brick walls',
        'Outdoor fireplaces and fire pits',
        'Water features and fountains',
        'Decorative concrete work'
      ],
      image: '/lovable-uploads/91b21081-0876-423c-8fc6-719215487e86.png'
    },
    {
      id: 'outdoor-living',
      icon: Home,
      title: 'Outdoor Living Spaces',
      description: 'Transform your backyard into a functional extension of your home. We design and build outdoor living areas that provide comfort and style for entertaining, relaxing, and enjoying the Arizona weather.',
      features: [
        'Outdoor kitchens and BBQ areas',
        'Pergolas and shade structures',
        'Seating and dining areas',
        'Pool surrounds and decking',
        'Landscape lighting'
      ],
      image: '/lovable-uploads/32b3dc89-6e45-438c-9342-1c1d3b2f5064.png'
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Our Services - Peoria Lawn Care</title>
        <meta name="description" content="Explore our comprehensive landscaping services including design, maintenance, irrigation, hardscaping, and outdoor living spaces." />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(/lovable-uploads/32b3dc89-6e45-438c-9342-1c1d3b2f5064.png)`,
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-blur-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our Landscaping Services
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Professional solutions for all your outdoor space needs in Phoenix
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
      
      {/* Services */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-animation ${
                index !== services.length - 1 ? 'mb-24 pb-24 border-b border-gray-100' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center justify-center rounded-md bg-lawn-50 p-2 mb-4">
                  <service.icon className="h-6 w-6 text-lawn-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-lawn-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="bg-lawn-600 hover:bg-lawn-700 text-white"
                  asChild
                >
                  <Link to="/contact">
                    Request This Service
                  </Link>
                </Button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                </div>
                <div className={`absolute -z-10 rounded-full bg-lawn-50 w-64 h-64 ${
                  index % 2 === 0 ? '-bottom-10 -right-10' : '-bottom-10 -left-10'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-600 mb-8">
              We offer personalized landscaping services tailored to your unique needs and preferences. Contact us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-lawn-600 hover:bg-lawn-700 text-white"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-lawn-600 text-lawn-600"
                asChild
              >
                <a href="tel:+16238452626">
                  Call (623) 845-2626
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicePage;
