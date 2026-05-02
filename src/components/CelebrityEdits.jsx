import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// 🖼️ Custom thumbnails
import cele1 from '../assets/cele/cele1.png';
import cele2 from '../assets/cele/cele2.png';
import cele3 from '../assets/cele/cele3.png';
import cele4 from '../assets/cele/cele4.png';
import cele5 from '../assets/cele/cele5.png';
import cele6 from '../assets/cele/cele6.png';
import cele7 from '../assets/cele/cele7.png';
import cele8 from '../assets/cele/cele8.png';
import cele9 from '../assets/cele/cele9.png';
import cele10 from '../assets/cele/cele10.png';
import cele11 from '../assets/cele/cele11.png';
import cele12 from '../assets/cele/cele12.png';

const CelebrityEdits = ({ setSelectedContent }) => {

  const editsData = [
    { id: 1, title: "Celebrity Edit 1", driveId: "1qgeS_pSP1H6Mqt3QZEXtE-puq7rBDG17", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele1 },
    { id: 2, title: "Celebrity Edit 2", driveId: "1nVoTKbhoLJXRaizLO9TortCiyTfh3gC-", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele2 },
    { id: 3, title: "Celebrity Edit 3", driveId: "1xfoSPsfmUbPnFQA6QWI2OR29Xt34xl7N", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele3 },
    { id: 4, title: "Celebrity Edit 4", driveId: "1aPEDSz_CMgKz6_KajOxsc6zHGthXRQ3k", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele4 },
    { id: 5, title: "Celebrity Edit 5", driveId: "1aWBCY3gqi9yNaOFsaozRSd9T86FG2OS3", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele5 },
    { id: 6, title: "Celebrity Edit 6", driveId: "1Uo_BynmhDDv7M2cj116cOa6AOzO5ZlPN", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele6 },
    { id: 7, title: "Celebrity Edit 7", driveId: "17SET3OUfziIH6XGBHi9H63RKckQpjCmd", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele7 },
    { id: 8, title: "Celebrity Edit 8", driveId: "1EvG1TZG9_5-pyy6q-YsXWOQ-RsrG3Q06", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele8 },
    { id: 9, title: "Celebrity Edit 9", driveId: "1kHvJTNA1VCw0OWhrcc4zwiOMnFsuAnpr", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele9 },
    { id: 10, title: "Celebrity Edit 10", driveId: "1P8bK0dL3m4a1yv0vM93rkF13B3X2AH8R", type: "Celebrity Edit", duration: "00:30", quality: "HD", thumb: cele10 },
    { id: 11, title: "Celebrity Edit 11", driveId: "1_XxXd7qK179Ypv7ofnigGbYh8YDr9XnM", type: "Celebrity Edit", thumb: cele11 },
    { id: 12, title: "Celebrity Edit 12", driveId: "1HGuP1g0jGTnVCAScKLcC712LWdJJpaaO", type: "Celebrity Edit", thumb: cele12 },
  ];

  return (
    <div id="celebrity-edits" className="py-24 px-8 bg-[#681EA4] font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-[#DAA520] text-sm font-black tracking-[0.5em] uppercase mb-4">
            Special Collection
          </h2>
          <h3 className="font-['Playfair_Display'] text-6xl font-black text-white">
            Celebrity <span className="text-[#DAA520]">Edits</span>
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {editsData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group relative h-[420px] rounded-[3rem] bg-black overflow-hidden cursor-pointer shadow-2xl"
              onClick={() => setSelectedContent?.(item)}
            >

              {/* ✅ ONLY CHANGE: CUSTOM THUMBNAIL */}
              <img
                src={item.thumb}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Play Button */}
              <div className="absolute top-6 right-6 bg-[#DAA520] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Play className="text-white" size={20} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-8">
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
                <p className="text-[#DAA520] text-xs">{item.type}</p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default memo(CelebrityEdits);