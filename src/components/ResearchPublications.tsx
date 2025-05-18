import { motion } from 'framer-motion';
import { PenLine } from 'lucide-react';

const publications = [
  {
    title: 'Benchmarking Dataset for Dravidian Languages - Ongoing',
    status: '',
  },
  {
    title: 'Hatespeech Dataset for Telugu Language',
    status: '',
  },
  {
    title: 'Sentiment Analysis of Student’s and Parents’ Feedback for Educational Institutes',
    status: '',
  },
];

export default function ResearchPublications() {
  return (
    <section id="research" className="py-20 bg-gray-00">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Research Publications
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="bg-gray-00 rounded-xl p-6 flex items-center gap-4 shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <PenLine size={32} className="text-purple-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">{pub.title}</h3>
                {pub.status && <p className="text-gray-400 italic">{pub.status}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
