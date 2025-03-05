
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Peoria Lawn Care transformed our backyard into an amazing outdoor living space. Their attention to detail and creative design exceeded our expectations.",
    author: "Sarah Johnson",
    title: "Homeowner in Phoenix"
  },
  {
    quote: "Professional, punctual, and meticulous. The team was a pleasure to work with and the results are stunning. Our new patio and landscaping have become our favorite part of the house.",
    author: "Michael Rodriguez",
    title: "Property Manager"
  },
  {
    quote: "I've worked with several landscaping companies over the years, and Peoria Lawn Care is by far the best. They understood our vision and executed it perfectly.",
    author: "Jennifer Thompson",
    title: "Real Estate Agent"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it - hear from our satisfied clients throughout Phoenix.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 border border-gray-100 shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-lawn-100" />
              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-lawn-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
