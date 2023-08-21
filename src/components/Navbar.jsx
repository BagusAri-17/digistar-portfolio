import React, {useState, useEffect} from 'react'
import Hamburger from 'hamburger-react'
import navLogo from '../assets/react.svg'
import { BiSolidHome, BiHistory, BiSolidBookContent, BiSolidInfoCircle} from 'react-icons/bi'

const Navbar = () => {

    const navigation = [
        {
            id: 1,
            name: 'Home',
            link: '/',
            icon: <BiSolidHome size={24} />
          
        },
        {
            id: 2,
            name: 'About Me',
            link: '#about',
            icon: <BiHistory size={24} />
            
          
        },
        {
            id: 3,
            name: 'Skill',
            link: '#skill',
            icon: <BiSolidBookContent size={24} />
          
        },
        {
            id: 4,
            name: 'Project',
            link: '#project',
            icon: <BiSolidInfoCircle size={24} />
          
        }
    ]

    const [isOpen, setOpen] = useState(false)
    
    window.onscroll = () => {
        const header = document.querySelector("nav");
        const fixedNav = header.offsetTop;
    
        if (window.pageYOffset > fixedNav) {
          header.classList.add("navbar-fixed");
        } else {
          header.classList.remove("navbar-fixed");
        }
      };
    

  return (
    <nav className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className="container">
            <div className='flex items-center justify-between relative '>
                <div className=''>
                    <a className='flex items-center gap-4 py-6' href=''>
                        <span className='text-xl text-secondary tracking-[8px] font-medium'>BAGUS</span>
                    </a>
                </div>
                <div className='flex items-center lg:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    <div>
                        <ul className={isOpen ? 'absolute right-2 top-full w-full max-w-[250px] rounded-lg bg-primary py-4 shadow-lg duration-500 ease-in-out': 'fixed left-[-100%] duration-500 ease-in-out'}>
                            {navigation.map((items) => (
                                <li key={items.id} className='flex flex-row items-center'>
                                    <a className='gap-4 mx-8 flex py-2 text-base hover:cursor-pointer duration-200 transition' href={items.link}>
                                    {items.icon}
                                    {items.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='hidden lg:flex items-center'>
                    <ul className='flex items-center space-x-10'>
                        {navigation.map((items) => (
                            <li key={items.id}>
                                <a className='text-sm duration-200 transition' href={items.link}>{items.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar