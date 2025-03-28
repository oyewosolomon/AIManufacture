import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const navigation = {
    product: [
      'Features',
      'Solutions',
      'Pricing',
      'Case Studies',
      'Documentation'
    ],
    company: [
      'About Us',
      'Careers',
      'Press',
      'News',
      'Contact',
      'Partners'
    ],
    resources: [
      'Blog',
      'Guides',
      'Webinars',
      'Events',
      'Training',
      'Support'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance',
      'Security'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AIManufacture Pro</h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing manufacturing with AI-powered solutions for 
              increased efficiency, reduced costs, and smarter operations.
            </p>
            <div className="space-y-4">
            
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigation).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AIManufacture Pro. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;