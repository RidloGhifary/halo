import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="w-full fixed z-10 bg-white shadow-lg">
            <nav className="w-full h-[60px] max-w-[1240px] flex justify-around items-center">
                <p className="font-semibold text-2xl"><a href="#home" className="font-[Dancing Script]">Ridloghfry</a></p>
                <div className="md:flex gap-5 hidden">
                    <p className="hover:underline"><a href="#home">Home</a></p>
                    <p className="hover:underline"><a href="#about">About</a></p>
                    <p className="hover:underline"><a href="#skills">Skills</a></p>
                    <p className="hover:underline"><a href="#contact">Contact</a></p>
                </div>
                <div class="icons block md:hidden" onClick={handleNav}>
                    {!nav ? <AiOutlineClose size={30} className='cursor-pointer' /> : <AiOutlineMenu size={30} className='cursor-pointer' />}
                </div>
                <div className={!nav ? 'fixed bottom-0 left-0 w-[60%] h-[100vh] bg-black/90 shadow-2xl p-5 transition-all duration-500 ease-in-out' : 'fixed left-[-100%] bottom-0'}>
                    <p className="font-semibold text-2xl text-white mb-10"><a href="#home">Ridloghfry</a></p>
                    <div className="flex flex-col items-center gap-10 text-white w-full h-full">
                        <p className="py-2 text-center w-full transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"><a href="#home">Home</a></p>
                        <p className="py-2 text-center w-full transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"><a href="#about">About</a></p>
                        <p className="py-2 text-center w-full transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"><a href="#skill">Skills</a></p>
                        <p className="py-2 text-center w-full transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"><a href="#contact">Contact</a></p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar