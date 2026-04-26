import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Monitor } from 'lucide-react';

// --- ALL 17 LONG VIDEOS IMPORTS ---
import sichook1 from '../assets/longs/27sichook1.mov';
import sicshort1 from '../assets/longs/27sicshort1horizontal.mp4'; // Note: check extension if error
import ringads1 from '../assets/longs/ringads1.mp4';
// import mrCurio from '../assets/longs/ring118.mov';
import ringads2 from '../assets/longs/ringads2.mp4';
// import sarim from '../assets/longs/sarim.mov';

const LongVideos = ({ setSelectedContent }) => {
  const longVideosData = [
    { id: 502, title: 'The Hook Series: Part 1', localVideo: sichook1, type: 'Production', duration: '02:45', quality: 'HD' },
   { id: 506, title: 'SIC Horizontal Short', localVideo: sicshort1, type: 'Short Form', duration: '00:55', quality: 'HD' },
    // { id: 507, title: 'Mr. Curio: Masterclass', localVideo: mrCurio, type: 'Storytelling', duration: '10:15', quality: '4K' },
    // { id: 508, title: 'Sarim Special Cut', localVideo: sarim, type: 'Documentary', duration: '06:15', quality: '4K' },
      { id: 512, title: 'Ring Advertisement 01', localVideo: ringads1, type: 'Commercial', duration: '01:00', quality: '4K' },
    { id: 513, title: 'Ring Advertisement 02', localVideo: ringads2, type: 'Commercial', duration: '01:15', quality: 'HD' },
     ];

  return (
    <div id="long-form" className="py-24 px-8 bg-[#FFFFF0] font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-[#DAA520] text-sm font-black tracking-[0.5em] uppercase mb-4">Extended Cuts</h2>
          <h3 className="font-['Playfair_Display'] text-6xl font-black text-[#4B0082]">
            Long Form <span className="text-[#DAA520]">Content.</span>
          </h3>
          <p className="mt-4 text-[#4B0082]/60 font-medium">Total Productions: {longVideosData.length}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {longVideosData.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-[380px] rounded-[3rem] bg-neutral-900 overflow-hidden cursor-pointer shadow-2xl border border-[#4B0082]/10 flex flex-col justify-end"
              onClick={() => setSelectedContent(item)}
            >
              {/* Hover Video Preview */}
              <video 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-700"
                muted
                loop
                playsInline
                onMouseEnter={e => e.target.play()}
                onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0; }}
              >
                <source src={item.localVideo} type="video/mp4" />
                <source src={item.localVideo} type="video/quicktime" />
              </video>

              {/* Aesthetic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082] via-[#4B0082]/40 to-transparent" />

              {/* Badges */}
              <div className="absolute top-8 right-8 flex gap-3">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                  <Clock size={12} className="text-[#DAA520]" />
                  <span className="text-white text-[10px] font-bold">{item.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#DAA520] px-4 py-2 rounded-full shadow-lg">
                  <Monitor size={12} className="text-white" />
                  <span className="text-white text-[10px] font-black">{item.quality}</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative p-10 flex items-end justify-between gap-4">
                <div className="max-w-[70%]">
                  <p className="text-[#DAA520] text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.type}</p>
                  <h4 className="text-white text-2xl font-['Playfair_Display'] font-black leading-tight tracking-tight">
                    {item.title}
                  </h4>
                </div>
                
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#DAA520] group-hover:scale-110 transition-all duration-500 shadow-2xl flex-shrink-0">
                  <Play className="text-white fill-current translate-x-0.5" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(LongVideos);