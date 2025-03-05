
import { Helmet } from 'react-helmet';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Helmet>
        <title>Page Not Found - Peoria Lawn Care</title>
      </Helmet>
      
      <div className="text-center max-w-md">
        <div className="bg-lawn-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-lawn-700">404</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button 
          size="lg" 
          className="bg-lawn-600 hover:bg-lawn-700 text-white"
          asChild
        >
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
