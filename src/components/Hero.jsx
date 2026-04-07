import React from 'react';
import { motion } from 'framer-motion';
import samImg from '../assets/sam.png'; 

const Hero = () => {
  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="bg-[#FFFFF0] min-h-screen flex items-center px-6 md:px-8 font-['Plus_Jakarta_Sans'] overflow-hidden pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-left z-10"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block bg-[#4B0082] text-white text-[9px] md:text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-md"
          >
            4+ Years of Experience
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-black mt-6 leading-[1.1] text-[#4B0082] italic"
          >
            I'm <span className="text-[#DAA520] not-italic">Sarim Siddique</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-2xl text-[#4B0082] mt-6 font-medium border-l-4 border-[#DAA520] pl-4 italic"
          >
            Video Creator | Canva Expert | SEO Specialist
          </motion.p>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-md"
          >
            Helping brands dominate social media since age 14. I specialize in high-end visuals and organic growth strategies.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-10"
          >
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-[#4B0082] hover:bg-[#3a0066] text-white px-8 md:px-10 py-4 rounded-full font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95 tracking-wide text-xs md:text-sm"
            >
              VIEW MY WORK
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white px-8 md:px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 text-xs md:text-sm"
            >
              GET IN TOUCH
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-first md:order-last"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 bg-[#4B0082] rounded-full blur-[80px] md:blur-[120px] absolute opacity-10 -z-10 animate-pulse left-1/2 -translate-x-1/2"></div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="border-[8px] md:border-[12px] border-white p-1.5 md:p-2 rounded-[2rem] overflow-hidden shadow-2xl bg-white relative max-w-[320px] md:max-w-none mx-auto"
          >
            <div className="absolute top-4 right-4 bg-[#DAA520] text-white p-2 rounded-full z-10 shadow-lg scale-75 md:scale-100">
              ⭐
            </div>
            
            <img 
              src={samImg} 
              alt="Sarim Siddique" 
              className="rounded-[1.5rem] w-full h-[350px] md:h-[500px] object-cover transition-all duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;