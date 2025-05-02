import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";


const Contact = () => {
  const contacts = [
    {
      platform: "LinkedIn",
      handle: "Soubhik Samanta",
      icon: <FaLinkedin className="text-2xl" />,
      message: "Connect",
      link: "https://www.linkedin.com/in/soubhik-samanta111/",
    },
    {
      platform: "X",
      handle: "@soubhik_tw",
      icon: <FaTwitter className="text-2xl" />,
      message: "Follow",
      link: "https://x.com/Soubhik_tw",
    },
    {
      platform: "Instagram",
      handle: "Soubhik",
      icon: <FaInstagram className="text-2xl" />,
      message: "Follow",
      link: "",
    },
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  return (
    <motion.div
      className="container mx-auto py-10 px-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-center text-3xl font-bold mb-6">Let's Connect!</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            className="bg-[#fafaf9] text-[#0c0a09] p-6 rounded-xl shadow-lg text-center w-64"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center gap-2 text-xl font-semibold">
              {contact.icon} {contact.platform}
            </div>
            <p className="mt-2 text-[#dda704]">{contact.handle}</p>
            <motion.a
              href={contact.link}
              target="_blank"
              className="inline-block mt-3 px-4 py-2 border text-[#fff1f2] bg-[#22c55e] border-[#eab308] rounded-lg hover:bg-[#166534] hover:text-[#fff1f2] transition no-underline"
              whileHover={{ scale: 1.1 }}
            >
              {contact.message}
            </motion.a>
          </motion.div>
        ))}
      </div>

    
    </motion.div>
  );
};

export default Contact;