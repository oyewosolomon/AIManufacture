import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const StatsSection = () => {
  const tradingData = [
    { month: 'Jan', volume: 1.2, users: 45 },
    { month: 'Feb', volume: 1.5, users: 52 },
    { month: 'Mar', volume: 1.1, users: 48 },
    { month: 'Apr', volume: 1.8, users: 61 },
    { month: 'May', volume: 1.4, users: 55 },
    { month: 'Jun', volume: 2.1, users: 72 }
  ];

  return (
    <div className="bg-gray-800 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Growing Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of traders who trust BlockchainTrade Solutions for their digital asset trading needs.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-gray-400 mb-2">Monthly Trading Volume</h3>
              <div className="text-3xl font-bold text-white">$1.2B+</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-gray-400 mb-2">Active Traders</h3>
              <div className="text-3xl font-bold text-white">50,000+</div>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={tradingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="month" 
                  stroke="#9CA3AF"
                />
                <YAxis 
                  stroke="#9CA3AF"
                  label={{ 
                    value: 'Volume (Billions $)', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { fill: '#9CA3AF' }
                  }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;