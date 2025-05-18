import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Research Intern - NLP & XAI',
    company: 'SRM University, AP',
    period: 'Jun 2024 – Present',
    description: 'Conducting cutting-edge research in Natural Language Processing with a focus on sentiment analysis and explainable AI. Fine-tuned transformer models (XLM-R, IndicBERT) and integrated LIME/SHAP to improve model interpretability and fairness across linguistic datasets.',
    technologies: ['Python', 'Transformers', 'Hugging Face', 'LIME', 'SHAP']
  },
    {
    title: 'Summer Intern – SAP Systems',
    company: 'KCP Sugar & Industries Corp.',
    period: 'Jan 2024 – Feb 2024',
    description: 'Worked on enterprise SAP systems and ABAP development for ERP workflows. Collaborated with the IT department to enhance internal automation and streamline network-based configurations.',
    technologies: ['SAP', 'ABAP', 'Networking', 'ERP']
  },
  {
    title: 'Co-Convener & Event Organizer',
    company: 'Coding Club – SRM University',
    period: 'Sep 2023 – Aug 2024',
    description: 'Led 10+ technical events including hackathons and coding competitions. Mentored junior developers, increased club engagement, and managed event logistics for over 500+ student participants.',
    technologies: ['Leadership', 'Event Planning', 'Mentorship', 'GitHub']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Freelance / Open Source / Personal',
    period: '2022 – Present',
    description: 'Designed and developed full-stack applications including StatAnveshak, EduFeed Sense, and Expenalyzia. Integrated ML models into web apps using Flask APIs and built dynamic visualizations',
    technologies: ['MERN', 'Flask', 'D3.js', 'MongoDB', 'Machine Learning']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative pl-8 border-l-2 border-blue-500 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
              <div className="bg-gray-00 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <span className="text-blue-500">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-900 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

