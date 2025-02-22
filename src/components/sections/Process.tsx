import React, { useState, useEffect } from 'react';
import { Package, Truck, BarChart2, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Package,
      title: "Connect Your Supply Chain",
      description: "Easily integrate your existing systems and data sources with our platform through our secure API and pre-built connectors.",
      detail: "Setup takes less than 24 hours"
    },
    {
      icon: BarChart2,
      title: "AI Analysis & Optimization",
      description: "Our AI algorithms analyze your data to identify inefficiencies and generate optimization strategies for your entire supply chain.",
      detail: "Continuous real-time optimization"
    },
    {
      icon: Truck,
      title: "Implement & Track",
      description: "Execute optimized logistics strategies while tracking performance in real-time through our comprehensive dashboard.",
      detail: "25% average cost reduction"
    },
    {
      icon: CheckCircle,
      title: "Measure & Improve",
      description: "Monitor KPIs and leverage our analytics to continuously improve your supply chain performance.",
      detail: "Weekly improvement reports"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How SmartLogistics Hub Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your supply chain in four simple steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative ${
                    index === activeStep
                      ? 'transform scale-105 transition-transform duration-300'
                      : ''
                  }`}
                >
                  <div className="h-1 bg-gray-200 absolute top-8 left-1/2 w-full hidden md:block" />
                  <div className={`
                    relative bg-white rounded-xl p-6 text-center
                    transition-all duration-300
                    ${index === activeStep ? 'shadow-xl' : 'shadow'}
                  `}>
                    <div className={`
                      h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center
                      ${index === activeStep ? 'bg-blue-600' : 'bg-gray-100'}
                      transition-colors duration-300
                    `}>
                      <Icon className={`h-8 w-8 ${
                        index === activeStep ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {step.description}
                    </p>
                    <span className="text-blue-600 text-sm font-medium">
                      {step.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeStep ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;