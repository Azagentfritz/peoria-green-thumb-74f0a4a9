
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const businessHours = [
    { day: 'Monday', hours: '9 AM–5 PM' },
    { day: 'Tuesday', hours: '9 AM–5 PM' },
    { day: 'Wednesday', hours: '9 AM–5 PM' },
    { day: 'Thursday', hours: '9 AM–5 PM' },
    { day: 'Friday', hours: '9 AM–5 PM' },
    { day: 'Saturday', hours: '9 AM–5 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const services = [
    'Landscape Design',
    'Lawn Maintenance',
    'Irrigation Systems',
    'Hardscaping',
    'Outdoor Living Spaces',
    'Other'
  ];

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Peoria Lawn Care</title>
        <meta name="description" content="Contact Peoria Lawn Care for professional landscaping services in Phoenix. Get a free quote for your next project." />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(/lovable-uploads/084ddf75-fdbf-44bf-b19b-4d3a6c8897a4.png)`,
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-blur-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-white/80">
              Reach out for a free quote or to learn more about our services
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="reveal-animation">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lawn-600 focus:outline-none focus:ring-1 focus:ring-lawn-600"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-lawn-600 hover:bg-lawn-700 text-white" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="reveal-animation">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 h-full">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <ul className="space-y-6 mb-8">
                  <li className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-lawn-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium text-gray-900 mb-1">Phone</span>
                      <a href="tel:+16238452626" className="text-gray-600 hover:text-lawn-600">+1 (623) 845-2626</a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-lawn-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium text-gray-900 mb-1">Email</span>
                      <a href="mailto:info@peoria-lawncare.com" className="text-gray-600 hover:text-lawn-600">info@peoria-lawncare.com</a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-lawn-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block font-medium text-gray-900 mb-1">Location</span>
                      <span className="text-gray-600">Phoenix, Arizona</span>
                    </div>
                  </li>
                </ul>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-lawn-600 mr-2" />
                    Business Hours
                  </h3>
                  <ul className="space-y-2">
                    {businessHours.map((item) => (
                      <li key={item.day} className="flex justify-between">
                        <span className="font-medium text-gray-700">{item.day}:</span>
                        <span className="text-gray-600">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-lawn-600 mr-2" />
                    Why Choose Us
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-lawn-600 mt-0.5" />
                      <span className="text-gray-600">Licensed and insured professionals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-lawn-600 mt-0.5" />
                      <span className="text-gray-600">Free consultations and quotes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-lawn-600 mt-0.5" />
                      <span className="text-gray-600">Quality materials and workmanship</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-lawn-600 mt-0.5" />
                      <span className="text-gray-600">Satisfaction guaranteed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-animation">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Service Area
            </h2>
            <p className="text-gray-600">
              We proudly serve Phoenix and surrounding areas including Peoria, Glendale, Scottsdale, and more.
            </p>
          </div>
          
          <div className="reveal-animation">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211748.68319688626!2d-112.34007971780192!3d33.58773089261842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6f4ac9476163%3A0x24e32bf11e042698!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1716767429705!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Phoenix, Arizona"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
