import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import saimage from './sa.png'
import os from './os.png'
import crw from './crw.png'

const projects = [
  {
    title: 'Benchmarking Datasets for Dravidian Sentiment Analysis',
    description: 'Developed large-scale Dravidian-language sentiment datasets, collected annotations, fine-tuned IndicBERT, XLM-R, and MuRIL models, scraped hate-speech data, and applied XAI for bias mitigation and interpretability.',
    image: saimage,
    technologies: ['Deep Learning', 'Machine Learning', 'NLP', 'XAI'],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/'
    }
  },
  {
    title: 'Agentic RAG Framework for Dravidian Language Hate Speech Detection',
    description: 'Developed an explainable, self-improving Agentic RAG framework for Telugu-English code-mixed hate speech detection that combines semantic retrieval, LLM reasoning, human review, and feedback-driven memory updates to achieve high accuracy without repeatedly retraining the underlying language model.',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Agentic RAG', 'LLM Reasoning', 'Human Review', 'Dravidian NLP'],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/'
    }
  },
  {
    title: 'AI-Powered Facial Recognition Emotion Analytics System',
    description: 'Built a real-time webcam-based attendance and emotion analytics system using FaceNet and a scratch CNN, with interval emotion tracking, consensus summaries, timestamps, and stored attendance-emotion metrics.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['CNN', 'FaceNet', 'OpenCV', 'FER+2K'],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/'
    }
  },
  {
    title: 'StatAnveshak',
    description: 'AI-driven analytics platform for statistical analysis, machine learning, D3.js visualizations, RAG-based chatbot QA, dynamic quizzes, learning resources, regression, classification, feature projections, and advanced statistical tests.',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['MERN', 'ML', 'D3.js', 'RAG'],
    links: {
      demo: 'https://statistics-anveshana.vercel.app/',
      github: 'https://github.com/Samanthapudi-Shakeer/Statistics-Anveshana'
    }
  },
  {
    title: 'EduFeed Sense',
    description: 'Academic feedback intelligence platform with custom NLP pipelines, transformer classification, aspect-level insights, faculty dashboards, and hybrid retrieval using GraphRAG, HyDE, and RAPTOR for multi-hop QA and policy/syllabus intelligence.',
    image: 'https://images.pexels.com/photos/7647959/pexels-photo-7647959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['ML', 'NLP', 'GraphRAG', 'RAPTOR'],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/EDUFEEDSENSE'
    }
  },
  {
    title: 'Osutilia - System Monitoring',
    description: 'A dynamic system monitoring tool with a user-friendly web interface to visualize real-time CPU, memory, disk, network, and user activity for simple performance insight.',
    image: os,
    technologies: ['Flask', 'psutil', 'HTML', 'CSS', 'JavaScript'],
    links: {
      demo: 'https://osutilia.onrender.com/',
      github: 'https://github.com/Samanthapudi-Shakeer/Osutilia'
    }
  },
  {
    title: 'Expenalyzia',
    description: 'A Flask-based expense tracker for adding, editing, deleting, and filtering expenses by category, date, or person, with log history and interactive pie and bar charts.',
    image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flask', 'JavaScript', 'HTML', 'CSS'],
    links: {
      demo: '#',
      github: 'https://github.com/Samanthapudi-Shakeer/Expenalyzia'
    }
  },
  {
    title: 'Empathy Exchange',
    description: 'Engineered a community-driven crowdfunding web app with campaign creation, help requests, donation workflows, real-time progress tracking, and features for users to upload and support necessities.',
    image: crw,
    technologies: ['MERN Stack', 'Payment Integration', 'Crowdfunding'],
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

