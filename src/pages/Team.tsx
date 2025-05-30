import React from 'react';
import Layout from '../components/Layout';

const Team: React.FC = () => {
  const team = [
    { name: "Maya Tanaka", role: "Founder & Visionary" },
    { name: "Leo Moretti", role: "UX Designer" },
    { name: "Anya Patel", role: "AI Strategist" },
    { name: "Noah Jensen", role: "Data Architect" },
  ];

  return (
    <Layout>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-12">Meet the Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="space-y-2">
                <img
                  src={`https://placehold.co/300x300/121221/white?text= ${encodeURIComponent(member.name)}`}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <p className="text-sm font-medium text-white">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
