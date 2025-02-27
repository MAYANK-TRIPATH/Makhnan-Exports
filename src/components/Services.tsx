import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; 
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
      <div className="p-6">
        <div className="text-4xl mb-4 text-indigo-600">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};


const Services: React.FC = () => {
  const services = [
    {
      title: 'Export',
      description: 'We specialize in exporting high-quality Makhana to customers worldwide, ensuring timely delivery and premium packaging.',
      icon: '📤', 
    },
    {
      title: 'Import',
      description: 'Our import services bring the finest Makhana from global sources to your doorstep, maintaining the highest standards of quality.',
      icon: '📥',
    },
    {
      title: 'Transport',
      description: 'Efficient and reliable transportation services for Makhana, ensuring it reaches its destination in perfect condition.',
      icon: '🚚', 
    },
    {
      title: 'Transport',
      description: 'Efficient and reliable transportation services for Makhana, ensuring it reaches its destination in perfect condition.',
      icon: '🚚', 
    },
  ];

  return (
    <div className="py-12 bg-[#d0cccc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;