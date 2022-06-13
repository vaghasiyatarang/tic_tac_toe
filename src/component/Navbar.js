import React, { useState } from 'react'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav)
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between item-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li><Link activeClass="active" to="hero" spy={true} smooth={true} duration={1000} >Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={1000} >About</Link></li>
                        <li><Link activeClass="active" to="support" spy={true} smooth={true} offset={-50} duration={1000} >Support</Link></li>
                        <li><Link activeClass="active" to="allinone" spy={true} smooth={true} offset={-100} duration={1000} >Platforms</Link></li>
                        <li><Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-50} duration={1000} >Pricing</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuOutlined className='w-5' /> : <CloseOutlined className='w-5' />}

                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active" to="hero" spy={true} smooth={true} duration={1000} >Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={1000} >About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active" to="support" spy={true} smooth={true} offset={-50} duration={1000} >Support</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active" to="allinone" spy={true} smooth={true} offset={-100} duration={1000} >Platforms</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} activeClass="active" to="pricing" spy={true} smooth={true} offset={-50} duration={1000} >Pricing</Link></li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar