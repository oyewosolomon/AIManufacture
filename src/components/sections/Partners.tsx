import React, { useState } from 'react';
import { 
  ArrowRight, 
  Building2, 
  Calendar, 
  MessageSquare, 
  Users, 
  Lock,
  GitBranch,
  Wifi,
  Database,
  LineChart
} from 'lucide-react';

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Integrations' },
    { id: 'sensors', name: 'IoT & Sensors' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'security', name: 'Security' }
  ];

  const integrations = [
    {
      name: "Smart Building Systems",
      category: "sensors",
      icon: Building2,
      description: "Connect with leading smart building systems for comprehensive space monitoring",
      features: ["Real-time occupancy data", "Temperature monitoring", "Energy usage tracking"],
      logoUrl: "/api/placeholder/48/48"
    },
    {
      name: "Calendar Suite",
      category: "productivity",
      icon: Calendar,
      description: "Seamlessly integrate with popular calendar applications for desk and room booking",
      features: ["Automated scheduling", "Room booking", "Desk reservation"],
      logoUrl: "/api/placeholder/48/48"
    },
    {
      name: "Analytics Platform",
      category: "analytics",
      icon: LineChart,
      description: "Connect with business intelligence tools for deep insights",
      features: ["Custom dashboards", "Data export", "Automated reporting"],
      logoUrl: "/api/placeholder/48/48"
    },
    {
      name: "Communication Tools",
      category: "productivity",
      icon: MessageSquare,
      description: "Integrate with workplace communication platforms",
      features: ["Instant notifications", "Team coordination", "Automated updates"],
      logoUrl: "/api/placeholder/48/48"
    },
    {
      name: "Access Control",
      category: "security",
      icon: Lock,
      description: "Connect with building security and access control systems",
      features: ["Badge integration", "Access logs", "Security alerts"],
      logoUrl: "/api/placeholder/48/48"
    },
    {
      name: "IoT Sensors",
      category: "sensors",
      icon: Wifi,
      description: "Compatible with major IoT sensor manufacturers",
      features: ["Motion detection", "Environmental monitoring", "Asset tracking"],
      logoUrl: "/api/placeholder/48/48"
    }
  ];

  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === activeCategory);

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect SpaceOptimize with your existing tools and systems for seamless workspace management
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIntegrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <integration.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {integration.name}
                    </h3>
                    <span className="text-sm text-gray-500 capitalize">
                      {integration.category}
                    </span>
                  </div>
                </div>
                {/* <img
                  src={integration.logoUrl}
                  alt={`${integration.name} logo`}
                  className="w-12 h-12 rounded-lg"
                /> */}
              </div>

              <p className="text-gray-600 mb-6">
                {integration.description}
              </p>

              <div className="space-y-3 mb-6">
                {integration.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors">
                Learn more 
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Integration Platform */}
        <div className="mt-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Build Your Own Integration
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Access our comprehensive API and development tools to create custom integrations for your specific needs
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View API Documentation
              </button>
              <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-300 transition-colors">
                Join Developer Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;