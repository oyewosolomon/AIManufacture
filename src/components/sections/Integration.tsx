import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cloud, 
  Shield, 
  Cpu,
  Network,
  Settings,
  Code,
  Lock
} from 'lucide-react';

const IntegrationSection = () => {
    const technologies = [
        {
          category: "Manufacturing Systems",
          items: [
            { name: "SCADA", logo: "https://logo.clearbit.com/scada.com" }, // Replace with actual domain if available
            { name: "PLC Systems", logo: "https://logo.clearbit.com/siemens.com" }, // Example
            { name: "MES", logo: "https://logo.clearbit.com/mes.com" }, // Replace with actual domain if available
            { name: "ERP", logo: "https://logo.clearbit.com/sap.com" } // Example
          ]
        },
        {
          category: "Cloud Platforms",
          items: [
            { name: "AWS", logo: "https://logo.clearbit.com/aws.com" },
            { name: "Azure", logo: "https://logo.clearbit.com/microsoft.com" },
            { name: "Google Cloud", logo: "https://logo.clearbit.com/google.com" },
            { name: "IBM Cloud", logo: "https://logo.clearbit.com/ibm.com" }
          ]
        },
        {
          category: "Data Analytics",
          items: [
            { name: "Tableau", logo: "https://logo.clearbit.com/tableau.com" },
            { name: "Power BI", logo: "https://logo.clearbit.com/microsoft.com" },
            { name: "Snowflake", logo: "https://logo.clearbit.com/snowflake.com" },
            { name: "Databricks", logo: "https://logo.clearbit.com/databricks.com" }
          ]
        }
      ];

  const features = [
    {
      icon: Code,
      title: "REST & GraphQL APIs",
      description: "Modern, well-documented APIs for seamless integration with your existing systems"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption and role-based access control"
    },
    {
      icon: Network,
      title: "Real-time Sync",
      description: "Bidirectional data synchronization with microsecond latency"
    },
    {
      icon: Database,
      title: "Data Flexibility",
      description: "Support for all major databases and data formats"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Seamless Integration Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect AIManufacture Pro with your existing technology stack through 
            our enterprise-grade integration platform
          </p>
        </motion.div>

        {/* Integration Platform Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-lg font-semibold mb-6">{tech.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {tech.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50"
                    >
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="mb-2"
                      />
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Platform Icon */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center"
            >
              <Settings className="w-10 h-10 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* API Reference Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-900 rounded-xl p-6 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-400 text-sm">API Example</span>
          </div>
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Initialize AIManufacture Pro client
const client = new AIManufacturePro({
  apiKey: process.env.API_KEY,
  environment: 'production'
});

// Real-time production monitoring
client.productionLine('line-123')
  .subscribe(metrics => {
    console.log('Current efficiency:', metrics.efficiency);
    console.log('Quality score:', metrics.qualityScore);
    console.log('Predicted maintenance:', metrics.nextMaintenance);
  });`}
          </pre>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationSection;