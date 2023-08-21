import React, {useEffect} from 'react'
import Html from '../assets/skills/html.png'
import Css from '../assets/skills/css.png'
import Js from '../assets/skills/js.png'
import Bs from '../assets/skills/BS.png'
import Tailwind from '../assets/skills/tailwind.png'
import Reactjs from '../assets/skills/react.png'
import Python from '../assets/skills/python.png'
import Figma from '../assets/skills/figma.png'
import Openai from '../assets/skills/openai.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    const mySkill = [
        {
            id: 1,
            name: 'HTML',
            image: Html
        },
        {
            id: 2,
            name: 'CSS',
            image: Css
        },
        {
            id: 3,
            name: 'Javascript',
            image: Js
        },
        {
            id: 4,
            name: 'Bootstrap',
            image: Bs
        },
        {
            id: 5,
            name: 'Tailwind CSS',
            image: Tailwind
        },
        {
            id: 6,
            name: 'React JS',
            image: Reactjs
        },
        {
            id: 7,
            name: 'Python',
            image: Python
        },
        {
            id: 8,
            name: 'Figma',
            image: Figma
        },
        {
            id: 9,
            name: 'Openai',
            image: Openai
        },
    ]

  return (
    <section id='skill' className='py-20 md:py-40'>
        <div className='container'>
            <div data-AOS="fade-down" data-aos-duration="1200">
                <div className="mt-6 text-center">
                <p className="text-secondary text-lg font-medium md:text-lg">
                    Skills
                </p>
                </div>
                <h1 className="text-center md:leading-[64px] leading-0 mt-2 md:mt-4 text-2xl md:text-4xl font-medium leading-[48px]">
                    Use a Variety of Skills to Create My Work.
                </h1>
            </div>
            <div className='mt-12 flex flex-wrap items-center gap-4' data-AOS="fade-up" data-aos-duration="1200">
                {mySkill.map((items) => (
                    <div key={items.id} className='mx-auto grayscale hover:grayscale-0 duration-200 transition'>
                        <img className='w-4/5' src={items.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills