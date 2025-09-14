import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Jennifer Adams',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'Tech Track delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'Michael Turner',
      role: 'CTO',
      company: 'InnovateLab',
      content: 'The AI solutions they built for us transformed our business operations. The team is professional, responsive, and truly understands complex technical requirements.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      role: 'Founder',
      company: 'HealthTech Solutions',
      content: 'Working with Tech Track was a game-changer for our startup. They delivered a robust mobile app that our users love, and the ongoing support has been excellent.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    
  ];

  const companyLogos = [
    'TechStart', 'InnovateLab', 'HealthTech', 'DataDriven', 'RetailPlus', 'FinanceForward'
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative"
            >
              <div className="absolute top-4 right-4 text-blue-500">
                <Quote className="h-8 w-8 opacity-20" />
              </div>

              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-blue-800 mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Company logos */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
          <p className="text-center text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 px-6 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <span className="font-bold text-gray-700 dark:text-gray-300 text-lg">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to join our satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;