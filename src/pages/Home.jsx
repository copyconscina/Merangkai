import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="pt-32 pb-20 px-6 text-center"
    >
      <h1 className="font-cinzel text-4xl md:text-6xl mb-6 text-white">Cultivate Your Inner Garden</h1>
      <p className="text-lg text-gray-300 max-w-xl mx-auto">
        Merangkai offers curated experiences for mindfulness, growth, and self-discovery.
      </p>
      <Link
        to="/about"
        className="inline-block mt-8 px-6 py-3 rounded-full bg-orange-500 text-black font-medium shadow-lg hover:bg-orange-400 transition"
      >
        Learn More
      </Link>
    </motion.section>
  );
}
