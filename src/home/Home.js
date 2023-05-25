import Mainfoto from '../image/ahy.jpg'

function Home() {
    return (
        <div className="w-full py-10 lg:py-16 grid place-items-center" id='home'>
            <div class="w-[80%] h-full mt-[150px] md:mt-10 lg:flex justify-around items-center">
                <div className='w-full mb-5 lg:mb-0'>
                    <img src={Mainfoto} alt="main-foto" className="w-[320px] object-cover ml-8 lg:ml-20 rounded-lg shadow-lg" />
                </div>
                <div className='w-full p-5'>
                    <h1 className='text-7xl font-bold '>Ridlo Ghifary.</h1>
                    <h2 className='text-2xl font-semibold mb-3'>Designer & Coders</h2>
                    <p className='font-light mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab soluta nobis magni nostrum dolor tenetur necessitatibus nihil omnis cumque, repellat ipsa consectetur est architecto blanditiis. Itaque eum eos nobis provident repellat architecto assumenda perspiciatis sapiente quaerat aliquam. Eligendi, omnis.</p>
                    <a href='https://wa.me/6285730225564' className=' bg-[#7e7b79] px-7 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-black'>Contact me</a>
                </div>
            </div>
        </div >
    )
}

export default Home