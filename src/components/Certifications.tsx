import { motion } from 'framer-motion';
import py from './py.png';

const certifications = [
  {
    title: 'AWS Cloud Practitioner Associate',
    issuer: 'Amazon Web Services',
    date: 'Apr 2025',
    description: 'Certified in foundational AWS cloud concepts including compute, storage, networking, and billing.',
    image: 'https://img.icons8.com/?size=512&id=wU62u24brJ44&format=png'
  },
  {
    title: 'Machine Learning',
    issuer: 'Stanford University – DeepLearning.AI',
    date: 'Jun 2024',
    description: 'Completed Andrew Ng’s course covering supervised learning, regularization, and ML best practices.',
    image: 'https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png'
  },
  {
    title: 'Python Programming',
    issuer: 'NPTEL – IIT Madras',
    date: 'Jan 2024',
    description: 'Learned Python fundamentals, data structures, object-oriented concepts, and problem solving.',
    image: 'https://img.icons8.com/?size=128&id=uLDrtp8o8zTG&format=png'
  },
  {
    title: 'AWS Fundamentals',
    issuer: 'AWS – Coursera',
    date: '2023',
    description: 'Gained hands-on experience with core AWS services through project-based learning on Coursera.',
    image: 'https://img.icons8.com/?size=512&id=wU62u24brJ44&format=png'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-00">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="shadow-md flex gap-6 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-20 h-20"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-300 text-sm italic">{cert.date}</p>
                <p className="text-gray-300 mt-2 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
