// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
// import { useForm, ValidationError } from '@formspree/react'; // Uncomment if using Formspree

const Contact = () => {
  // Uncomment this section if you are using Formspree for submission
  // const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID"); // REPLACE WITH YOUR FORMSPREE FORM ID

  // if (state.succeeded) {
  //   return (
  //     <motion.section
  //       initial={{ opacity: 0, y: 50 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 1 }}
  //       className="container mx-auto px-4 py-8 max-w-xl text-center"
  //     >
  //       <h1 className="text-4xl font-serif mb-4 text-orange-400">Thank You!</h1>
  //       <p className="text-xl text-white">Your message has been sent successfully. We'll get back to you soon.</p>
  //       <p className="mt-8">
  //         <a href="/" className="text-blue-400 hover:underline">Return to Home</a>
  //       </p>
  //     </motion.section>
  //   );
  // }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-12 max-w-xl"
    >
      <h1 className="text-5xl font-serif text-center mb-12 text-orange-400">
        Reach Out to Us
      </h1>
      <p className="text-lg text-center mb-16 text-gray-300">
        We'd love to hear from you. Whether you have a question, feedback, or just want to connect, please use the form below.
      </p>

      {/* Formspree form structure (uncomment handleSubmit and relevant parts if using Formspree) */}
      <form
        // onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-xl"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-white text-lg font-semibold mb-3">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="shadow appearance-none border-none rounded w-full py-4 px-5 text-gray-200 leading-tight
                       focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
            placeholder="Your Full Name"
            required
          />
          {/* <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm italic mt-2" /> */}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-white text-lg font-semibold mb-3">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="shadow appearance-none border-none rounded w-full py-4 px-5 text-gray-200 leading-tight
                       focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400"
            placeholder="your.email@example.com"
            required
          />
          {/* <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm italic mt-2" /> */}
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-white text-lg font-semibold mb-3">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="shadow appearance-none border-none rounded w-full py-4 px-5 text-gray-200 leading-tight
                       focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400 resize-y"
            placeholder="Tell us about your thoughts or questions..."
            required
          ></textarea>
          {/* <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm italic mt-2" /> */}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            // disabled={state.submitting} // Uncomment if using Formspree
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg
                       focus:outline-none focus:shadow-outline transition-colors duration-300 shadow-md
                       transform hover:scale-105"
          >
            {/* {state.submitting ? 'Sending...' : 'Send Message'} Uncomment if using Formspree */}
            Send Message
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;