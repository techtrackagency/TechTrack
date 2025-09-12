import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Filter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Team: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Full-Stack Developer',
      skills: ['Web', 'App'],
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in React, Node.js, and cloud architecture with 6+ years experience.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Marcus Chen',
      role: 'AI/ML Engineer',
      skills: ['ML', 'Web'],
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialized in machine learning, deep learning, and data science solutions.',
      social: {
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Mobile App Developer',
      skills: ['App', 'Web'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Cross-platform mobile development expert with React Native and Flutter.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      skills: ['Web', 'ML'],
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Cloud infrastructure and deployment automation specialist.',
      social: {
        github: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Lisa Wang',
      role: 'UI/UX Designer',
      skills: ['Web', 'App'],
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer focused on user-centered design and modern interfaces.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Alex Thompson',
      role: 'Backend Developer',
      skills: ['Web', 'ML'],
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Scalable backend systems and API development expert.',
      social: {
        github: '#',
        linkedin: '#'
      }
    }
  ];

  const filters = ['All', 'Web', 'App', 'ML'];

  const filteredMembers = filter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.skills.includes(filter));

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our talented team of developers, designers, and engineers brings together years of experience 
            to deliver exceptional results.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                {filterOption}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-blue-400 to-purple-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to join our amazing team?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            We're Hiring!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;