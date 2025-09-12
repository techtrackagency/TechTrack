import React from 'react';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with cutting-edge technology solutions that drive growth and innovation.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading technology partner, transforming ideas into digital realities that shape the future.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends, ensuring our solutions are always future-ready and scalable.'
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Our diverse team of experts brings together years of experience in web, mobile, and AI technologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Tech Track
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology solutions agency dedicated to building exceptional digital experiences. 
            With expertise spanning web development, mobile applications, and artificial intelligence, we transform 
            complex challenges into elegant, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose Tech Track?</h3>
              <ul className="space-y-4">
                {[
                  'Proven track record with 150+ successful projects',
                  'Expert team with 5+ years of industry experience',
                  'Cutting-edge technologies and modern development practices',
                  'End-to-end solutions from concept to deployment',
                  '24/7 support and maintenance services',
                  'Agile development methodology for faster delivery'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full mt-3 mr-3"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-lg mb-4">Years of Excellence</div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-lg mb-4">Projects Delivered</div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;