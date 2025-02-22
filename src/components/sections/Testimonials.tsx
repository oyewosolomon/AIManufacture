import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Director of Operations",
      company: "Global Motors Ltd.",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      quote: "AIManufacture Pro transformed our production efficiency. We've seen a 45% increase in output and reduced waste by 75% within just six months.",
      stats: {
        efficiency: "+45%",
        waste: "-75%",
        savings: "$2.4M"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Plant Manager",
      company: "TechFab Industries",
      image: "https://randomuser.me/api/portraits/men/87.jpg",
      quote: "The predictive maintenance feature alone has saved us millions in potential downtime. It's like having a crystal ball for our manufacturing operations.",
      stats: {
        uptime: "99.9%",
        maintenance: "-60%",
        roi: "312%"
      }
    },
    {
      name: "Lisa Thompson",
      role: "CTO",
      company: "SmartTech Manufacturing",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      quote: "The AI-driven quality control has revolutionized our processes. We're catching defects we never could before, and our customer satisfaction is at an all-time high.",
      stats: {
        quality: "+85%",
        returns: "-92%",
        satisfaction: "98%"
      }
    }
  ];

  const caseStudies = [
    {
      company: "Global Motors Ltd.",
      title: "Automotive Excellence Through AI",
      description: "How a leading automotive manufacturer achieved unprecedented efficiency.",
      metric: "45% Efficiency Increase",
      image: "/images/a.jpg"
    },
    {
      company: "TechFab Industries",
      title: "Smart Predictive Maintenance",
      description: "Revolutionary approach to equipment maintenance and downtime prevention.",
      metric: "99.9% Uptime Achieved",
      image: "/images/c.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white py-24" id='testimonials'>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how leading manufacturers are transforming their operations with AIManufacture Pro
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="mb-24">
          <div className="relative bg-slate-900 rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-500 opacity-20" />
            
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-gray-400">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-blue-400">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8">
                  {testimonials[activeIndex].quote}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(testimonials[activeIndex].stats).map(([key, value]) => (
                    <div key={key} className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white mb-1">{value}</div>
                      <div className="text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <div className="flex justify-between items-center mb-8" id='resources'>
            <h3 className="text-2xl font-bold text-gray-900">Featured Case Studies</h3>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold mb-1">{study.company}</p>
                    <p className="text-2xl font-bold">{study.metric}</p>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h4>
                <p className="text-gray-600">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;