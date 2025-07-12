import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
return (
    <main className='relative w-full h-screen overflow-hidden'>
      <Link to={"/forum"} c>
            <div className='absolute inset-0 z-0 w-full h-full'>
                    <Spline
            scene="https://prod.spline.design/ID-rNOJgKi48jWhl/scene.splinecode" 
        />
            </div>
            </Link>
            
        
        <section className="pt-[70px] relative top-1 z-10 min-h-screen flex overflow-hidden pointer-events-none items-end">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative  z-10">
            <div className="grid grid-cols-1  gap-6 items-center">
                {/* Left Column */}
                <div className="text-center ">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
                        Your Questions,{" "}
                        <span className="bg-gradient-to-r from-purple-700 to-pink-600  text-white bg-clip-text mb-2 text-transparent">
                            Our Community
                        </span>
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl text-white mx-auto">
                        Join millions of curious minds sharing knowledge
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-5">
                        <button
                            className="px-8 py-3 mx-auto text-lg font-semibold rounded-full whitespace-nowrap cursor-pointer
                                text-white 
                                transition-all transform hover:scale-105
                                relative overflow-hidden animate-bounce flex gap-5
                                
                                "
                           
                        >
                            <i className="fas fa-chevron-down text-white text-3xl "></i>
                            <span className="relative z-10">Scroll down to Get Started</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </main>
);
}

export default Hero;

