import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/icons/pf1.png";
import Bio from "./Bio";

const skillIcons = [
  { src: "https://skillicons.dev/icons?i=c", alt: "C" },
  { src: "https://skillicons.dev/icons?i=cpp", alt: "C++" },
  { src: "https://skillicons.dev/icons?i=java", alt: "Java" },
  { src: "https://skillicons.dev/icons?i=python", alt: "Python" },
  { src: "https://skillicons.dev/icons?i=javascript", alt: "JavaScript" },
  { src: "https://skillicons.dev/icons?i=typescript", alt: "TypeScript" },
  { src: "https://skillicons.dev/icons?i=html", alt: "HTML" },
  { src: "https://skillicons.dev/icons?i=css", alt: "CSS" },
  { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },
  { src: "https://skillicons.dev/icons?i=react", alt: "React" },
  { src: "https://skillicons.dev/icons?i=next", alt: "Next.js" },
  { src: "https://skillicons.dev/icons?i=vite", alt: "Vite" },
  { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
  { src: "https://skillicons.dev/icons?i=express", alt: "Express.js" },
  { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
  { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
  { src: "https://skillicons.dev/icons?i=postgres", alt: "PostgreSQL" },
  { src: "https://skillicons.dev/icons?i=prisma", alt: "Prisma" },
  { src: "https://skillicons.dev/icons?i=aws", alt: "AWS" },
  { src: "https://skillicons.dev/icons?i=gcp", alt: "Google Cloud" },
  { src: "https://skillicons.dev/icons?i=firebase", alt: "Firebase" },
  { src: "https://skillicons.dev/icons?i=docker", alt: "Docker" },
  { src: "https://skillicons.dev/icons?i=vercel", alt: "Vercel" },
  { src: "https://skillicons.dev/icons?i=replit", alt: "Replit" },
  { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
  { src: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
  { src: "https://skillicons.dev/icons?i=gitlab", alt: "GitLab" },
  { src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code" },
  { src: "https://skillicons.dev/icons?i=powershell", alt: "PowerShell" },
  { src: "https://skillicons.dev/icons?i=postman", alt: "Postman" },
  { src: "https://skillicons.dev/icons?i=linkedin", alt: "LinkedIn" },
  { src: "https://skillicons.dev/icons?i=discord", alt: "Discord" },
  { src: "https://skillicons.dev/icons?i=kali", alt: "Kali Linux" },
  { src: "https://skillicons.dev/icons?i=linux", alt: "Linux" },
  { src: "https://skillicons.dev/icons?i=jquery", alt: "jQuery" },
];

const About = () => {
  return (
    <>
      {/* Profile Image & Bio */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={profileImage}
          alt="Soubhik Samanta"
          className="rounded-full w-32 h-32 md:w-48 md:h-48 shadow-lg object-cover"
          whileHover={{ scale: 1.1 }}
        />
        <Bio />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h3
          align="center"
          className="text-1-xl font-bold mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Languages and Tools:
        </motion.h3>

        {/* Skills Grid */}
        <motion.div
          className="w-[70%] mx-auto flex flex-wrap justify-center gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {skillIcons.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.15 }}
            >
              <motion.p
                className="text-sm mt-1 transition-all duration-300"
                whileHover={{ fontWeight: "bold", color: "#333" }}
              >
              <img src={item.src} alt={item.alt} className="h-16 md:h-20" />
              <p className="text-sm text-center m-0 transition-all duration-300">
                {item.alt}
              </p>
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
