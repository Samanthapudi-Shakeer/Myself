import { motion } from 'framer-motion';
import {Heart, Code2 , BrainCircuit, FlaskConical, GraduationCap, LayoutDashboard } from 'lucide-react';

const features = [
 {
    icon: Heart,
    title: 'Data Science and Machine Learning Enthusiast',
    description: 'Passionate about leveraging data to solve complex problems through machine learning and statistical analysis. Always eager to learn and apply the latest techniques in data science.'
  },
  {
    icon: BrainCircuit,
    title: 'AI & NLP Researcher',
    description: 'Focusing on NLP, ML, and Explainable AI with fine-tuning Models and building sentiment analysis systems. Developed language datasets, applied XAI methods for model interpretability, and contributed to research in multilingual NLP and bias mitigation.'
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    description: 'Experience in building ML-powered web apps using MERN and Flask stacks'
  },
  {
    icon: GraduationCap,
    title: 'Academics',
    description: 'Final year B.Tech CSE at SRM AP with a CGPA of 9.24, multiple projects & publications'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Blurred Container Starts */}
        <motion.div
          className="p-8 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This is Shakeer Samanthapudi, a B.Tech Computer Science pursuing student with a strong focus on Artificial Intelligence & Machine Learning, Natural Language Processing, and Full-stack development. I have crafted impactful projects like StatAnveshak, EduFeed Sense, and Telugu sentiment datasets.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Either it's creating insightful data dashboards, optimizing machine learning pipelines, or organizing tech events, I'm driving by a passion for solving real-world problems through innovative software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Blurred Container Ends */}
      </div>
    </section>
  );
}

