'use client';

import { useState } from 'react';
import { Bot, Zap, BookOpen, Code, Wrench, MessageCircle } from 'lucide-react';
import PaymentModal from './PaymentModal';

const services = [
  {
    id: 'custom-gpt',
    icon: Bot,
    title: 'Custom GPT Development',
    description: 'Create powerful, domain-specific AI models tailored to your business requirements',
    features: ['Domain-specific training', 'API integration', 'Custom responses', 'Continuous learning'],
    price: 'Starting at $2,999'
  },
  {
    id: 'chatbot',
    icon: MessageCircle,
    title: 'AI Chatbot Solutions',
    description: 'Intelligent conversational agents that enhance customer experience and support',
    features: ['24/7 availability', 'Multi-language support', 'Integration ready', 'Analytics dashboard'],
    price: 'Starting at $1,499'
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'AI Automation with Make & n8n',
    description: 'Streamline workflows and automate repetitive tasks with advanced AI integrations',
    features: ['Workflow optimization', 'API connections', 'Data processing', 'Real-time monitoring'],
    price: 'Starting at $999'
  },
  {
    id: 'education',
    icon: BookOpen,
    title: 'AI Education & Training',
    description: 'Comprehensive courses and workshops on AI implementation and automation',
    features: ['Hands-on workshops', 'Certification programs', 'One-on-one mentoring', 'Resource library'],
    price: 'Starting at $199'
  },
  {
    id: 'custom-dev',
    icon: Code,
    title: 'Custom AI Development',
    description: 'End-to-end AI solution development from concept to deployment',
    features: ['Full-stack development', 'Cloud deployment', 'Maintenance & support', 'Performance optimization'],
    price: 'Custom quote'
  },
  {
    id: 'consulting',
    icon: Wrench,
    title: 'AI Consulting & Strategy',
    description: 'Expert guidance on AI adoption and digital transformation strategies',
    features: ['Strategy planning', 'Technology assessment', 'Implementation roadmap', 'ROI analysis'],
    price: 'Starting at $500'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handlePurchase = (service) => {
    setSelectedService(service);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our AI <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{service.price}</span>
                <button 
                  onClick={() => handlePurchase(service)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <PaymentModal
      isOpen={isPaymentModalOpen}
      onClose={() => setIsPaymentModalOpen(false)}
      service={selectedService}
    />
    </>
  );
}