import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Journey = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring for smooth line animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // HIGH SPEED PARALLAX: Shapes move fast on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotateShape = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const milestones = [
    { year: '2022', title: 'The Launch', desc: 'Age 14 par safar shuru kiya. Designing aur editing ki basics ko master kiya.', icon: '🚀' },
    { year: '2023', title: 'Growing Skills', desc: 'YT SEO aur Digital Marketing mein dive kiya. Local clients ke liye results generate kiye.', icon: '🎨' },
    { year: '2024', title: 'Brand Scaling', desc: 'Multiple channels manage kiye aur organic growth strategies develop kin.', icon: '📈' },
    { year: '2025', title: 'Digital Architect', desc: 'Modern brands ki visual identity build ki aur workflow ko optimize kiya.', icon: '🏆' },
    { year: '2026', title: 'The Expert', desc: 'Ab ek complete Digital Specialist ke taur par brands ko dominate kar raha hoon.', icon: '✨' }
  ];

  return (
    <section id="journey" className="py-32 bg-[#FFFFF0] relative overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* --- EXTRA DARK & FAST SHAPES --- */}
      <motion.div style={{ y: y1 }} className="absolute top-20 -right-20 w-[450px] h-[450px] border-[2px] border-[#4B0082]/40 rounded-full -z-0" />
      <motion.div style={{ y: y2, rotate: rotateShape }} className="absolute top-[30%] -left-16 w-44 h-44 bg-[#4B0082]/25 rounded-[3rem] -z-0 shadow-2xl" />
      <motion.div style={{ y: y1, rotate: -45 }} className="absolute top-[60%] right-[5%] w-32 h-32 border-[10px] border-[#DAA520]/40 rounded-lg -z-0" />
      <motion.div style={{ y: y2 }} className="absolute bottom-10 left-20 w-64 h-64 bg-[#4B0082]/15 blur-[100px] rounded-full -z-0" />
      
      {/* Dark Dots Side Pattern */}
      <div className="absolute top-1/4 left-10 opacity-60 hidden md:block">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 bg-[#4B0082] rounded-full mb-6 shadow-md"></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-40">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#DAA520] text-sm font-black tracking-[0.6em] uppercase mb-4">Evolution</motion.h2>
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="font-['Playfair_Display'] text-7xl font-black text-[#4B0082]">The Journey<span className="text-[#DAA520]">.</span></motion.h3>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* ✅ FIXED VERTICAL LINE: Bilkul wese hi jese pehle thi */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#4B0082]/20 rounded-full"></div>

          {/* ✅ ANIMATED FILL LINE: Jo static line ke upar move karegi */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-[#DAA520] to-[#4B0082] origin-top rounded-full z-10 shadow-[0_0_20px_rgba(218,165,32,0.4)]"
          />

          <div className="space-y-40">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "circOut" }}
                className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                
                {/* Content Card */}
                <div className="w-[42%] group">
                  <div className={`p-10 rounded-[3rem] border-2 border-[#4B0082]/10 bg-white/80 backdrop-blur-3xl shadow-2xl transition-all duration-500 hover:border-[#DAA520] hover:-translate-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-[#DAA520] font-black text-6xl font-['Playfair_Display'] block mb-2">{item.year}</span>
                    <h4 className="text-[#4B0082] text-2xl font-black mb-3">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed font-bold opacity-70">{item.desc}</p>
                  </div>
                </div>

                {/* Center Circle Indicator */}
                <motion.div 
                  whileInView={{ scale: [0, 1.5, 1] }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-4 border-[#4B0082] rounded-full z-20 flex items-center justify-center shadow-2xl"
                >
                  <div className="w-3 h-3 bg-[#DAA520] rounded-full animate-ping"></div>
                </motion.div>

                <div className="w-[42%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;