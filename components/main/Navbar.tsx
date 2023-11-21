"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold md:ml-[10px] text-gray-300">
            S.Y.S Dev
          </span>
        </a>

        <div className="w-[500px] h-full md:flex flex-row items-center justify-between md:mx-10">
          <div className="hidden md:flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {/* Menu links for desktop */}
            {/* <div className="hidden md:flex items-center"> */}
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            {/* </div> */}
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="md:hidden cursor-pointer text-white mx-8"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </div>

        {/* Responsive menu for mobile */}
        {isMenuOpen && (
          <div className="md:hidden transition-all text-white p-5 rounded-md absolute top-10 right-5 border border-[#7042f861]	 shadow-lg shadow-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-xl ">
            <a href="#about-me" className="cursor-pointer block py-2 ">
              About me
            </a>
            <a href="#skills" className="cursor-pointer block py-2 ">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer block py-2 ">
              Projects
            </a>
          </div>
        )}

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} target="_blank" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
