import React from 'react';
import Marquee from 'react-fast-marquee';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-start h-screen pb-40 pl-[20vw]">
      <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
        Empowering Lives Through    <br/>Innovative AI Technologies.    
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
        Finding new horizons for visionaries to accelerate their innovation and progress.
      </p>
      <div className='flex justify-between items-center gap-4'>
        <button type="button" className="focus:outline-none text-white bg-[#6A35FF] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
          Explore Our Services
        </button>
        <button type="button" className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Learn More
        </button>
      </div>
      <Marquee style={{ width: '50vw' }} className=' text-white' autoFill='true' pauseOnHover='true' speed='75' gradient='true' gradientColor='#111111'> 
        {'From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions 🌟✨'}
      </Marquee>
    </div>
  );
}

export default Home;
