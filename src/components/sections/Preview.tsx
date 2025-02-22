import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const DashboardPreview = () => {
  // Sample data for the charts
  const productionData = [
    { name: '00:00', value: 85 },
    { name: '04:00', value: 88 },
    { name: '08:00', value: 95 },
    { name: '12:00', value: 92 },
    { name: '16:00', value: 87 },
    { name: '20:00', value: 89 },
    { name: '23:59', value: 91 },
  ];

  return (
    <div className="bg-slate-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Powerful Dashboard Interface
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Monitor and control your entire manufacturing operation from a single, 
            intuitive interface designed for maximum efficiency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl"
        >
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">Production Overview</h3>
              <p className="text-gray-400">Real-time metrics and analytics</p>
            </div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Export Data
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 text-white rounded-lg"
              >
                Settings
              </motion.button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {['Production Efficiency', 'Active Lines', 'Maintenance Alerts'].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-xl p-4"
              >
                <h4 className="text-gray-400 mb-2">{metric}</h4>
                <div className="text-3xl font-bold text-white">
                  {index === 0 ? '94.5%' : index === 1 ? '847' : '2'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Status Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['System Status', 'Network', 'AI Models', 'Data Storage'].map((status, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-gray-300">{status}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPreview;