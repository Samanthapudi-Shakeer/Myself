import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import image_me from './img.png';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src=image_me // Replace with actual image path or URL
            alt="Shakeer Samanthapudi"
            className="object-contain w-10 h-20 md:w-60 md:h-60 rounded-full border-0 border-blue-600 shadow-xl scale-85"
          />
        </motion.div>

        {/* Name */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Shakeer Samanthapudi
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          AI & NLP Researcher | Full-Stack Developer | Data Science and Machine Learning Enthusiast 
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            Connect With Me
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            View my Projects
          </a>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ArrowDown className="w-8 h-8 text-blue-500" />
        </motion.div>
      </div>
    </section>
  );
}

