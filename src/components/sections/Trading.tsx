import React, { useState } from 'react';
import { Search, Star, TrendingUp, TrendingDown } from 'lucide-react';

const TradingPairsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const tradingPairs = [
    { pair: 'BTC/USDT', price: '45,234.21', change: '+2.45', volume: '234.5M', favorite: true },
    { pair: 'ETH/USDT', price: '2,845.67', change: '+3.12', volume: '156.7M', favorite: true },
    { pair: 'BNB/USDT', price: '312.45', change: '-1.23', volume: '89.3M', favorite: false },
    { pair: 'SOL/USDT', price: '98.76', change: '+5.67', volume: '67.8M', favorite: false },
    { pair: 'ADA/USDT', price: '1.23', change: '-0.45', volume: '45.2M', favorite: false },
    { pair: 'DOT/USDT', price: '15.67', change: '+1.89', volume: '34.5M', favorite: false },
  ];

  const filteredPairs = tradingPairs.filter(pair =>
    pair.pair.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
            Popular Markets
          </h2>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search pairs..."
              className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Pair</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">24h Change</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">24h Volume</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Trade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredPairs.map((pair, index) => (
                  <tr key={index} className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star
                          className={`w-4 h-4 mr-2 ${
                            pair.favorite ? 'text-yellow-400 fill-current' : 'text-gray-500'
                          }`}
                        />
                        <span className="text-white font-medium">{pair.pair}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <span className="text-white font-medium">${pair.price}</span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end">
                        {pair.change.startsWith('+') ? (
                          <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                        )}
                        <span className={pair.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                          {pair.change}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <span className="text-gray-300">${pair.volume}</span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <button className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPairsSection;