import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Building2, Users, TrendingUp, DollarSign, Icon } from 'lucide-react';

// Define types for the data structure
type Result = {
  costReduction: string;
  spaceOptimized: string;
  employeeSatisfaction: string;
  roi: string;
};

type OccupancyData = {
  month: string;
  before: number;
  after: number;
};

type CaseStudy = {
  company: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: Result;
  occupancyData: OccupancyData[];
};

// Props for the ResultCard component
type ResultCardProps = {
  icon: React.ComponentType<{ className?: string }>; 
  label: string;
  value: string;
};

const ResultCard: React.FC<ResultCardProps> = ({ icon: Icon, label, value }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
    <Icon className="w-8 h-8 text-blue-500 mb-4" />
    <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<number>(0);

  const caseStudies: CaseStudy[] = [
    {
      company: "Global Tech Solutions",
      industry: "Technology",
      location: "Multiple locations across US",
      challenge: "Managing rapid growth across 15 office locations with inconsistent space utilization",
      solution: "Implemented SpaceOptimize's multi-location tracking and optimization platform",
      results: {
        costReduction: "35%",
        spaceOptimized: "250,000 sq ft",
        employeeSatisfaction: "92%",
        roi: "425%"
      },
      occupancyData: [
        { month: 'Jan', before: 45, after: 82 },
        { month: 'Feb', before: 48, after: 85 },
        { month: 'Mar', before: 42, after: 88 },
        { month: 'Apr', before: 46, after: 86 },
        { month: 'May', before: 43, after: 89 },
        { month: 'Jun', before: 45, after: 92 }
      ]
    },
    {
      company: "Financial Express",
      industry: "Finance",
      location: "New York, London, Singapore",
      challenge: "High real estate costs with low space utilization in premium locations",
      solution: "Deployed AI-powered space optimization and hybrid work scheduling",
      results: {
        costReduction: "42%",
        spaceOptimized: "180,000 sq ft",
        employeeSatisfaction: "88%",
        roi: "380%"
      },
      occupancyData: [
        { month: 'Jan', before: 40, after: 78 },
        { month: 'Feb', before: 42, after: 82 },
        { month: 'Mar', before: 38, after: 85 },
        { month: 'Apr', before: 41, after: 88 },
        { month: 'May', before: 39, after: 86 },
        { month: 'Jun', before: 40, after: 89 }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how leading companies transformed their workspace efficiency with SpaceOptimize
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Case Study Navigation */}
          <div className="lg:w-1/3">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg mb-4 cursor-pointer transition-all ${
                  activeCase === index 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white hover:bg-blue-50'
                }`}
                onClick={() => setActiveCase(index)}
              >
                <h3 className={`text-xl font-semibold mb-2 ${
                  activeCase === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {study.company}
                </h3>
                <p className={activeCase === index ? 'text-blue-100' : 'text-gray-600'}>
                  {study.industry} • {study.location}
                </p>
              </div>
            ))}
          </div>

          {/* Case Study Details */}
          <div className="lg:w-2/3 bg-white rounded-xl p-8 shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Challenge
              </h3>
              <p className="text-gray-600 text-lg">
                {caseStudies[activeCase].challenge}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solution
              </h3>
              <p className="text-gray-600 text-lg">
                {caseStudies[activeCase].solution}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Results
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <ResultCard 
                  icon={DollarSign}
                  label="Cost Reduction"
                  value={caseStudies[activeCase].results.costReduction}
                />
                <ResultCard 
                  icon={Building2}
                  label="Space Optimized"
                  value={caseStudies[activeCase].results.spaceOptimized}
                />
                <ResultCard 
                  icon={Users}
                  label="Employee Satisfaction"
                  value={caseStudies[activeCase].results.employeeSatisfaction}
                />
                <ResultCard 
                  icon={TrendingUp}
                  label="ROI"
                  value={caseStudies[activeCase].results.roi}
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Space Utilization Improvement
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={caseStudies[activeCase].occupancyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="before" 
                      stroke="#94a3b8" 
                      name="Before SpaceOptimize"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="after" 
                      stroke="#3b82f6" 
                      name="After SpaceOptimize"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;