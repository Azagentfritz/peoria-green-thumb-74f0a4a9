
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-heading font-bold text-lawn-700">
                Peoria Lawn Care
              </span>
              <span className="text-xs text-lawn-500 font-medium hidden sm:block">
                Premier Landscaping Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-lawn-600 relative ${
                  isActive(link.path)
                    ? 'text-lawn-700 after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-lawn-500 after:bottom-[-6px] after:left-0'
                    : 'text-gray-700'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Button size="sm" className="bg-lawn-600 hover:bg-lawn-700 text-white">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+16238452626">+1 (623) 845-2626</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors py-2 px-4 rounded ${
                  isActive(link.path)
                    ? 'text-lawn-700 bg-lawn-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Button size="sm" className="bg-lawn-600 hover:bg-lawn-700 text-white w-full mt-4">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+16238452626">+1 (623) 845-2626</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
