import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  ActivitySquare, 
  Factory,
  Shield, 
  BarChart, 
  Settings,
  LucideIcon // Import LucideIcon type for the icon prop
} from 'lucide-react';

// Define the props for the FeatureCard component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  image: string; // Add image prop
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      className="bg-white/70 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20 relative overflow-hidden"
    >
      {/* Icon with hover animation */}
      <motion.div
        whileHover={{ rotate: 15, scale: 1.1 }}
        className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
      >
        <Icon className="w-6 h-6 text-blue-600" />
      </motion.div>

      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Image with parallax effect */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Control",
      description: "Advanced machine learning algorithms optimize production processes in real-time, adapting to changing conditions.",
      image: "/images/ai-control.jpeg" // Replace with actual image
    },
    {
      icon: ActivitySquare,
      title: "Real-time Monitoring",
      description: "Monitor every aspect of your production lines with millisecond precision and instant alerts.",
      image: "/images/real-time.webp" // Replace with actual image
    },
    {
      icon: Factory,
      title: "Scale with Confidence",
      description: "Seamlessly manage 1,000+ production lines from a single, intuitive dashboard.",
      image: "/images/Confidence-graphic.webp" // Replace with actual image
    },
    {
      icon: Shield,
      title: "Predictive Maintenance",
      description: "Prevent downtime with AI-driven maintenance predictions and early warning systems.",
      image: "/images/predictive.jpg" // Replace with actual image
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-24" id='features'>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Revolutionize Your Manufacturing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with industrial expertise to 
            deliver unprecedented control and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;