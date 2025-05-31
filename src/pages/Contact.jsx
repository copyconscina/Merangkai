import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400">Email</p>
              <p className="mt-1 text-lg">hello@merangkai.com</p>
              <p className="mt-4 text-gray-400">Location</p>
              <p className="mt-1 text-lg">San Francisco, CA</p>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-gray-900 border border-gray-700 p-3 focus:outline-none focus:border-orange-400" />
              <input type="email" placeholder="Your Email" className="w-full bg-gray-900 border border-gray-700 p-3 focus:outline-none focus:border-orange-400" />
              <textarea rows={4} placeholder="Message" className="w-full bg-gray-900 border border-gray-700 p-3 focus:outline-none focus:border-orange-400"></textarea>
              <button type="submit" className="px-6 py-3 bg-orange-500 text-black font-medium rounded-full hover:bg-orange-400 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
