"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilePic from "../assets/profilepic.png";

function Hero() {
  return (
    <div className="py-16 sm:py-24 h-auto relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative text-center px-4">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-5xl sm:text-8xl font-bold text-[#98B4CE]">
            Hi, I am
          </h1>
          <h1 className="text-5xl sm:text-8xl font-bold text-[#E48A57]">
            Vishal Juyal
          </h1>
        </div>

        <motion.div
          className="absolute left-[10px] sm:left-[200px] top-[200px] sm:top-[140px]"
          drag
        >
          <Image
            src={cursor}
            alt="cursor"
            height="120"
            width="120"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute right-[5px] sm:right-[200px] top-[200px] sm:top-[140px]"
          drag
        >
          <Image
            src={lightning}
            alt="lightning"
            height="120"
            width="120"
            className=""
            draggable="false"
          />
        </motion.div>
        <p className="text-lg sm:text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a full stack developer focused on creating websites that provides
          the best experience for users.
        </p>
        <Image
          src={profilePic}
          alt="profile picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
