import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Globe,
  Clock
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'general',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('success');
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: "How quickly can we get started with SmartLogistics Hub?",
      answer: "Most clients are up and running within 24-48 hours. Our team handles the integration process, and we provide comprehensive onboarding support to ensure a smooth transition."
    },
    {
      question: "What types of systems can SmartLogistics Hub integrate with?",
      answer: "We support integration with all major ERP systems, warehouse management systems, and transportation management platforms. Our API is also available for custom integrations."
    },
    {
      question: "How do you ensure data security?",
      answer: "We maintain SOC 2 Type II compliance and use enterprise-grade encryption for all data. Our platform undergoes regular security audits and penetration testing."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support for all enterprise clients, with guaranteed response times of under 1 hour. Professional plan clients receive priority email and chat support during business hours."
    }
  ];

  return (
    <section className="py-20 bg-white" id='contact'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? Our team is here to help you get started
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="demo">Request Demo</option>
                  <option value="sales">Sales Question</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            {submitStatus === 'success' && (
              <Alert className="mt-4 bg-green-50 border border-green-200">
                <AlertDescription className="text-green-800">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <Phone className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600">24/7 for Enterprise</p>
                <p className="text-gray-600">Mon-Fri for Professional</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <MessageCircle className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600">Available 24/7</p>
                <p className="text-gray-600">Response in 5 minutes</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Globe className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Support</h3>
                <p className="text-gray-600">12 languages</p>
                <p className="text-gray-600">Local support teams</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <Clock className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                <p className="text-gray-600">1 hour for Enterprise</p>
                <p className="text-gray-600">4 hours for Professional</p>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;