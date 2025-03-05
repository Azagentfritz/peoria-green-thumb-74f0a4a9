
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const benefits = [
    'Licensed and insured professionals',
    'Customized solutions for your property',
    'Eco-friendly practices',
    'Attention to detail',
    'High-quality materials',
    'Reliable service',
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-animation">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Phoenix's Premier Landscaping Service
            </h2>
            <p className="text-gray-600 mb-6">
              At Peoria Lawn Care, we're dedicated to transforming outdoor spaces into beautiful, functional environments that enhance your property's value and your quality of life.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience in residential and commercial landscaping in Phoenix, our team has the expertise to bring your vision to life. We combine creativity with technical knowledge to deliver landscaping solutions that are not only aesthetically pleasing but also sustainable and low-maintenance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-lawn-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-lawn-600 hover:bg-lawn-700 text-white" 
              size="lg"
              asChild
            >
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
          
          <div className="relative reveal-animation">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
              <img 
                src="/lovable-uploads/948fcef5-6837-4be7-8a8c-8609821083ce.png" 
                alt="Outdoor kitchen and grill area" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-lawn-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gray-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
