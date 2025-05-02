import { motion } from "framer-motion";
import { useState } from "react";
import profileImage1 from "../assets/icons/pf2.png";
import profileImage2 from "../assets/icons/ss1.jpeg";
import MyInfo from "./MyInfo";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="flex flex-col pt-20 mt-20 md:flex-row justify-self-center min-h-screen space-y-8 md:space-y-0">
        {/* Left Section - Text Content */}
        <div className="mt-2 flex flex-col justify-items-center md:items-start text-center md:text-left max-w-xl md:w-2/3">
          <motion.h1
            className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Welcome
          </motion.h1>
          <motion.p
            className="text-3xl font-bold mt-4 text-[#0284c7]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            Hi, I'm{" "}
            <span className="text-[#1d4ed8] hover:text-[#fda4af]">
            Soubhik Samanta
            </span>
          </motion.p>
          <motion.p
            className="text-xl text-[#0c0a09] font-semibold hover:text-[#52525b]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            A creative and driven <span className="text-[#c084fc] hover:text-[#ec4899]">Full-Stack Web Developer</span>, currently pursuing
            B.Tech in CSE.&nbsp;
            <span className="text-[#34d399] hover:text-[#fda4af]">Always exploring, learning</span>, and pushing the
            boundaries of technology.
          </motion.p>
          <MyInfo />
          <div className="flex flex-col md:flex-row items-center justify-between md:justify-start mt-6 gap-5">
            <motion.a
              href="https://drive.google.com/file/d/1BcNLHYV9F2A2C5wQXBY82Tr-yLXv3Pok/view"
              download
              className="mt-6 px-6 py-3 text-[#1c1917] border-[#1c1917] border-2 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-[#fca5a5] no-underline"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}>
              Download My CV
            </motion.a>
            <motion.a
              href="https://github.com/Soubhik19" target="_blank"
              className="mt-6 px-6 py-3 text-[#1c1917] border-[#1c1917] border-2 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-[#4ade80] no-underline"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}>
              Go to GitHub
            </motion.a>
          </div>
        </div>

        {/* Right Section - Profile Image with Flip Effect */}
        <motion.div
          className="ml-10 flex flex-col items-center justify-items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src={isHovered ? profileImage2 : profileImage1}
            alt="Soubhik Samanta"
            className="rounded-full w-72 h-72 md:w-[28rem] md:h-[28rem] shadow-lg object-cover"
            animate={{ rotateY: isHovered ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
