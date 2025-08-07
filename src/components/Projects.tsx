import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import saimage from './sa.png'
import os from './os.png'
import crw from './crw.png'

const projects = [
 {
    title: 'Telugu Sentiment Analysis Dataset',
    description: 'Benchmarked large-scale sentiment dataset with custom transformer fine-tuning and XAI tools like LIME & SHAP.',
    image: saimage,
    technologies: ['Python', 'XLM-R', 'IndicBERT', 'XAI'],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/' // If exists
    }
  },
  {
    title: 'StatAnveshak',
    description: 'AI-powered web platform for statistical learning and analysis with interactive visualizations and ML integration.',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['MERN', 'D3.js', 'ML', 'Flask'],
    links: {
      demo: 'https://statistics-anveshana.vercel.app/', // Replace with actual link
      github: 'https://github.com/Samanthapudi-Shakeer/Statistics-Anveshana' // Example
    }
  },
  {
    title: 'EduFeed Sense',
    description: 'Feedback sentiment analysis system using NLP models like Transformers, VADER, and TextBlob with a dashboard.',
    image: 'https://images.pexels.com/photos/7647959/pexels-photo-7647959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flask', 'Transformers', 'NLP', 'Chart.js'],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/EDUFEEDSENSE'
    }
  },
  {
  title: 'Osutilia - System Monitoring',
  description: 'A dynamic system monitoring tool with a user-friendly web interface to visualize real-time CPU, memory, disk, network, and user activity. Built for simplicity and performance insight.',
  image: os, // Replace with actual screenshot URL if needed
  technologies: ['Flask', 'psutil', 'HTML', 'CSS', 'JavaScript'],
  links: {
    demo: 'https://osutilia.onrender.com/', // 
    github: 'https://github.com/Samanthapudi-Shakeer/Osutilia'
  }
},
  {
    title: 'Expenalyzia',
    description: 'A dynamic Flask-based expense tracker that allows users to add, edit, and delete expenses with full log history. Advanced filtering by category, date, or person, and real-time visualizations using interactive Pie and Bar charts.',
    image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flask', 'JavaScript', 'HTML', "CSS"],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/Expenalyzia'
    }
  },
  {
    title: 'Empathy Exchange',
    description: 'A crowdfunding platform that enables users to create empathetic campaigns, share personal stories, and support others through donations. Features include multimedia storytelling, community interaction, and admin moderation.',
    image: crw,
    technologies: ['HTML', 'PHP', 'CSS', "JavaScript"],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/EMPATHY-EXCHANGE-CROWDFUNDING-PLATFORM'
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-00">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-00 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-900 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                
                  <a 
                    href={project.links.github}
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
                  >
                    <Github size={20} />
                    <span>Source</span>
                  </a>
                </div>
     
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

