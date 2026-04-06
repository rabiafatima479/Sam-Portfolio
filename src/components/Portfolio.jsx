import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Image as ImageIcon, Camera } from 'lucide-react';

// --- IMAGE ASSETS ---
import citrusImg from '../assets/Citrus Champ_Cleaner_2oz.jpg';
import lavenderImg from '../assets/Lavender Legend_Deodorizer_render_2oz.jpg';
import petalImg from '../assets/Petal Power_Deodorizer_render_4oz.jpg';
import lifeImg from '../assets/life.png'; 
import openingHookImg from '../assets/openinghook.png'; 
import img1852Thumbnail from '../assets/IMG1852.png'; 
import img2225Thumbnail from '../assets/IMG2225.png';
import dudeMagicThumbnail from '../assets/DudeMagic.png'; // 1. Yahan import kiya

// --- VIDEO ASSETS ---
import v1566 from '../assets/IMG_1566.MOV';
import v1852 from '../assets/IMG_1852.MOV';
import v1876 from '../assets/IMG_1876.MOV';
import v2078 from '../assets/IMG_2078.MOV';
import v2225 from '../assets/IMG_2225.MOV';
import vPheobe from '../assets/pheobe4.mp4';
import vLv from '../assets/lv_7353990464778833170_20251025051223.mp4';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedContent, setSelectedContent] = useState(null);

  const iconMap = {
    video: <Play className="text-white fill-current" size={28} />,
    photo: <Camera className="text-white" size={28} />,
    design: <ImageIcon className="text-white" size={28} />
  };

  const projects = [
    // --- DRIVE VIDEOS WITH CUSTOM THUMBNAILS ---
    { 
      id: 1, 
      category: 'video', 
      title: 'Viral Reel Edit', 
      type: 'Video Editing', 
      driveId: '1sXXJQJBP-_QIOFWUIvOFzRcaDtO8-Z62',
      localImg: lifeImg 
    },
    { 
      id: 2, 
      category: 'video', 
      title: 'Cinematic Motion', 
      type: 'Video Editing', 
      driveId: '1u8EzJNcXYt4lyYmACMpGEGBF3zsGxswe',
      localImg: openingHookImg 
    },

    // --- LOCAL VIDEOS ---
    { id: 101, category: 'video', title: 'Creative Cut 1566', type: 'Video Editing', localVideo: v1566 },
    { 
      id: 102, 
      category: 'video', 
      title: 'Cinematic Shot 1852', 
      type: 'Video Editing', 
      localVideo: v1852,
      localImg: img1852Thumbnail 
    },
    { id: 103, category: 'video', title: 'Dynamic Motion 1876', type: 'Video Editing', localVideo: v1876 },
    { id: 104, category: 'video', title: 'VFX Showcase 2078', type: 'Video Editing', localVideo: v2078 },
    { 
      id: 105, 
      category: 'video', 
      title: 'Action Reel 2225', 
      type: 'Video Editing', 
      localVideo: v2225,
      localImg: img2225Thumbnail 
    },
    { id: 106, category: 'video', title: 'Pheobe Special', type: 'Video Editing', localVideo: vPheobe },
    { id: 107, category: 'video', title: 'Premium Render', type: 'Video Editing', localVideo: vLv },
    
    // --- DESIGN & PHOTOS ---
    { 
      id: 7, 
      category: 'design', 
      title: 'Brand Poster', 
      type: 'Design', 
      driveId: '1ajyOFBl2rLSrQtn4aG0yCXYAOmCrxJGP',
      localImg: dudeMagicThumbnail // 2. Yahan thumbnail apply kardi
    },
    { id: 10, category: 'photo', title: 'Citrus Champ', type: 'Photography', localImg: citrusImg },
    { id: 11, category: 'photo', title: 'Lavender Legend', type: 'Render', localImg: lavenderImg },
    { id: 12, category: 'photo', title: 'Petal Power', type: 'Render', localImg: petalImg },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-[#FFFFF0] relative overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* Background Shapes */}
      <motion.div animate={{ x: [0, 50, 0], y: [0, 100, 0], rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#DAA520]/10 rounded-full blur-[120px] z-0" />
      <motion.div animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-1/4 right-10 w-40 h-40 border-4 border-[#4B0082]/10 rounded-[2rem] z-0 hidden md:block" />
      <motion.div animate={{ y: [0, -100, 0], x: [0, 50, 0] }} transition={{ duration: 18, repeat: Infinity }} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} className="absolute bottom-1/4 left-10 w-32 h-32 bg-[#4B0082]/5 z-0" />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-[#4B0082]/10 rounded-full blur-[150px] z-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-[#DAA520] text-sm font-black tracking-[0.5em] uppercase mb-4">Portfolio</h2>
            <h3 className="font-['Playfair_Display'] text-6xl font-black text-[#4B0082]">The <span className="text-[#DAA520]">Vault.</span></h3>
          </div>

          <div className="flex flex-wrap gap-3 bg-white/60 p-2 rounded-full border border-[#4B0082]/10 backdrop-blur-2xl shadow-2xl">
            {['all', 'video', 'design', 'photo'].map((tab) => (
              <button key={tab} onClick={() => setFilter(tab)} className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-500 ${filter === tab ? 'bg-[#4B0082] text-white shadow-xl scale-105' : 'text-[#4B0082] hover:bg-[#DAA520]/10'}`}>{tab}</button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -20 }}
                className="group relative h-[520px] rounded-[4rem] overflow-hidden cursor-pointer bg-neutral-900 shadow-2xl border border-white/5"
                onClick={() => setSelectedContent(item)}
              >
                {/* Thumbnail Display Logic */}
                {item.localVideo ? (
                  <>
                    {item.localImg ? (
                      <img src={item.localImg} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" alt={item.title} />
                    ) : (
                      <video className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all" muted loop onMouseEnter={e => e.target.play()} onMouseLeave={e => e.target.pause()}>
                        <source src={item.localVideo} type="video/mp4" />
                      </video>
                    )}
                  </>
                ) : (
                  <img 
                    src={item.localImg || `https://googleusercontent.com/profile/picture/2${item.driveId}=s800`} 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" 
                    alt={item.title} 
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082] via-[#4B0082]/20 to-transparent" />

                <div className="absolute inset-0 p-12 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-15px]">
                  <div className="w-16 h-16 bg-[#DAA520] rounded-[1.5rem] flex items-center justify-center mb-6 shadow-2xl rotate-12 group-hover:rotate-0 transition-all duration-700">
                    {iconMap[item.category]}
                  </div>
                  <span className="text-[#DAA520] text-[11px] font-black tracking-[0.4em] uppercase mb-2">{item.type}</span>
                  <h4 className="text-white text-3xl font-['Playfair_Display'] font-black leading-tight tracking-tight">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Window */}
        <AnimatePresence>
          {selectedContent && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6" onClick={() => setSelectedContent(null)}>
              <button className="absolute top-10 right-10 w-16 h-16 bg-[#DAA520] rounded-full text-white flex items-center justify-center shadow-2xl z-[2100]">
                <X size={32} strokeWidth={3} />
              </button>
              
              <div className="w-full max-w-6xl aspect-video rounded-[3.5rem] overflow-hidden bg-black shadow-2xl border border-white/10" onClick={e => e.stopPropagation()}>
                {selectedContent.localVideo ? (
                  <video controls autoPlay className="w-full h-full">
                    <source src={selectedContent.localVideo} type="video/mp4" />
                  </video>
                ) : (
                  <iframe src={`https://drive.google.com/file/d/${selectedContent.driveId}/preview`} className="w-full h-full border-none" allow="autoplay" title="Drive Content" />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;