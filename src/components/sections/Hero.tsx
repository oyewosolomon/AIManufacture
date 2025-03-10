import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Activity, Cpu, BarChart2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/images/hero-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto mt-5 px-4 pt-20 pb-32">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            AIManufacture Pro
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl"
          >
            Transform your manufacturing with AI-powered intelligence. 
            Control 1,000+ production lines with unprecedented precision and efficiency.
          </motion.p>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:w-auto w-full md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg w- rounded-xl p-6 text-white"
            >
              <Activity className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-4xl font-bold mb-2">40%</h3>
              <p>Productivity Increase</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white"
            >
              <Cpu className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-4xl font-bold mb-2">80%</h3>
              <p>Defect Reduction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white"
            >
              <BarChart2 className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p>Predictive Maintenance</p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-lg transition-colors"
            >
              Watch Demo
            </motion.button>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;