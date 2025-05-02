import React from 'react'

function HeroSection() {
  return (
    <div>
        <div className=" flex flex-col text-center p-4 justify-center items-center h-[90vh] bg-gray-800 text-white" style={{
            backgroundImage: `url('/src/assets/bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',

        }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Project</h1>
            <p className="text-lg my-8">Your one-stop solution for all your project needs.</p>
            <button className="btn">Get Started</button>
        </div>
    </div>
  )
}

export default HeroSection