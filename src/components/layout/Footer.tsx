
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex flex-col">
              <h3 className="text-xl font-heading font-bold text-lawn-700">Peoria Lawn Care</h3>
              <span className="text-sm text-lawn-500 font-medium">Premier Landscaping Services</span>
            </div>
            <p className="text-gray-600 text-sm">
              Professional landscaping services to transform your outdoor spaces into beautiful, functional environments.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-lawn-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-lawn-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-lawn-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 hover:text-lawn-600 transition-colors text-sm">Landscape Design</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-lawn-600 transition-colors text-sm">Lawn Maintenance</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-lawn-600 transition-colors text-sm">Irrigation Systems</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-lawn-600 transition-colors text-sm">Hardscaping</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-lawn-600 transition-colors text-sm">Outdoor Living Spaces</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Business Hours</h3>
            <ul className="space-y-2">
              {businessHours.map((item) => (
                <li key={item.day} className="flex items-start space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-lawn-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-700">{item.day}: </span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-lawn-600 mt-0.5 flex-shrink-0" />
                <a href="tel:+16238452626" className="text-gray-600 hover:text-lawn-600 transition-colors text-sm">+1 (623) 845-2626</a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-lawn-600 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@peoria-lawncare.com" className="text-gray-600 hover:text-lawn-600 transition-colors text-sm">info@peoria-lawncare.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-lawn-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Phoenix, Arizona</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Peoria Lawn Care. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-lawn-600 transition-colors">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-lawn-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
