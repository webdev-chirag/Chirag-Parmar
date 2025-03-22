import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }} 
      className="p-6 bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-bold text-white">Project Title</h2>
      <p className="text-gray-300">A short description of the project.</p>
    </motion.div>
  );
}
