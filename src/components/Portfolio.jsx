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
import dudeMagicThumbnail from '../assets/DudeMagic.png';

// --- PREVIOUSLY ADDED THUMBNAILS ---
import henryTik from '../assets/henry.png';
import henrySwag from '../assets/henry1.png';
import halloweenImg from '../assets/hallowen.png';
import brandImg from '../assets/brand.png';
import henryBFG from '../assets/henryBF.png';
import henryC from '../assets/henryCaught.png';
import henryTrangG from '../assets/HenryTrang.png';
import henryTrangMain from '../assets/Henry BF Trang Trang.png';
import henryOk from '../assets/Henry BF OK Song.png';
import henryMika from '../assets/Henry BF Mikanika.png';
import kronosLeone from '../assets/Kronos vs Leone.png';
import leoneLonis from '../assets/Leone vs Lonis.png';
import animeHook from '../assets/Anime Hook Sale.png';
import kidsHook from '../assets/Kids Hook Sale.png';

// --- NEWLY ADDED THUMBNAILS ---
import brandoHookThumb from '../assets/Brando Hook Sales.png';
import ldragoPegasusThumb from '../assets/L-Drago vs Pegasus.png';
import textHookThumb from '../assets/Text Hook Sales.png';
import brandoUnbox50Thumb from '../assets/Brando Unboxing 50s.png';
import brandoUnbox15Thumb from '../assets/Brando Unboxing 15s.png';
import pegasusBullThumb from '../assets/Pegasus vs Bull.png';
import galaxyPegasusThumb from '../assets/Galaxy Pegasus vs Big Bang.png';
import nemesisPegasusThumb from '../assets/Nemesis vs Pegasus.png';
import halloweenAnimThumb from '../assets/Halloween Animation.png';
import brandoGiveaway2Thumb from '../assets/Brando Giveaway 2.png';
import kidsTransitionThumb from '../assets/Kids Transition BF.png';
import chrisBattleThumb from '../assets/Chris Battle.png';
import kidsBeybladeThumb from '../assets/Kids Playing Beyblade.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedContent, setSelectedContent] = useState(null);

  const iconMap = {
    video: <Play className="text-white fill-current" size={28} />,
    photo: <Camera className="text-white" size={28} />,
    design: <ImageIcon className="text-white" size={28} />
  };

  const projects = [
    { id: 1, category: 'video', title: 'Viral Reel Edit', type: 'Video Editing', driveId: '1sXXJQJBP-_QIOFWUIvOFzRcaDtO8-Z62', localImg: lifeImg },
    { id: 2, category: 'video', title: 'Cinematic Motion', type: 'Video Editing', driveId: '1u8EzJNcXYt4lyYmACMpGEGBF3zsGxswe', localImg: openingHookImg },

    // --- DRIVE VIDEOS WITH MAPPED THUMBNAILS ---
   
    { id: 206, category: 'video', title: 'Henry BF Caught', type: 'Short Form', driveId: '1Ew3j_Op-z39mZRPAoP4WCHADuyys571Q', localImg: henryC },
    { id: 207, category: 'video', title: 'Henry BF Trang Trang Giveaway', type: 'Short Form', driveId: '1cQatE3EoNWex6i7lwdk7H21mNz-OGR7y', localImg: henryTrangG },
    { id: 208, category: 'video', title: 'Henry BF Trang Trang', type: 'Short Form', driveId: '1H9eShHC4apYk1XKv2q3sG8ME6_dL6lGh', localImg: henryTrangMain },
    { id: 209, category: 'video', title: 'Henry BF OK Song', type: 'Short Form', driveId: '1tgItPbWaQADUQavlz958YMN-euFCmhCj', localImg: henryOk },
    { id: 210, category: 'video', title: 'Henry BF Mikanika', type: 'Short Form', driveId: '1NnPRS_et6oaNGFvbgd7XfQEUCplhGnKJ', localImg: henryMika },
    { id: 211, category: 'video', title: 'Kronos vs Leone', type: 'Battle Video', driveId: '1tlAkEWuwkduYjpHAAzC9RVnT5KTTLiGk', localImg: kronosLeone },
    { id: 212, category: 'video', title: 'Leone vs Lonis', type: 'Battle Video', driveId: '12hUg71egcs4RGIJZZ8vuhUYOEp5ccolf', localImg: leoneLonis },
    { id: 213, category: 'video', title: 'Anime Hook Sale', type: 'Sales Video', driveId: '1nIArOCvezHgjl7srYNpg52kD-wdSEh3T', localImg: animeHook },
    { id: 214, category: 'video', title: 'Kids Hook Sale', type: 'Sales Video', driveId: '1oqgNGd2NUPtCjTGxYmzOhc96oi1y7834', localImg: kidsHook },
    { id: 215, category: 'video', title: 'Brando Hook Sales', type: 'Sales Video', driveId: '1YMkE3EJRDNuXlsp6oAnLtP93Pg7iJf82', localImg: brandoHookThumb },
    { id: 216, category: 'video', title: 'L-Drago vs Pegasus', type: 'Battle Video', driveId: '1Wj7hXUtY7weKtCKNBYnrKxGslBOG9FEU', localImg: ldragoPegasusThumb },
    { id: 217, category: 'video', title: 'Text Hook Sales', type: 'Sales Video', driveId: '1Z1u5Vyug5MHSPbe9GxvkdniNCrV0H7Yz', localImg: textHookThumb },
    { id: 218, category: 'video', title: 'Brando Unboxing (50s)', type: 'Product Review', driveId: '1hbl1bVmZvB7p2MvfJ7KVkUhF_SJfW6KI', localImg: brandoUnbox50Thumb },
    { id: 219, category: 'video', title: 'Brando Unboxing (15s)', type: 'Product Review', driveId: '1UUK-tweINaIGIq77lmW7ByjBF6YJNj3p', localImg: brandoUnbox15Thumb },
    { id: 220, category: 'video', title: 'Pegasus vs Bull', type: 'Battle Video', driveId: '1d3Z0GbHLi1AhR9mJ-bey1PFxmFgPyuhD', localImg: pegasusBullThumb },
    { id: 221, category: 'video', title: 'Galaxy Pegasus vs Big Bang', type: 'Battle Video', driveId: '1zdwBR3HBL88USR_Lnjy-6ZXAHSUmgWEc', localImg: galaxyPegasusThumb },
    { id: 222, category: 'video', title: 'Nemesis vs Pegasus', type: 'Battle Video', driveId: '1zu_wywBcSDzLUAcXT4xoaEnEOpfJrjC8', localImg: nemesisPegasusThumb },
    { id: 223, category: 'design', title: 'Halloween Animation', type: 'Post', driveId: '1bDtRKUy8BcCFsei7vEBU9PGVKv4GjFf7', localImg: halloweenAnimThumb },
    { id: 224, category: 'video', title: 'Brando Giveaway #2', type: 'Video Editing', driveId: '17SvGVr2fW9OzXfMYQiTFe5XN7cce1YLQ', localImg: brandoGiveaway2Thumb },
    { id: 225, category: 'video', title: 'Kids Transition (BF)', type: 'Video Editing', driveId: '1_Hpb4hgZNb4EXs9RfB5rgbE1dtIOQMcc', localImg: kidsTransitionThumb },
    { id: 226, category: 'video', title: 'Chris Battle', type: 'Battle Video', driveId: '11xTaym1TsRx587YkCY73SIE_fZn3mhme', localImg: chrisBattleThumb },
    { id: 227, category: 'video', title: 'Kids Playing Beyblade', type: 'Voiceover Video', driveId: '1fihjRdmGXbYzvm79kfZflRbFbrBm_fZI', localImg: kidsBeybladeThumb },

   
    // --- DESIGN & PHOTOS ---
    { id: 7, category: 'design', title: 'Brand Poster', type: 'Design', driveId: '1ajyOFBl2rLSrQtn4aG0yCXYAOmCrxJGP', localImg: dudeMagicThumbnail },
    { id: 10, category: 'photo', title: 'Citrus Champ', type: 'Photography', localImg: citrusImg },
    { id: 11, category: 'photo', title: 'Lavender Legend', type: 'Render', localImg: lavenderImg },
    { id: 12, category: 'photo', title: 'Petal Power', type: 'Render', localImg: petalImg },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-[#FFFFF0] relative overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* Background Shapes */}
      <motion.div animate={{ x: [0, 50, 0], y: [0, 100, 0], rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#DAA520]/10 rounded-full blur-[120px] z-0" />
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
                {/* Image Display */}
                {item.localImg ? (
                    <img src={item.localImg} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" alt={item.title} />
                ) : item.localVideo ? (
                    <video className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all" muted loop onMouseEnter={e => e.target.play()} onMouseLeave={e => e.target.pause()}>
                        <source src={item.localVideo} type="video/mp4" />
                    </video>
                ) : (
                    <div className="absolute inset-0 w-full h-full bg-[#4B0082]/20 flex items-center justify-center text-white/20 italic">Video Preview</div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082] via-[#4B0082]/20 to-transparent" />

                <div className="absolute inset-0 p-12 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-15px]">
                  <div className="w-16 h-16 bg-[#DAA520] rounded-[1.5rem] flex items-center justify-center mb-6 shadow-2xl rotate-12 group-hover:rotate-0 transition-all duration-700">
                    {iconMap[item.category] || iconMap.video}
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