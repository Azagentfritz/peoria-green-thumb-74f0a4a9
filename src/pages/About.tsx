
import { Helmet } from 'react-helmet';
import { CheckCircle2, Users, Award, Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, no matter the size.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority, and we tailor our services to your needs.'
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and fairness.'
    }
  ];

  const businessHours = [
    { day: 'Monday', hours: '9 AM–5 PM' },
    { day: 'Tuesday', hours: '9 AM–5 PM' },
    { day: 'Wednesday', hours: '9 AM–5 PM' },
    { day: 'Thursday', hours: '9 AM–5 PM' },
    { day: 'Friday', hours: '9 AM–5 PM' },
    { day: 'Saturday', hours: '9 AM–5 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Us - Peoria Lawn Care</title>
        <meta name="description" content="Learn about Peoria Lawn Care, Phoenix's premier landscaping service. Our team of experienced professionals is dedicated to creating beautiful outdoor spaces." />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(/lovable-uploads/ae9dad8f-f778-4317-9445-07f632f87f41.png)`,
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-blur-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              About Peoria Lawn Care
            </h1>
            <p className="text-lg text-white/80">
              Phoenix's trusted landscaping professionals since 2005
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-animation">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Peoria Lawn Care was founded with a simple mission: to provide exceptional landscaping services to the Phoenix community. What began as a small lawn care service has grown into a full-service landscaping company with a reputation for quality, reliability, and creative excellence.
              </p>
              <p className="text-gray-600 mb-8">
                Over the years, we've had the privilege of transforming countless outdoor spaces throughout Phoenix. From residential yards to commercial properties, we approach each project with the same level of dedication and attention to detail.
              </p>
              <p className="text-gray-600">
                Today, we continue to grow and evolve, embracing new techniques and sustainable practices while staying true to our commitment to customer satisfaction and quality craftsmanship.
              </p>
            </div>
            
            <div className="relative reveal-animation">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/32b3dc89-6e45-438c-9342-1c1d3b2f5064.png" 
                  alt="Beautiful backyard landscape by Peoria Lawn Care" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-lawn-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gray-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600">
              These core principles guide everything we do at Peoria Lawn Care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className="bg-lawn-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-lawn-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Hours and Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-animation">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Business Hours
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <ul className="space-y-4">
                  {businessHours.map((item) => (
                    <li key={item.day} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <Clock className="h-5 w-5 text-lawn-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{item.day}: </span>
                        <span className="text-gray-600">{item.hours}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="reveal-animation">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 pb-4 border-b border-gray-100">
                    <MapPin className="h-5 w-5 text-lawn-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Location: </span>
                      <span className="text-gray-600">Phoenix, Arizona</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 pb-4 border-b border-gray-100">
                    <Phone className="h-5 w-5 text-lawn-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Phone: </span>
                      <a href="tel:+16238452626" className="text-gray-600 hover:text-lawn-600">+1 (623) 845-2626</a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-lawn-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Email: </span>
                      <a href="mailto:info@peoria-lawncare.com" className="text-gray-600 hover:text-lawn-600">info@peoria-lawncare.com</a>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Button 
                    size="lg" 
                    className="bg-lawn-600 hover:bg-lawn-700 text-white w-full"
                    asChild
                  >
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-lawn-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 reveal-animation">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-white/90 text-lg mb-8 reveal-animation">
              Contact us today for a free consultation and quote. Let our experienced team bring your landscaping vision to life.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-lawn-700 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
