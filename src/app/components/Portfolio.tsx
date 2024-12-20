"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";

function Portfolio() {
  const projects = [
    {
      title: "Chat App",
      desc: "real-time chat application using ReactJS and Firebase that allows users to communicate seamlessly. The app features instant messaging, the ability to share pictures and files alongside text, and a secure login and registration system powered by Firebase Authentication. With a responsive design for both mobile and desktop, it ensures a smooth and engaging experience. The integration of Firebase Cloud Storage enables reliable multimedia sharing, making conversations more dynamic and interactive.",
      devstack: "Reactjs,CSS,Redux,Firebase",
      link: "https://chat-app-delta-black.vercel.app/login/",
      git: "https://github.com/VishalJuyal/chat-app",
      src: project1,
    },
    {
      title: "Meal Order App",
      desc: "Created a user-friendly food ordering application with ReactJS and CSS, allowing users to browse meals, add items to their cart, and place orders. The app focuses on simplicity and efficiency, ensuring a delightful user experience for meal selection and ordering.",
      devstack: "Reactjs,CSS,ContextAPI",
      link: "https://meal-order-app-theta.vercel.app/",
      git: "https://github.com/VishalJuyal/meal-order-app",
      src: project3,
    },
    {
      title: "Ecommerce Website",
      desc: "Developed a dynamic ecommerce platform using ReactJS and CSS, featuring seamless API integration for fetching products. The platform includes an Add to Cart functionality, along with secure login and registration systems for users, providing a smooth and efficient shopping experienc",
      devstack: "Reactjs,CSS,Redux",
      link: "https://ecoomerce-store-vercel.vercel.app/",
      git: "https://github.com/VishalJuyal/Ecommerce-store",
      src: project2,
    },
  ];

  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-12 sm:py-18 mt-16 sm:mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-4xl sm:text-6xl max-w-[320px] mx-auto font-semibold my-6 sm:my-12 text-center">
        Projects
      </h1>
      <div className="max-w-[1200px] mx-auto mt-10 sm:mt-40 space-y-12 sm:space-y-24 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className={`flex flex-col gap-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devstack}
              </p>
              <div className="w-4 h-[1px] bg-gray-400 my-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6"
                >
                  Link
                </a>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  Git
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                width={800}
                height={600}
                className="h-[350px] w-auto object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
