"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SimCore from "../assets/simCore.png"
import simGraphs from "../assets/simGraphs.png"
import sentiment from "../assets/sentiment.png";
import chatbot from "../assets/chatbot.png";
import asmNews from "../assets/asmNews.png"
import asmNews2 from "../assets/asmNews2.png"
import project1 from "../assets/projectAssimilate.png";
import project2 from "../assets/proj1.png";
import project3 from "../assets/proj2.png";
import project4 from "../assets/proj3.png";
import project5 from "../assets/proj4.png";
import Slider from "react-slick";

function Portfolio() {
  const projects = [
    {
      title: "Assimilate Cryptocurrency Platform (Assimilate.cc)",
      desc: "Developed a comprehensive full-stack platform for the Assimilate cryptocurrency, highlighting key metrics and analysis such as mindshare, market cap, holder distribution, sentiment ratings, and real-time price data with ChatBot. Engineered the backend with Node.js, PostgreSQL, and Prisma ORM for robust data management, utilizing Ether.js for seamless blockchain integration tailored to Assimilate. Built an interactive frontend using Vue.js, featuring real-time data visualization through dynamic graphs and an intuitive user interface. Integrated a real-time chatbot powered by a large language model (LLM) to provide instant user support and insights about the Assimilate coin. Deployed the platform on AWS, ensuring scalability and reliability.",
      devstack: "VueJs, TailwindCSS, NodeJs, PostGresSQL, Web3, AWS",
      link: "https://assimilate.cc/",
      git: "",
      src: [project1, SimCore, chatbot, sentiment, simGraphs],
    },
    {
      title: "Assimilate News Platform (Assimilate.news)",
      desc: "• Developed a full-stack news platform for the Assimilate corp, delivering real-time updates, articles, and community insights to keep users informed about the coin’s ecosystem. Engineered the backend with Node.js and PostgreSQL for efficient content management and fast delivery of news data. Designed a sleek, responsive frontend using React.js, featuring a modern, minimalist UI with smooth navigation, dynamic content rendering, and a focus on readability and user engagement. Integrated PostHog for in-depth analysis of user visits, tracking behavior and engagement metrics to optimize the platform’s performance and user experience. Deployed the platform on AWS, ensuring scalability and high availability to support growing traffic and provide a seamless experience across devices.",
      devstack: "ReactJs, TailwindCSS, Redux, NodeJs, PostGresSQL, LLM, AWS",
      link: "https://assimilate.news/",
      git: "",
      src: [asmNews, asmNews2],
    },
    {
      title: "Chat App",
      desc: "real-time chat application using ReactJS and Firebase that allows users to communicate seamlessly. The app features instant messaging, the ability to share pictures and files alongside text, and a secure login and registration system powered by Firebase Authentication. With a responsive design for both mobile and desktop, it ensures a smooth and engaging experience. The integration of Firebase Cloud Storage enables reliable multimedia sharing, making conversations more dynamic and interactive.",
      devstack: "Reactjs,CSS,Redux,Firebase",
      link: "https://chat-app-delta-black.vercel.app/login/",
      git: "https://github.com/VishalJuyal/chat-app",
      src: [project2],
    },
    {
      title: "Meal Order App",
      desc: "Created a user-friendly food ordering application with ReactJS and CSS, allowing users to browse meals, add items to their cart, and place orders. The app focuses on simplicity and efficiency, ensuring a delightful user experience for meal selection and ordering.",
      devstack: "Reactjs,CSS,ContextAPI",
      link: "https://meal-order-app-theta.vercel.app/",
      git: "https://github.com/VishalJuyal/meal-order-app",
      src: [project4],
    },
    {
      title: "Mental Health Care",
      desc: "Mental Health Care is a platform designed to streamline mental health services. Users can securely register, log in, book appointments with professionals, and view their appointment history. It offers a user-friendly interface and efficient functionality to enhance access to mental health support.",
      devstack: "Next.js, TailwindCSS, Node.js, TypeScript, Express.js, and MongoDB",
      link: "https://health-care-project-jz2jin460-vishaljuyals-projects.vercel.app/",
      git: "https://github.com/VishalJuyal/healthCare-backend",
      src: [project5],
    },
    {
      title: "Ecommerce Website",
      desc: "Developed a dynamic ecommerce platform using ReactJS and CSS, featuring seamless API integration for fetching products. The platform includes an Add to Cart functionality, along with secure login and registration systems for users, providing a smooth and efficient shopping experienc",
      devstack: "Reactjs,CSS,Redux",
      link: "https://ecoomerce-store-vercel.vercel.app/",
      git: "https://github.com/VishalJuyal/Ecommerce-store",
      src: [project3],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
  };

  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-0 sm:py-0 px-4" id="portfolio">
      <h1 className="text-white text-3xl sm:text-6xl font-semibold text-center mb-12">
        Projects
      </h1>
      <div className="max-w-6xl mx-auto space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`flex flex-col items-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-4">
              <h2 className="text-5xl text-white/60">{`0${index + 1}`}</h2>
              <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
              <p className="text-sm sm:text-lg text-white/70 text-justify sm:text-left max-w-full px-2 sm:px-0">
                {project.desc}
              </p>
              <p className="text-lg font-semibold text-orange-400 break-words block sm:inline">{project.devstack}</p>
              <div className="flex gap-4 mt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
                  Link
                </a>
                {project.git && (
                  <a href={project.git} target="_blank" rel="noopener noreferrer" className="underline">
                    Git
                  </a>
                )}
              </div>
            </div>
            <div className="w-full max-w-[640px] aspect-video overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-black">
              {project.src.length > 1 ? (
                <Slider {...sliderSettings} className="w-full h-full">
                  {project.src.map((img, i) => (
                    <div key={i} className="w-full h-full">
                      <Image
                        src={img}
                        alt={`${project.title} ${i}`}
                        width={1280}
                        height={720}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="w-full h-full">
                  <Image
                    src={project.src[0]}
                    alt={project.title}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              )}
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
