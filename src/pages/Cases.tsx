import React from 'react';
import Layout from '../components/Layout';

interface CaseProps {
  title: string;
  desc: string;
  img: string;
}

const CaseCard: React.FC<CaseProps> = ({ title, desc, img }) => {
  return (
    <div className="group overflow-hidden rounded-md border border-gray-800 hover:border-orange-400 transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-cinzel text-xl text-white mb-2">{title}</h3>
        <p className="text-gray-300">{desc}</p>
      </div>
    </div>
  );
};

const Cases: React.FC = () => {
  const cases = [
    {
      title: "Digital Sanctuary",
      desc: "An immersive web experience for daily mindfulness and breathwork guidance.",
      img: "https://placehold.co/800x600/121221/white?text=Digital+Sanctuary ",
    },
    {
      title: "Creative Resilience Toolkit",
      desc: "Interactive journaling and mood-tracking tools crafted to support emotional well-being.",
      img: "https://placehold.co/800x600/121221/white?text=Toolkit ",
    },
    {
      title: "AI Meditation Companion",
      desc: "An AI-driven wellness tool offering personalized reflection prompts.",
      img: "https://placehold.co/800x600/121221/white?text=AI+Companion ",
    },
  ];

  return (
    <Layout>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-12">Selected Journeys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cases.map((item, i) => (
              <CaseCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
