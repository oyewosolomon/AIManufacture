import React from 'react';
import { Users, Award, Globe, BarChart, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutUs: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Emily Carter',
      role: 'Chief Medical Officer',
      image: 'https://randomuser.me/api/portraits/men/95.jpg',
      description: 'Leading clinical research with over 15 years of experience in oncology trials.',
    },
    {
      name: 'John Matthews',
      role: 'Head of Engineering',
      image: 'https://randomuser.me/api/portraits/men/89.jpg',
      description: 'Expert in building scalable and secure data platforms for healthcare.',
    },
    {
      name: 'Sarah Lin',
      role: 'Director of Compliance',
      image: 'https://randomuser.me/api/portraits/women/23.jpg',
      description: 'Ensures all systems meet global regulatory standards like HIPAA and GDPR.',
    },
    {
      name: 'Michael Torres',
      role: 'Product Manager',
      image: 'https://randomuser.me/api/portraits/men/38.jpg',
      description: 'Drives product innovation to meet the needs of clinical researchers.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id='about'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to transforming clinical trial management through
            innovative technology and a commitment to excellence.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To empower clinical researchers with cutting-edge tools that streamline trial management, ensure
              compliance, and accelerate breakthroughs in medical science.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Users, value: '500+', label: 'Clinical Researchers Supported' },
            { icon: Award, value: '10+', label: 'Industry Awards Won' },
            { icon: Globe, value: '20+', label: 'Countries Served' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Patient-Centric', description: 'We prioritize patient safety and data integrity in everything we do.' },
              { icon: BarChart, title: 'Data-Driven', description: 'Our decisions are guided by data and evidence-based practices.' },
              { icon: Shield, title: 'Secure & Compliant', description: 'We adhere to the highest standards of security and regulatory compliance.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;