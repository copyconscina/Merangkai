import React from 'react';
import Layout from '../components/Layout';

const Services: React.FC = () => {
  const services = [
    {
      title: "Mindful Experiences",
      description: "Engage with curated sessions designed to foster awareness, presence, and emotional clarity.",
    },
    {
      title: "Artistic Expression",
      description: "Explore creative tools and resources that encourage self-expression and personal growth.",
    },
    {
      title: "Inner Reflection",
      description: "Dive into thoughtful content and practices that guide you inward for deeper understanding.",
    },
  ];

  return (
    <Layout>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-4xl text-white mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300">
                <h3 className="font-cinzel text-2xl text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
