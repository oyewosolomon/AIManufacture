import React, { useState } from 'react';
import {
  UserPlus,
  Shield,
  Wallet,
  LineChart,
  ArrowRight,
  CheckCircle,
  Play,
  Clock,
  BookOpen,
  Download,
  Smartphone
} from 'lucide-react';

const GettingStartedGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Create Your Account',
      icon: <UserPlus className="w-6 h-6" />,
      duration: '5 minutes',
      description: 'Sign up and secure your trading account',
      subSteps: [
        'Fill in your basic information',
        'Choose a strong password',
        'Enable two-factor authentication'
      ],
      cta: 'Create Account',
      ctaLink: '#signup'
    },
    {
      title: 'Verify Your Identity',
      icon: <Shield className="w-6 h-6" />,
      duration: '10 minutes',
      description: 'Complete KYC verification to unlock full trading features',
      subSteps: [
        'Prepare valid government ID',
        'Take a clear photo of your documents',
        'Complete facial verification'
      ],
      cta: 'Start Verification',
      ctaLink: '#verify'
    },
    {
      title: 'Fund Your Account',
      icon: <Wallet className="w-6 h-6" />,
      duration: '15 minutes',
      description: 'Add funds to start trading cryptocurrencies',
      subSteps: [
        'Choose your preferred deposit method',
        'Follow the deposit instructions',
        'Wait for confirmation'
      ],
      cta: 'Deposit Funds',
      ctaLink: '#deposit'
    },
    {
      title: 'Start Trading',
      icon: <LineChart className="w-6 h-6" />,
      duration: 'Ready to go',
      description: 'Execute your first trade on our platform',
      subSteps: [
        'Select a trading pair',
        'Analyze the market',
        'Place your first order'
      ],
      cta: 'Begin Trading',
      ctaLink: '#trade'
    }
  ];

  const resources = [
    {
      title: 'Trading Guides',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Learn the basics of cryptocurrency trading',
      link: '#guides'
    },
    {
      title: 'Mobile App',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Trade on the go with our mobile application',
      link: '#app'
    },
    {
      title: 'Video Tutorials',
      icon: <Play className="w-6 h-6" />,
      description: 'Watch step-by-step platform tutorials',
      link: '#tutorials'
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Trading Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Follow our simple guide to begin trading cryptocurrencies on BlockchainTrade Solutions.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative"
              >
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                    index <= activeStep
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {index < activeStep ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    step.icon
                  )}
                </button>
                <span className="text-sm font-medium text-gray-400">
                  Step {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-6 left-12 w-[calc(100%-48px)] h-[2px] transition-all ${
                      index < activeStep ? 'bg-blue-500' : 'bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-400">
                  {steps[activeStep].description}
                </p>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span>{steps[activeStep].duration}</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {steps[activeStep].subSteps.map((subStep, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-700 rounded-lg p-4"
                >
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-300">{index + 1}</span>
                  </div>
                  <span className="text-gray-300">{subStep}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeStep > 0
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Previous Step
              </button>
              <button
                onClick={() => activeStep < steps.length - 1 && setActiveStep(activeStep + 1)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center"
              >
                {steps[activeStep].cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mr-4">
                    {resource.icon}
                  </div>
                  <h4 className="text-lg font-medium text-white">
                    {resource.title}
                  </h4>
                </div>
                <p className="text-gray-400">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Help Box */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gray-800 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium mb-2">Need Help Getting Started?</h4>
              <p className="text-gray-400">Our support team is available 24/7 to assist you</p>
            </div>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedGuide;