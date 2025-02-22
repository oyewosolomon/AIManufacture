import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, AlertCircle } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small manufacturing operations",
      price: isAnnual ? 999 : 1299,
      features: [
        "Up to 50 production lines",
        "Real-time monitoring",
        "Basic analytics",
        "Email support",
        "99.9% uptime SLA",
        "Basic AI predictions"
      ],
      highlight: false
    },
    {
      name: "Professional",
      description: "Ideal for growing manufacturers",
      price: isAnnual ? 2499 : 2999,
      features: [
        "Up to 250 production lines",
        "Advanced real-time monitoring",
        "Full analytics suite",
        "24/7 priority support",
        "99.99% uptime SLA",
        "Advanced AI predictions",
        "Custom integrations",
        "Team training"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      price: "Custom",
      features: [
        "Unlimited production lines",
        "Enterprise-grade monitoring",
        "Custom analytics",
        "Dedicated support team",
        "99.999% uptime SLA",
        "Custom AI models",
        "Full API access",
        "On-site training",
        "Custom development"
      ],
      highlight: false
    }
  ];

  return (
    <div className="bg-gray-50 py-24" id='pricing'>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your manufacturing needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-blue-600 rounded-full p-1 transition-colors"
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 0 }}
                className="w-6 h-6 bg-white rounded-full"
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annually
              <span className="ml-2 text-sm text-green-500">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`
                relative rounded-2xl p-8 
                ${plan.highlight 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' 
                  : 'bg-white text-gray-900 shadow-lg'
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                {typeof plan.price === 'number' ? (
                  <>
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold">{plan.price}</span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-full py-3 rounded-lg font-semibold mb-8 transition-colors
                  ${plan.highlight 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }
                `}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </motion.button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-blue-100' : 'text-blue-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <HelpCircle className="w-5 h-5" />
            <span>Frequently Asked Questions</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;