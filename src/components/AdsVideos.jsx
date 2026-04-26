import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// --- VIDEO ASSETS IMPORTS ---
import buy4get4temp3 from '../assets/ads/buy4get4temp3.mov';
import buy4get4video3square from '../assets/ads/buy4get4video3square.mov';
import buy4get4video4 from '../assets/ads/buy4get4video4.mov';
import buy4get4video4square from '../assets/ads/buy4get4video4square.mov';
import buy4get4video5 from '../assets/ads/buy4get4video5.mov';
import buy4get4video5square from '../assets/ads/buy4get4video5square.mov';
import freestadium1 from '../assets/ads/freestadium1.mp4';
import freestadium2 from '../assets/ads/freestadium2.mov';
import freestadium03 from '../assets/ads/freestadium03.mov';

// --- NEW THUMBNAIL IMPORTS ---
import thumbHook1 from '../assets/ads/thumbirvinhook1.png';
import thumbUnboxing from '../assets/ads/thumbirvinunboxing.png';
import thumbSquareFrame from '../assets/ads/thumbsquareframe.png';

const AdsVideos = ({ setSelectedContent }) => {
  const adsData = [
    { id: 301, title: 'Buy 4 Get 4 Temp 3', localVideo: buy4get4temp3, type: 'Product Ad' },
    { id: 302, title: 'Buy 4 Get 4 Video 3 Square', localVideo: buy4get4video3square, type: 'Social Media Ad' },
    { id: 303, title: 'Buy 4 Get 4 Video 4', localVideo: buy4get4video4, type: 'Commercial' },
    { id: 304, title: 'Buy 4 Get 4 Video 4 Square', localVideo: buy4get4video4square, type: 'Social Media Ad' },
    { id: 305, title: 'Buy 4 Get 4 Video 5', localVideo: buy4get4video5, type: 'Commercial' },
    { id: 306, title: 'Buy 4 Get 4 Video 5 Square', localVideo: buy4get4video5square, type: 'Social Media Ad' },
    { id: 307, title: 'Free Stadium V1', localVideo: freestadium1, type: 'Product Promo' },
    { id: 308, title: 'Free Stadium V2', localVideo: freestadium2, type: 'Product Promo' },
    { id: 309, title: 'Free Stadium 03', localVideo: freestadium03, type: 'Product Promo' },
  ];

  return (
    <div id="ads" className="py-24 px-8 bg-[#FFFFF0] font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-[#DAA520] text-sm font-black tracking-[0.5em] uppercase mb-4">Commercial Work</h2>
          <h3 className="font-['Playfair_Display'] text-6xl font-black text-[#4B0082]">
            Premium <span className="text-[#DAA520]">Ads.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {adsData.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -15 }}
              style={{ transformZ: 0 }} 
              className="group relative h-[520px] rounded-[4rem] bg-neutral-900 overflow-hidden cursor-pointer shadow-2xl border border-[#4B0082]/5"
              onClick={() => setSelectedContent(item)}
            >
              {/* Thumbnail Display (Logic from Portfolio.jsx) */}
              {item.localImg && (
                <img 
                  src={item.localImg} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-0 transition-opacity duration-500 z-10" 
                />
              )}

              {/* Video Preview */}
              <video 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={e => e.target.play().catch(() => {})}
                onMouseLeave={e => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              >
                <source src={item.localVideo} type="video/mp4" />
                <source src={item.localVideo} type="video/quicktime" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082] via-[#4B0082]/20 to-transparent z-20" />

              <div className="absolute inset-0 p-12 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px] z-30">
                <div className="w-16 h-16 bg-[#DAA520] rounded-[1.5rem] flex items-center justify-center mb-6 shadow-2xl rotate-12 group-hover:rotate-0 transition-all duration-700">
                  <Play className="text-white fill-current" size={28} />
                </div>
                
                <span className="text-[#DAA520] text-[11px] font-black tracking-[0.4em] uppercase mb-2 drop-shadow-md">
                  {item.type}
                </span>
                <h4 className="text-white text-3xl font-['Playfair_Display'] font-black leading-tight tracking-tight">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(AdsVideos);