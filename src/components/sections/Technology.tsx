import React, { useState, useEffect } from 'react';
import { ArrowDown, Leaf, Droplet, Factory, ChevronRight, Menu, X, Sun, CloudRain, Thermometer, Cpu } from 'lucide-react';

// Previous components remain the same...
// (Navbar, Hero, and Stats components as before)

// Technology Showcase Section
const TechnologyShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />, // Replaced Plant with Leaf
      title: "Smart Growth Systems",
      description: "Advanced hydroponics and vertical stacking technology maximizing growth in minimal space",
      detail: "Our proprietary vertical stacking system enables up to 20x more produce per square foot compared to traditional farming methods."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Automated Climate Control",
      description: "AI-powered environmental management for optimal growing conditions",
      detail: "24/7 monitoring and adjustment of temperature, humidity, and light levels ensures perfect growing conditions year-round."
    },
    {
      icon: <CloudRain className="w-8 h-8" />,
      title: "Water Conservation",
      description: "Closed-loop water recycling system saving 95% water compared to traditional farming",
      detail: "Our advanced filtration and recycling systems maximize water efficiency while maintaining optimal nutrient levels."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "LED Lighting Technology",
      description: "Specialized LED arrays providing optimal light spectrums for different growth stages",
      detail: "Smart lighting systems adjust intensity and spectrum throughout the growing cycle, maximizing photosynthesis efficiency."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-24" id='technology'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Farming Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced vertical farming systems combine cutting-edge technology with sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive 3D-like Display */}
          <div className="relative h-96 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/v.jpg"
                alt="Vertical farming technology"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent" />
            </div>
          </div>

          {/* Feature Tabs */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer transform transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-white shadow-lg scale-105' 
                    : 'bg-gray-50 hover:bg-white hover:shadow-md'
                } rounded-xl p-6`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeFeature === index ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{feature.description}</p>
                    {activeFeature === index && (
                      <p className="text-green-600 text-sm animate-fadeIn">
                        {feature.detail}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyShowcase;