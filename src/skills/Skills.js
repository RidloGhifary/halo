import React from "react"

function Skills() {
    return (
        <div className="w-full my-24 px-6 max-w-[1240px] grid place-items-center" id="skills">
            <div className="w-full flex flex-col">
                <h1 className="text-center text-5xl font-bold mb-7">MY SKILLS</h1>
                <div className="lg:flex justify-between items-center gap-10 p-5">
                    <div className="w-full lg:w-full">
                        <p className="text-center text-2xl font-semibold mb-4">Coding Skills</p>
                        <div className="w-full flex flex-col">
                            <div className="w-full mb-3">
                                <p className="ml-3 mb-2 text-lg font-semibold">HTML</p>
                                <div className="w-full h-5 p-1 bg-black rounded-full">
                                    <div class="w-[80%] h-full bg-white rounded-full px-3"></div>
                                </div>
                            </div>
                            <div className="w-full mb-3">
                                <p className="ml-3 mb-2 text-lg font-semibold">CSS</p>
                                <div className="w-full h-5 p-1 bg-black rounded-full">
                                    <div class="w-[70%] h-full bg-white rounded-full px-3"></div>
                                </div>
                            </div>
                            <div className="w-full mb-3">
                                <p className="ml-3 mb-2 text-lg font-semibold">JAVASCRIPT</p>
                                <div className="w-full h-5 p-1 bg-black rounded-full">
                                    <div class="w-[65%] h-full bg-white rounded-full px-3"></div>
                                </div>
                            </div>
                            <div className="w-full mb-3">
                                <p className="ml-3 mb-2 text-lg font-semibold">GIT</p>
                                <div className="w-full h-5 p-1 bg-black rounded-full">
                                    <div class="w-[50%] h-full bg-white rounded-full px-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-full mt-5 lg:mt-0">
                        <p className="text-center text-2xl font-semibold mb-4">Design Skills</p>
                        <div className="w-full flex flex-col">
                            <div className="w-full mb-3">
                                <p className="ml-3 mb-2 text-lg font-semibold">LOGO</p>
                                <div className="w-full h-5 p-1 bg-black rounded-full">
                                    <div class="w-[75%] h-full bg-white rounded-full px-3"></div>
                                </div>
                            </div>
                            <div className="w-full mb-3">
                                <p className="ml-3 mb-2 text-lg font-semibold">POSTER</p>
                                <div className="w-full h-5 p-1 bg-black rounded-full">
                                    <div class="w-[85%] h-full bg-white rounded-full px-3"></div>
                                </div>
                            </div>
                            <div className="w-full mb-3">
                                <p className="ml-3 mb-2 text-lg font-semibold">BANNER</p>
                                <div className="w-full h-5 p-1 bg-black rounded-full">
                                    <div class="w-[82%] h-full bg-white rounded-full px-3"></div>
                                </div>
                            </div>
                            <div className="w-full mb-3">
                                <p className="ml-3 mb-2 text-lg font-semibold">CARDNAME</p>
                                <div className="w-full h-5 p-1 bg-black rounded-full">
                                    <div class="w-[68%] h-full bg-white rounded-full px-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills