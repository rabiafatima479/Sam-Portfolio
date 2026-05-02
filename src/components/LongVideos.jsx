import React, { memo } from 'react';
import { motion } from 'framer-motion';

const LongVideos = ({ setSelectedContent }) => {
  const longVideosData = [
    { id: 1, title: "High-Converting Product Ad", driveId: "1Ym7bASZgTJnOwbOYjU6GXL-_5XNOZf2j", type: "Production", duration: "02:45", quality: "HD" },

    { id: 2, title: "Scroll-Stopping Social Reel", driveId: "1VZo2uAlNo9O6a9SkJutJL-E5UXm9dIN-", type: "Short Form", duration: "00:55", quality: "HD" },

    { id: 3, title: "Cinematic Brand Commercial", driveId: "164DNuXDg7nhwGTfIZA4BNQvyms3vvi-r", type: "Commercial", duration: "01:00", quality: "4K" },

    { id: 4, title: "Premium Ad Campaign Cut", driveId: "180rG_vTN0tzuXAl823A6OUzpyXiZK8B_", type: "Commercial", duration: "01:15", quality: "HD" },

    { id: 5, title: "Engaging Promo Video Edit", driveId: "1lbNVe5e1OOSNfgzUvvvVWRtIymJYe9jL", type: "Promo", duration: "01:30", quality: "HD" },

    { id: 7, title: "Story-Driven Brand Film", driveId: "188VSBZAkUHGGQFIjK1_zQezdEs7aLdSm", type: "Storytelling", duration: "02:10", quality: "4K" },

    { id: 8, title: "Viral Short Content Edit", driveId: "1cz6fOISL38nrJrPnl9BnEryo8iA3FEix", type: "Short Form", duration: "00:50", quality: "HD" },

    { id: 10, title: "Performance Marketing Video", driveId: "1uzu0z7V5_XGE1wgV4ODK4F9pgCF2Z-t-", type: "Commercial", duration: "01:25", quality: "HD" }
  ];

  return (
    <div id="long-form" className="py-24 px-8 bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <h3 className="text-5xl font-black text-[#4B0082]">
            Long Form <span className="text-[#DAA520]">Content</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {longVideosData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group relative h-[380px] rounded-[3rem] bg-neutral-900 overflow-hidden cursor-pointer"
              onClick={() => setSelectedContent?.(item)}   // ✅ FIX 1 (prevents crash)
            >

              {/* Drive Preview */}
              <iframe
                src={`https://drive.google.com/file/d/${item.driveId}/preview`}
                className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-20 pointer-events-none"  // ✅ FIX 2
                allow="autoplay"
                title={item.title}   // ✅ FIX 3 (React warning fix)
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082] via-[#4B0082]/40 to-transparent" />

              {/* Badges */}
              <div className="absolute top-6 right-6 flex gap-2">
                <div className="bg-black/40 px-3 py-1 rounded-full text-white text-xs">
                  {item.duration}
                </div>
                <div className="bg-[#DAA520] px-3 py-1 rounded-full text-white text-xs">
                  {item.quality}
                </div>
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

export default memo(LongVideos);