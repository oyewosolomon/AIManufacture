import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
  Book,
  Users,
  BarChart2,
  MessageSquare,
  Settings,
  LucideIcon
} from 'lucide-react';

interface DropdownItem {
  icon: LucideIcon;
  label: string;
  description: string;
  link: string; // Added link property
}

interface NavItem {
  label: string;
  link?: string; // Added link property for top-level items
  dropdownItems?: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'Products',
      link: '/products', // Added link for top-level item
      dropdownItems: [
        { icon: Settings, label: 'Platform Overview', description: 'Our complete AI manufacturing solution', link: '/products/platform-overview' },
        { icon: BarChart2, label: 'Analytics Suite', description: 'Deep insights into your operations', link: '/products/analytics-suite' },
        { icon: Globe, label: 'Global Control', description: 'Manage worldwide facilities', link: '/products/global-control' },
        { icon: Book, label: 'Documentation', description: 'Technical guides and API docs', link: '/products/documentation' }
      ]
    },
    {
      label: 'Solutions',
      link: '/solutions', // Added link for top-level item
      dropdownItems: [
        { icon: Users, label: 'Enterprise', description: 'For large-scale operations', link: '/solutions/enterprise' },
        { icon: Settings, label: 'Small Business', description: 'Right-sized for growth', link: '/solutions/small-business' },
        { icon: Globe, label: 'Industries', description: 'Sector-specific solutions', link: '/solutions/industries' }
      ]
    },
    { label: 'Pricing', link: '/#pricing' }, // Added link for top-level item
    { label: 'Resources', link: '/#resources' } // Added link for top-level item
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex gap-3"
          >
        <svg fill={`${isScrolled?'#000000':'#ffffff'}`} width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M31.943 15.016c-0.505-8.344-7.407-14.953-15.86-15.005h-0.187c-2.989 0.020-5.781 0.849-8.167 2.296-2.203 1.329-4.057 3.177-5.401 5.376-1.312 2.156-2.131 4.651-2.297 7.323-0.020 0.328-0.031 0.656-0.031 0.995 0 0.333 0.016 0.667 0.031 0.995 0.167 2.672 0.98 5.161 2.297 7.317 1.333 2.199 3.183 4.043 5.369 5.381 2.396 1.432 5.193 2.271 8.172 2.291h0.24c8.459-0.057 15.328-6.651 15.855-14.984 0.015-0.323 0.041-0.661 0.041-0.979 0-0.324 0-0.661-0.027-0.98l-0.031-0.031zM16.005 20.855v5.104c0.125 3.12-0.76 3.64-1.828 3.687-0.047 0-0.089 0.005-0.136 0.005-6.072-0.859-10.875-5.672-11.713-11.76-0.083-0.62-0.131-1.251-0.131-1.896 0-0.64 0.048-1.271 0.131-1.891 0.833-6.077 5.625-10.891 11.699-11.76l0.151 0.016c1.068 0.056 1.953 0.572 1.828 3.681v5.104c-0.016 2.1 1.192 4.1 2.473 4.855-1.281 0.749-2.489 2.5-2.473 4.849z"></path> </g></svg>
            <a href="/" className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              AIManufacture Pro
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.link || '#'} // Added href for top-level item
                  className={`flex items-center gap-1 font-medium ${
                    isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.label}
                  {item.dropdownItems && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.dropdownItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl py-2 mt-2"
                    >
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.link} // Added href for dropdown items
                          className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50"
                        >
                          <dropdownItem.icon className="w-5 h-5 text-blue-600 mt-1" />
                          <div>
                            <div className="font-medium text-gray-900">{dropdownItem.label}</div>
                            <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              <Search className={isScrolled ? 'text-gray-900' : 'text-white'} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/signin" // Added href for Sign In
              className={`px-4 py-2 rounded-lg font-medium ${
                isScrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/get-started" // Added href for Get Started
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => (
                <div key={index} className="py-2">
                  <a 
                    href={item.link || '#'} // Added href for top-level item
                    className="flex items-center justify-between w-full font-medium text-gray-900"
                    onClick={() => setActiveDropdown(
                      activeDropdown === item.label ? null : item.label
                    )}
                  >
                    {item.label}
                    {item.dropdownItems && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </a>

                  {/* Mobile dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.label && item.dropdownItems && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-4 space-y-2"
                      >
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <a
                            key={idx}
                            href={dropdownItem.link} // Added href for dropdown items
                            className="flex items-center gap-3 py-2 text-gray-600 hover:text-blue-600"
                          >
                            <dropdownItem.icon className="w-5 h-5" />
                            <span>{dropdownItem.label}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile buttons */}
              <div className="mt-4 space-y-2">
                <a href="/signin" className="w-full py-2 text-gray-900 font-medium hover:bg-gray-50 rounded-lg block text-center">
                  Sign In
                </a>
                <a href="/get-started" className="w-full py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg block text-center">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-start justify-center pt-24"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl mx-4 bg-white rounded-xl shadow-2xl"
            >
              <div className="flex items-center p-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search everything..."
                  className="w-full bg-transparent focus:outline-none text-lg"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;