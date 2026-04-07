import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Journey = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotateShape = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const milestones = [
    { year: '2022', title: 'The Launch', desc: 'Age 14 par safar shuru kiya. Designing aur editing ki basics ko master kiya.' },
    { year: '2023', title: 'Growing Skills', desc: 'YT SEO aur Digital Marketing mein dive kiya. Local clients ke liye results generate kiye.' },
    { year: '2024', title: 'Brand Scaling', desc: 'Multiple channels manage kiye aur organic growth strategies develop kin.'},
    { year: '2025', title: 'Digital Architect', desc: 'Modern brands ki visual identity build ki aur workflow ko optimize kiya.'},
    { year: '2026', title: 'The Expert', desc: 'Ab ek complete Digital Specialist ke taur par brands ko dominate kar raha hoon.' }
  ];

  return (
    <section id="journey" className="py-20 md:py-32 bg-[#FFFFF0] relative overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* --- Floating Background Elements --- */}
      <motion.div 
        style={{ y: y1 }} 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -right-20 w-[300px] md:w-[450px] h-[300px] md:h-[450px] border-[2px] border-[#4B0082]/40 rounded-full -z-0" 
      />
      <motion.div 
        style={{ y: y2, rotate: rotateShape }} 
        className="absolute top-[30%] -left-16 w-32 h-32 md:w-44 md:h-44 bg-[#4B0082]/25 rounded-[3rem] -z-0 shadow-2xl blur-sm" 
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading with Stagger Effect */}
        <div className="text-center mb-24 md:mb-40">
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.6em" }}
            transition={{ duration: 1 }}
            className="text-[#DAA520] text-xs md:text-sm font-black uppercase mb-4"
          >
            Evolution
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-[#4B0082]"
          >
            The Journey<span className="text-[#DAA520]">.</span>
          </motion.h3>
        </div>

        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-[#4B0082]/10 rounded-full"></div>

          {/* Animated Glowing Fill Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-[#DAA520] via-[#4B0082] to-[#DAA520] origin-top rounded-full z-10 shadow-[0_0_15px_rgba(218,165,32,0.6)]"
          />

          <div className="space-y-24 md:space-y-44">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center w-full md:justify-between flex-row md:${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
              >
                
                {/* Content Card with Hover Animation */}
                <motion.div 
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -5 : 5 }}
                  className="w-[85%] md:w-[45%] group ml-10 md:ml-0 perspective-1000"
                >
                  <div className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-[#4B0082]/10 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:border-[#DAA520]/50 group-hover:shadow-[#4B0082]/10 ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                    
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-[#DAA520] font-black text-4xl md:text-5xl font-['Playfair_Display']">{item.year}</span>
                    </div>

                    <h4 className="text-[#4B0082] text-xl md:text-2xl font-black mb-3 group-hover:text-[#DAA520] transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium opacity-80 group-hover:opacity-100">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Animated Indicator Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute left-2 md:left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-white border-[6px] border-[#4B0082] rounded-full z-20 flex items-center justify-center shadow-xl"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-3 h-3 bg-[#DAA520] rounded-full"
                  />
                </motion.div>

                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;