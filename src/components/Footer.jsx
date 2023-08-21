import React, { useEffect } from 'react'
import Image1 from '../assets/skills/css.png'
import { AiFillInstagram, AiFillYoutube, AiFillMail } from 'react-icons/ai'


const footer = () => {

    const menus = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'About Me',
            link: ''
        },
        {
            id: 3,
            name: 'Skill',
            link: ''
        },
        {
            id: 4,
            name: 'Project',
            link: ''
        },
    ]
  return (
    <footer className='mt-20 mb-10' data-AOS='fade-up' data-aos-duration='1200'>
        <div className='container'>
            <div className='flex flex-wrap md:gap-8 lg:gap-0'>
                <div className='w-full md:w-1/3 mb-12'>
                    <div className='flex gap-4 items-center mb-3'>
                        
                        <h1 className='font-semibold text-xl tracking-[12px] text-primary'>VIOLE</h1>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-1'>
                        <p className='text-sm md:text-base text-textColor '>Jalan Kampus Raya Unud</p>
                        <p className='text-sm md:text-base text-textColor '>Jimbaran, Bali</p>
                        <p className='text-sm md:text-base text-textColor '>081 339 585 537</p>
                    </div>
                    <div className='flex mt-4 items-center'>
                        <a className='w-9 h-9 mr-2 rounded-full flex justify-center items-center border border-[#eeeeee] text-textColor bg-primary hover:border-primary hover:bg-primary hover:text-secondary transition duration-200' href="">
                            <AiFillInstagram size={20} />
                        </a>
                        <a className='w-9 h-9 mr-2 rounded-full flex justify-center items-center border border-[#eeeeee] text-textColor bg-primary hover:border-primary hover:bg-primary hover:text-secondary transition duration-200' href="">
                            <AiFillYoutube size={20} />
                        </a>
                        <a className='w-9 h-9 mr-2 rounded-full flex justify-center items-center border border-[#eeeeee] text-textColor bg-primary hover:border-primary hover:bg-primary hover:text-secondary transition duration-200' href="">
                            <AiFillMail size={20} />
                        </a>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-2/3 flex flex-wrap'>
                    <div className='w-full mb-12 md:w-1/2 lg:w-1/3'>
                        <h1 className='text-base font-bold text-primary mb-3'>My Menu</h1>
                        <ul className='flex flex-col gap-2 md:gap-1'>
                            {menus.map((items) => (
                                <li key={items.id} className=''>
                                    <a className='text-textColor text-sm md:text-base hover:text-primary transition duration-200' href={items.link}>{items.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full mb-12 md:w-1/2 lg:w-1/3'>
                        <h1 className='text-base font-bold text-primary mb-3'></h1>
                        <div className='flex flex-col gap-2 md:gap-1'>
                            <a className='text-textColor text-sm md:text-base hover:text-primary transition duration-200' href="">Testimoni</a>
                            <a className='text-textColor text-sm md:text-base hover:text-primary transition duration-200' href="">Grup Whatsapp</a>
                        </div>
                    </div>
                    <div className='w-full mb-12 md:w-1/2 lg:w-1/3'>
                        <h1 className='text-base font-bold text-primary mb-3'>Bantuan</h1>
                        <div className='flex flex-col gap-2 md:gap-1'>
                            <a className='text-textColor text-sm md:text-base hover:text-primary transition duration-200' href="/">FAQ</a>
                            <a className='text-textColor text-sm md:text-base hover:text-primary transition duration-200' href="/">Privacy & Terms</a>
                        </div>
                    </div>
                </div>
           </div>
           <div className='pt-4 w-full border-t border-[#eeeeee]'>
                <p className='text-sm text-textColor'>© 2023 Sport Inspire ID | Website about Sport</p>
           </div>
        </div>
    </footer>
  )
}

export default footer