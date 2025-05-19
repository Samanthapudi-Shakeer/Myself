import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react'; 

const achievementsData = [
  {
    title: 'Winners',
    description: 'Smart India Hackathon Internal 2024, SRM University',
  },
  {
    title: 'Runner-ups',
    description: 'Autonomous AI Hackathon 2025, Siddhartha Academy (VRSEC)',
  },
  {
    title: 'Qualifiers',
    description: 'L&T Techgium',
  },
  {
    title: 'Qualifiers',
    description: 'IIIT SriCity Healthcare Hackathon',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Achievements
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {achievementsData.map((ach, index) => (
            <motion.div
              key={index}
              className="bg-gray-00 rounded-xl p-6 flex items-center gap-4 shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <Trophy size={36} className="text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">{ach.title}</h3>
                <p className="text-gray-300">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
