import { motion } from "framer-motion";

const Bio = () => {
  return (
    <div className="text-dark p-10 text-center">
      <motion.h1
        className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#f87171]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hey, I'm Soubhik Samanta 🚀
      </motion.h1>
      
      <motion.p
        className="text-lg mt-4 text-[#18181b] max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        A passionate <span className="text-[#4ade80] font-semibold">Full-Stack Web Developer</span>,  
        skilled in crafting sleek, high-performance web applications using the 
        <span className="text-[#ea580c] font-semibold"> MERN Stack</span>.  
        I love turning complex problems into elegant, scalable solutions.
      </motion.p>
      
      <motion.div
        className="mt-6 text-lg font-semibold tracking-wide text-gray-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        "Code. Build. Innovate. Repeat. 🔥"
      </motion.div>
    </div>
  );
};

export default Bio;
