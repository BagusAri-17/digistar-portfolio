import React, { useEffect } from "react";
import aboutMe from "../assets/about.png";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="py-20 md:py-40">
      <div className="container">
        <div className="flex flex-wrap items-center md:gap-8 lg:gap-0">
          <div
            className="lg:max-w-[50%] max-w-full order-1 md:order-2"
            data-AOS="fade-left"
            data-aos-duration="1200"
          >
            <div className="mt-6">
              <p className="text-secondary text-lg font-medium text-center md:text-lg lg:text-left">
                About Me
              </p>
            </div>
            <h1 className="text-center lg:text-left md:leading-[64px] leading-0 mt-2 md:mt-4 text-2xl md:text-4xl font-medium leading-[48px] lg:max-w-[80%]">
              UI/UX Designer & Front-End Developer
            </h1>
            <div className="mt-2 md:mt-4 leading-8 lg:justify-start text-center md:text-left ">
              <p><span className="text-primary">Bagus</span> - I am someone who is interested in creating interactive UI/UX designs that align with user needs. I am also capable of implementing these designs into a website.</p>
            </div>
          </div>

          <div
            className="md:max-w-[60%] lg:max-w-[40%] lg:block mx-auto order-2 md:order-1 pt-4 md:pt-0"
            data-AOS="fade-right"
            data-aos-duration="1200"
          >
            <img className="w-full" src={aboutMe} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
