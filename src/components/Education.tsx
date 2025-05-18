import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react'; // Icon for education

const educationData = [
  {
    degree: 'B.Tech in CSE',
    duration: '2021 – Present',
    institution: 'SRM University – AP',
     board : 'BoS',
    score: 'CGPA: 9.24 / 10',
  },
  {
    degree: 'Intermediate - MPC',
    duration: '2019 – 2021',
    institution: 'Sri Viswasanthi Institutes',
     board : 'BIEAP',
    score: 'Score: 941 / 1000',
  },
  {
    degree: 'Secondary School Certificate',
    duration: '2017 – 2019',
    institution: 'Sri Chaitanya Techno School',
    board : 'BSEAP',
    score: 'Score: 600 / 600',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-00">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-00 rounded-xl p-6 flex items-start gap-4 shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <BookOpen size={40} className="text-violet-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-l font-semibold text-white">{edu.degree}</h3>
                <p className="text-gray-400 text-sm">{edu.duration}</p>
                <p className="text-gray-300 font-medium mt-1">{edu.institution}</p>
                <p className="text-gray-300 font-medium mt-1">Board : {edu.board}</p>
                <p className="text-gray-200 italic text-sm mt-1">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
