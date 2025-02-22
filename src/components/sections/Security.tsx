import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Server,
  Key,
  Users,
  Bell,
  Eye,
  FileCheck,
  ChevronDown,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

// Define types for the security features
type Feature = {
  title: string;
  description: string;
  status: string;
};

type SecurityFeature = {
  title: string;
  icon: JSX.Element;
  description: string;
  features: Feature[];
};

type SecurityFeatures = {
  [key: string]: SecurityFeature;
};

const SecuritySection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('assets');

  const securityFeatures: SecurityFeatures = {
    assets: {
      title: "Asset Security",
      icon: <Shield className="w-8 h-8" />,
      description: "Multi-layered protection for your digital assets",
      features: [
        {
          title: "Cold Storage",
          description: "95% of user assets stored in air-gapped cold wallets with multi-signature technology",
          status: "Active"
        },
        {
          title: "Insurance Coverage",
          description: "$375M insurance policy covering digital assets against theft or security breaches",
          status: "Active"
        },
        {
          title: "Multi-Signature Wallets",
          description: "Required multiple approvals for withdrawals above security thresholds",
          status: "Active"
        }
      ]
    },
    access: {
      title: "Access Security",
      icon: <Lock className="w-8 h-8" />,
      description: "Advanced authentication and access control",
      features: [
        {
          title: "Two-Factor Authentication",
          description: "Mandatory 2FA for all accounts with support for hardware security keys",
          status: "Required"
        },
        {
          title: "IP Whitelisting",
          description: "Restrict account access to trusted IP addresses",
          status: "Optional"
        },
        {
          title: "Anti-Phishing Code",
          description: "Unique personal code to verify authentic BlockchainTrade emails",
          status: "Optional"
        }
      ]
    },
    infrastructure: {
      title: "Infrastructure Security",
      icon: <Server className="w-8 h-8" />,
      description: "Enterprise-grade system security",
      features: [
        {
          title: "DDoS Protection",
          description: "Advanced mitigation systems preventing service disruption",
          status: "Active"
        },
        {
          title: "24/7 Monitoring",
          description: "Real-time system monitoring with automated threat detection",
          status: "Active"
        },
        {
          title: "Penetration Testing",
          description: "Regular security audits by leading cybersecurity firms",
          status: "Quarterly"
        }
      ]
    },
    compliance: {
      title: "Compliance & Licensing",
      icon: <FileCheck className="w-8 h-8" />,
      description: "Regulatory compliance and certifications",
      features: [
        {
          title: "ISO 27001 Certified",
          description: "International standard for information security management",
          status: "Certified"
        },
        {
          title: "AML Compliance",
          description: "Robust anti-money laundering protocols and monitoring",
          status: "Active"
        },
        {
          title: "Regular Audits",
          description: "Independent third-party security and financial audits",
          status: "Quarterly"
        }
      ]
    }
  };

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Bank-Grade Security</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Enterprise-Level Security Infrastructure
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your assets are protected by multiple layers of security, backed by industry-leading technology and insurance coverage.
          </p>
        </div>

        {/* Security Status Dashboard */}
        <div className="bg-gray-800 rounded-xl p-6 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-xl font-semibold">Security Status</h3>
            <div className="flex items-center">
              <span className="inline-flex items-center px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                All Systems Operational
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.entries(securityFeatures).map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setActiveFeature(key)}
                className={`p-4 rounded-lg transition-all ${
                  activeFeature === key
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center">
                  {feature.icon}
                  <span className="ml-3">{feature.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Feature Details */}
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {securityFeatures[activeFeature].features.map((feature, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {feature.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Account Security Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <Key className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-2">Use Strong Passwords</h4>
                  <p className="text-gray-400">Create unique, complex passwords with a mix of characters, numbers, and symbols.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Bell className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-2">Enable All Security Features</h4>
                  <p className="text-gray-400">Activate 2FA, email notifications, and IP whitelisting for maximum security.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-2">Monitor Account Activity</h4>
                  <p className="text-gray-400">Regularly review login history and account activity for suspicious behavior.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-blue-400 mr-3 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-2">Set Up Account Recovery</h4>
                  <p className="text-gray-400">Configure trusted devices and backup authentication methods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/10 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-400">
              If you notice any suspicious activity, contact our 24/7 security team immediately
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;