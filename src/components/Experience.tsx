import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Artificial Intelligence & Machine Learning Intern',
    company: 'Toshiba Software India Private Limited',
    period: 'Jun 2025 – Present',
    location: 'Bengaluru, Karnataka, India',
    mode: 'On-site',
    description: 'Worked alongside senior Japanese R&D engineers on ResNet x MobileNet-based object detection. Developed a ResNet object detection model, real-time intrusion detection, an advanced RAG chatbot for internal HR/QMS/FAQs, a digitalized project plan portal with analytics, an AI-enhanced translator service, and a Process Compliance Index audit agent.',
    technologies: ['ResNet', 'MobileNet', 'Object Detection', 'RAG', 'Analytics']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Freelance / Open Source / Personal',
    period: '2022 – Present',
    description: 'Designed and developed full-stack applications including StatAnveshak, EduFeed Sense, Osutilia, Expenalyzia, and Empathy Exchange. Integrated ML models into web apps using Flask APIs and built dynamic data visualizations.',
    technologies: ['MERN', 'Flask', 'D3.js', 'MongoDB', 'Machine Learning']
  },
  {
    title: 'Machine Learning Research Intern',
    company: 'SRM University – AP',
    period: 'Jun 2023 – Jun 2025',
    description: 'Focused on Dravidian-language sentiment analysis with Explainable AI. Fine-tuned transformer models, built hyperparameter-optimized NLP models, and applied LIME and SHAP for interpretability and bias mitigation.',
    technologies: ['Python', 'Transformers', 'LIME', 'SHAP', 'Dravidian NLP']
  },
  {
    title: 'Co-Convener & Event Organizer',
    company: 'Coding Club – SRM University',
    period: 'Sep 2023 – Aug 2024',
    description: 'Led 10+ technical events including hackathons and coding competitions. Mentored junior developers, increased club engagement, and managed event logistics for over 500+ student participants.',
    technologies: ['Leadership', 'Event Planning', 'Mentorship', 'GitHub']
  },
  {
    title: 'Summer Intern',
    company: 'KCP Sugar and Industries Corporation – Vuyyuru',
    period: 'Jan 2024 – Feb 2024',
    description: 'Worked with the IT team on SAP-based network and system management. Gained hands-on experience with ABAP programming, ERP workflows, weighbridge integrations, pay-bill workflows, and time-series forecasting for sugar sales.',
    technologies: ['SAP', 'ABAP', 'ERP', 'Networking', 'Time-Series Forecasting']
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

