import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";

function About() {
  return (
    <div className="w-full bg-[#000] mx-auto p-5" id="about">
      <h1 className="text-white text-3xl sm:text-6xl max-w-[320px] mx-auto font-semibold p-4">
        About <span className="text-orange-400">Me</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-6 place-items-center">
        <div className="w-full sm:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col sm:flex-row p-6">
            <Image
              src={book}
              alt="book"
              className="w-1/2 sm:w-auto h-auto sm:h-[130px] object-contain"
            />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white/80">
                Education
              </h2>
              <p className="text-sm sm:text-lg text-white/70 mt-2">
                B.Tech in Computer Science from Maharshi Dayanand University,
                grounded in algorithms, software engineering, and data
                analytics, fueling a blend of solid fundamentals and modern
                product thinking.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col sm:flex-row p-6">
            <Image
              src={pc}
              alt="pc"
              className="w-1/2 sm:w-auto h-auto sm:h-[130px] object-contain"
            />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white/80">
                Problem-Solving
              </h2>
              <p className="text-sm sm:text-lg text-white/70 mt-2">
                I debug problems end-to-end, whether it’s scaling a RAG chatbot,
                tuning SQL/Python pipelines, or optimizing UX flows for better
                engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col sm:flex-row p-6">
            <Image
              src={card}
              alt="card"
              className="w-1/2 sm:w-auto h-auto sm:h-[130px] object-contain"
            />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white/80">
                Experience
              </h2>
              <p className="text-sm sm:text-lg text-white/70 mt-2">
                I have more than two years of experience in real-world industry
                with some great scalable projects like Assimilate, BehtarZindagi, and InsuranceDekho.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col sm:flex-row p-6">
            <Image
              src={pc}
              alt="pc"
              className="w-1/2 sm:w-auto h-auto sm:h-[130px] object-contain"
            />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white/80">
                Technical Skills
              </h2>
              <p className="text-sm sm:text-lg text-white/70 mt-2">
                Full-stack + AI toolkit: React, Next.js, Tailwind, Node.js,
                Express, NestJS, Python/FastAPI, LangChain, SQL, MongoDB,
                PostgreSQL, Prisma, AWS, Docker, and vector DBs such as Faiss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
