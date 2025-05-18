import { motion } from 'framer-motion';

const skills = [
  { name: 'Data Science' },
  { name: 'Machine Learning' },
  { name: 'NLP' },
  { name: 'MERN Stack' },
  { name: 'Explainable AI' },
  { name: 'Flask' },
  { name: 'Git & GitHub' },
  { name: 'Python' },
  { name: 'Java' },
  { name: 'C' },
  { name: 'CPP' },
  { name: 'Data Visualization' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border-2 border-blue-500 bg-transparent rounded-2xl p-6 shadow-md text-center transition-all duration-300 transform hover:scale-125 hover:border-purple-500 hover:text-white hover:rounded-lg hover:border-dotted"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="text-xl font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

