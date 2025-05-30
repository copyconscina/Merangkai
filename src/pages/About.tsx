import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="font-cinzel text-4xl text-white text-center">About Merangkai</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Merangkai is more than just a brand — it's a journey toward inner peace and mindful living.
            Inspired by nature, artistry, and the quiet moments that shape us, we create spaces where reflection and growth thrive.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether through curated content, guided experiences, or intentional design, Merangkai invites you to slow down,
            reconnect, and cultivate the garden within.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
