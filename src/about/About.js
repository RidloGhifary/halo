import React from "react"
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
import { SiFreelancer } from 'react-icons/si'

function About() {
  return (
    <div className="w-full my-16 px-6 grid place-items-center" id="about">
      <div className="flex flex-col items-center w-full p-5">
        <h1 className="text-5xl font-bold mb-7">ABOUT ME</h1>
        <div className="md:w-[80%] w-full lg:flex justify-between items-center gap-5">
          <div className="text-left">
            <h1 className="font-semibold text-center text-3xl mb-2 text-gray-800">Design</h1>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit autem eligendi consequatur quo perferendis eius ad odit quia, minus fugiat molestiae expedita voluptatibus libero rem porro voluptate dolore.</p>
            <div class="flex gap-5 mt-3">
              <a
                href="https://instagram.com/ra_ghifary"
                target="_blank"
                className="bg-black text-white p-1 rounded-full hover:rounded-lg transition-all duration-300"
              >
                <AiOutlineInstagram size={30} />
              </a>
              <a href="mailto:ridloghfry@example.com" target="_blank" className="bg-black text-white p-1 rounded-full hover:rounded-lg transition-all duration-300"><AiOutlineMail size={30} /></a>
              <a href="https://www.freelancer.com/u/Ridloghfry" target="_blank" className="bg-black text-white p-1 rounded-full hover:rounded-lg transition-all duration-300"><SiFreelancer size={30} /></a>
            </div>
          </div>
          <div className="text-right lg:text-left mt-5 lg:mt-0">
            <h1 className="font-semibold text-center text-3xl mb-2 text-gray-800">Code</h1>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus praesentium architecto dolorem in. Sapiente nobis tempore quia consequuntur dolorum eius architecto. Earum quidem repellat aperiam debitis cupiditate, impedit veniam.</p>
            <div class="flex gap-5 mt-3">
              <a href="https://github.com/RidloGhifary" target="_blank" className="bg-black text-white p-1 rounded-full hover:rounded-lg transition-all duration-300"><AiOutlineGithub size={30} /></a>
              <a href="https://wa.me/6285730225564" target="_blank" className="bg-black text-white p-1 rounded-full hover:rounded-lg transition-all duration-300"><AiOutlineWhatsApp size={30} /></a>
              <a href="https://www.linkedin.com/in/ridlo-ghifary-141899259/" target="_blank" className="bg-black text-white p-1 rounded-full hover:rounded-lg transition-all duration-300"><AiOutlineLinkedin size={30} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About