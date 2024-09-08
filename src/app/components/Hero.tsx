"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilePic from "../assets/profilepic.png";

function Hero() {
  return (
    <div className="py-24 h-22 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Vishal Juyal </h1>
        </div>

        <motion.div className="absolute left-[280px] top-[170px]" drag>
          <Image
            src={cursor}
            alt="cursor"
            height="170"
            width="170"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div className="absolute left-[280px] top-[170px]" drag>
          <Image
            src={lightning}
            alt="lightning"
            height="120"
            width="120"
            className=""
            draggable="false"
          />
        </motion.div>
        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a full stack developer focused on creating websites tht provides
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
