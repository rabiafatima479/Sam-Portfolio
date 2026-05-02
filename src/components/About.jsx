import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#FFFFF0] px-8 overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* Background Shapes */}
      <div className="absolute top-10 -left-20 w-80 h-80 border-[20px] border-[#4B0082]/5 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-[10%] w-20 h-20 bg-[#DAA520]/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-[5%] w-16 h-16 bg-[#4B0082]/10 rotate-12 rounded-xl"></div>
      <div className="absolute bottom-20 -right-10 w-48 h-48 border-2 border-[#DAA520] rounded-full opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Stats Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#DAA520] rounded-tl-3xl"></div>
            
            <div className="relative bg-[#4B0082]/5 border border-[#4B0082]/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-xl transition-all duration-500 group-hover:shadow-[#4B0082]/10">
              <h3 className="font-['Playfair_Display'] text-6xl font-black text-[#4B0082] mb-2">4+</h3>
              <p className="text-[#DAA520] font-black tracking-[0.3em] uppercase text-[10px] mb-8">
                Years of Digital Craft
              </p>
              
              <div className="space-y-6 text-[#4B0082] font-medium leading-relaxed">
                <p className="text-lg">
                  I started my journey as a creator at <span className="font-black">age 14</span>. 
                  While others were just scrolling, I was mastering the science of digital attention.
                </p>
                <div className="pt-6 border-t border-[#4B0082]/20">
                  <p className="italic text-[#4B0082]/80">
                    "High-end visuals aren't just seen, they are felt."
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white border-2 border-[#DAA520] p-5 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-10 h-10 bg-[#4B0082] rounded-full flex items-center justify-center text-white font-bold text-xs">
                OK
              </div>
              <div>
                <p className="text-[#4B0082] font-black text-xl leading-none">100+</p>
                <p className="text-[9px] font-bold text-[#DAA520] uppercase tracking-widest">Global Projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-[#DAA520]"></div>
              <span className="text-[#4B0082] text-[10px] font-black tracking-[0.5em] uppercase">
                The Architect
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-black text-[#4B0082] leading-[1.1] mb-8">
              Crafting Stories That <span className="text-[#DAA520]">Convert.</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              I am Sarim Siddique. I don't just "edit" videos or "design" posts; I build 
              visual identities. My 4 years in the game have taught me that **Strategy** is what makes **Creativity** profitable.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Cinematic Storytelling', color: '#4B0082' },
                { title: 'Conversion-Focused Design', color: '#DAA520' },
                { title: 'Algorithm-Driven SEO', color: '#4B0082' }
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div 
                    style={{ backgroundColor: skill.color }} 
                    className="w-3 h-3 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500"
                  ></div>
                  <span className="text-[#4B0082] font-extrabold text-sm tracking-wider uppercase group-hover:text-[#DAA520] transition-colors">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;