import React from "react";
import { motion } from "framer-motion";  
import leetcodeIcon from "../assets/icons/lc.png";
import hackerrankIcon from "../assets/icons/hr.png";
import codeforcesIcon from "../assets/icons/cf.png";
import lms from "../assets/project/lms.png";
import ecom from "../assets/project/ecom.jpg";
import vote from "../assets/project/Voting.jpg";
import blogging from "../assets/project/blogging.jpg";
import leetmetric from "../assets/project/leetmetric.png";
import url from "../assets/project/url-shortener.jpg";
import "./MyInfo.css";


// Projects Data
const projects = [
  {
    title: "Learning Management System",
    description:
      "A responsive website built using MERN and Tailwind CSS. It includes a user-friendly interface for managing courses, students, and instructors.",
    link: "https://lms-kd.vercel.app/",
    photo: lms,
  },
  {
    title: "URL Shortener",
    description:
      "A website built using MERN and Tailwind CSS. It allows users to shorten long URLs.",
    link: "https://short-url-kd.vercel.app/",
    photo: url,
  },
  {
    title: "E-commerce Store",
    description:
      "A full-stack MERN application for an online store with user authentication and payment integration.",
    link: "https://kanchan3d.github.io/Portfolio/",
    photo: ecom,
  },
  {
    title: "Blog App",
    description:
      "A dynamic blog application using Node.js, Express, and MongoDB.",
    link: "https://kanchan3d.github.io/Portfolio/",
    photo: blogging,
  },
  {
    title: "LeetMetric",
    description:
      "A UI application using Node.js to show user stats from LeetCode.",
    link: "https://kanchan3d.github.io/LeetMetric/",
    photo: leetmetric,
  },
  {
    title: "Online Voting System",
    description: "An online voting system using PHP.",
    link: "http://kanchandasila3.fwh.is/",
    photo: vote,
  },
];

// Coding Profiles Data
const codingProfiles = [
  {
    platform: "GitHub",
    link: "https://github.com/Soubhik19",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    platform: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/user/soubhik19/",
    icon: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
  },
  {
    platform: "LeetCode",
    link: "https://leetcode.com/u/soubhiksamanta25/",
    icon: leetcodeIcon,
  },
  {
    platform: "Coding Ninjas",
    link: "https://www.hackerrank.com/profile/soubhiksamanta25",
    icon: "https://files.codingninjas.in/new-cn-logos-1-1711622387.svg",
  },
  {
    platform: "HackerRank",
    link: "https://www.hackerrank.com/profile/soubhiksamanta25",
    icon: hackerrankIcon,
  },
  {
    platform: "Codeforces",
    link: "https://www.hackerrank.com/profile/soubhiksamanta25",
    icon: codeforcesIcon,
  },
];

// Stagger Effect for Profiles
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MyWork = () => {
  return (
    <motion.div 
      className="container mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Animated Heading */}
      <motion.h3 
        className="text-2xl pb-2 font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Array.from("Find Me on Coding Platforms").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h3>

      {/* Coding Profiles Section */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-6 gap-8 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border no-underline"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={profile.icon}
              alt={`${profile.platform} icon`}
              className="w-12 h-12 mb-4"
              animate={{ y: [0, -5, 0] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-lg font-semibold text-gray-700 hover:text-[#f87171]">
              {profile.platform}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Animated Projects Title */}
      <motion.h2 
        className="text-3xl font-bold text-center mt-12 mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border"
            variants={itemVariants}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <div className="p-6">
              <motion.h3 
                className="text-xl font-semibold hover:text-[#f87171]"
                whileHover={{ color: "#f87171" }}
              >
                {project.title}
              </motion.h3>
              <img src={project.photo} alt="" className=" h-50"/>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#10b981] text-white mt-4 px-4 py-2 rounded hover:bg-[#ef4444] transition-all duration-300 ease-in-out no-underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MyWork;
