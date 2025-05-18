'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default to control flow
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 20000);

    // Open mail client manually
    const form = e.target;
    const name = form.Name.value;
    const email = form.Email.value;
    const message = form.Message.value;

    window.location.href = `mailto:shakeer.samanthapudi@gmail.com?subject=Message from ${name}&body=${message} (${email})`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'shakeer.samanthapudi@gmail.com' },
                { icon: Phone, label: 'Phone', value: '91+ 8688814287' },
                { icon: MapPin, label: 'Location', value: 'Vijayawada, Andhra Pradesh, India' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              {[
                { icon: Github, href: 'https://github.com/Samanthapudi-Shakeer/Samanthapudi-Shakeer' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shakeer-samanthapudi/' },
                {icon: Mail,href: 'mailto:shakeer.samanthapudi@gmail.com/'}
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-blue-500 hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    required
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    required
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="Message"
                    required
                    rows={4}
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <CheckCircle size={48} className="text-green-500" />
                <p className="text-white text-lg font-semibold">Message Sent Successfully!</p>
                <p className="text-gray-400">
                  If I haven't responded within 2 days, feel free to ping me on{' '}
                  <a
                    href="https://www.linkedin.com/in/shakeer-samanthapudi/"
                    className="text-blue-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

