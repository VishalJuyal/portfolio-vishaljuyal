import { div, label } from "framer-motion/client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaReact size={110} />, label: "React" },
  { icon: <FaJsSquare size={140} />, label: "JavaScript" },
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white max-w-[950px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-12">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[200px] w-full flex flex-col justify-center items-center bg-white/10 p-6 rounded-xl"
            >
              {skill.icon}
              <p className="mt-4 text-lg">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
