
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-lawn-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 reveal-animation">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto reveal-animation">
            Contact us today for a free consultation and quote. Let's bring your landscaping vision to life!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-animation">
            <Button 
              size="lg" 
              className="bg-white text-lawn-700 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+16238452626">
                <Phone className="mr-2 h-5 w-5" />
                Call (623) 845-2626
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
