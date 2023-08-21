import React, { useEffect } from "react";
import heroImage from "../assets/profile.png";
import {BiLogoGmail, BiLogoInstagramAlt, BiLogoLinkedinSquare} from 'react-icons/bi'

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero" className="h-screen items-center justify-center flex bg-primary">
      <div className="container">
        <div className="flex flex-wrap items-center md:gap-8 lg:gap-0">
          <div
            className="lg:max-w-[50%] max-w-full order-2 md:order-1"
            data-AOS="fade-left"
            data-aos-duration="1200"
          >
            <div className="mt-6">
              <p className="text-secondary text-base text-center md:text-lg lg:text-left">
                Hello I'm Bagus
              </p>
            </div>
            <h1 className="text-center lg:text-left md:leading-[64px] leading-0 mt-4 md:mt-6 text-4xl md:text-5xl font-medium leading-[48px] lg:max-w-[80%]">
              UI/UX Designer & Front-End Developer
            </h1>
            <div className="flex flex-row gap-4 mt-4 text-secondary">
              <a href="mailto:bagusari.widhi@gmail.com">
                <BiLogoGmail size={28} />
              </a>
              <a href="https://www.instagram.com/ariwidhiana_17/">
                <BiLogoInstagramAlt size={28} />
              </a>
              <a href="https://www.linkedin.com/in/bagus-ari/">
                <BiLogoLinkedinSquare size={28} />
              </a>
            </div>
            <div className="flex flex-col gap-5 mt-6 md:mt-8 md:flex-row md:justify-center lg:justify-start">
              <a
                href="#contact"
                className="hover:cursor-pointer hover:opacity-60 duration-200 transition border border-primary text-primary bg-secondary px-6 md:px-8 py-4 rounded-full text-center font-semibold text-sm"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div
            className="md:max-w-[60%] lg:max-w-[50%] lg:block mx-auto order-1 md:order-2"
            data-AOS="fade-right"
            data-aos-duration="1200"
          >
            <img className="w-full" src={heroImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
