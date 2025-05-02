import React from "react";
import { motion } from "framer-motion";
import c1 from "../assets/Certificates/c1.pdf"
import c2 from "../assets/Certificates/c2.pdf"
import c3 from "../assets/Certificates/c3.pdf"

const certificates = [
  { title: "C++ Basics: Selection and Iteration", pdfLink: c3 },
  { title: "Cloud Computing", pdfLink: c2 },
  { title: "Data Structures and Algorithms", pdfLink: c1 },
  
];

const Certificates = () => {
  return (
    <div className="container mx-auto px-2 py- min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center text-black mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Certificates
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-pink-300 transition-all border overflow-hidden"
          >
            {/* PDF Preview */}
            <div className="w-full h-60 bg-blue-100">
              <iframe
                src={cert.pdfLink}
                title={`preview-${index}`}
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{cert.title}</h2>
              <p className="text-sm text-gray-500">View or Download</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
