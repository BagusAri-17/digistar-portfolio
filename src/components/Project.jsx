import React, {useEffect} from 'react'
import Sportinspireid from '../assets/projects/sportinspireid.png'
import Kisahnesia from '../assets/projects/kisahnesia.png'
import Dtalks from '../assets/projects/dtalks.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    const myProject = [
        {
            id: 1,
            name: 'Sport Inspire ID',
            image: Sportinspireid,
            link: 'https://sport-inspire-id.netlify.app/'
        },
        {
            id: 2,
            name: 'Kisahnesia',
            image: Kisahnesia,
            link: 'https://kisahnesia.vercel.app/'
        },
        {
            id: 3,
            name: 'D-Talks',
            image: Dtalks,
            link: 'https://detalks.netlify.app/'
        },
    ]

  return (
    <section id='project' className='py-20 md:py-40'>
        <div className='container'>
            <div data-AOS="fade-down" data-aos-duration="1200">
                <div className="mt-6 text-center">
                <p className="text-secondary text-lg font-medium md:text-lg">
                    My Projects
                </p>
                </div>
                <h1 className="text-center md:leading-[64px] leading-0 mt-2 md:mt-4 text-2xl md:text-4xl font-medium leading-[48px]">
                Projects That Enhance My Experience.
                </h1>
            </div>
            <div className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12' data-AOS="zoom-in" data-aos-duration="1200">
                {myProject.map((items) => (
                    <div key={items.id} className='bg-primary'>
                        <a href={items.link}>
                            <img src={items.image} alt="" />
                            <div className='p-4 md:p-8'>
                                <p className='text-base lg:text-lg text-secondary font-medium'>{items.name}</p>
                                <p className='pt-2 text-xs lg:text-sm text-secondary'>See Details</p>
                            </div>
                        </a>
                    </div>
                ))}
                
                
            </div>
        </div>
    </section>
  )
}

export default Project