import React from 'react';
import { Star } from 'lucide-react';
import customer3 from '../assets/images/customer3.jpg';
import customer5 from '../assets/images/customer5.jpg';


const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maxwell Gyetu',
      role: 'CEO, Social Entrepreneur',
      content: 'Nhyira delivered an exceptional e-commerce platform that exceeded our expectations. Her attention to detail and technical expertise are remarkable.',
      rating: 5,
      image: customer3,
    },
    {
      name: 'Seth A. Baah-Ansah',
      role: 'CEO, Fitta',
      content: 'Working with Nhyira was a game-changer for our project. She brought creative solutions and delivered on time, every time.',
      rating: 5,
      image: customer5
    },
    {
      name: 'MaEfya Portia',
      role: 'Founder, SPICEUP',
      content: 'Nhyira\'s UI/UX skills are outstanding. She transformed our vision into a beautiful, functional website that our users love.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-rose-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
          What Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg lg:text-xl">
          Don't just take my word for it - here's what clients have to say about our collaborations
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current group-hover:scale-110 transition-transform" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-rose-100 group-hover:border-rose-200 transition-colors"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;