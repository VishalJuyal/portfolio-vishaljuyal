import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700
  pt-4 flex justify-between items-center"
    >
      <h1 className="text-3xl font-bold">Vishal Juyal</h1>
      <div className="flex space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/vishal-juyal-b1328a208"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/VishalJuyal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/VishalJuyal9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
