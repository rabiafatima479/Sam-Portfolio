import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// Local Images
import ViralSocialMedia from '../assets/ads/1.png';
import DynamicProductShowcase from '../assets/ads/2.png';
import BrandAwarenessCampaign from '../assets/ads/3.png';
import PerformanceMarketingAd from '../assets/ads/4.png';
import ProfessionalProductVideo from '../assets/ads/5.png';
import CreativeVisualStory from '../assets/ads/6.png';
import AdCampaignHighlight from '../assets/ads/7.png';
import SocialMediaAdBoost from '../assets/ads/8.png';
import CreativeCommercialEdit from '../assets/ads/9.png';
import HighPerformanceAdVideo from '../assets/ads/10.png';
import EmotionalStorytellingCampaign from '../assets/ads/11.png';
import HighEndProductShowcase from '../assets/ads/12.png';

const AdsVideos = ({ setSelectedContent }) => {

  const adsData = [
    { id: 2, title: "Viral Social Media Reel", driveId: "1yuoPoH8AVKRDOS1xyOIrwPWy2Ol98rCR", type: "Short Form", duration: "00:45", quality: "HD", localImg: ViralSocialMedia },

    { id: 7, title: "Dynamic Product Showcase", driveId: "1DNUcn72w4_X4MYr04ZcbPaPM_M0HMnsG", type: "Product Ad", duration: "01:05", quality: "HD", localImg: DynamicProductShowcase },

    { id: 9, title: "Brand Awareness Campaign", driveId: "18MICeIElC8923Felf9vgh1ZszD5Zqht-", type: "Commercial", duration: "01:40", quality: "HD", localImg: BrandAwarenessCampaign },

    { id: 15, title: "Performance Marketing Ad", driveId: "1SwE_khbDDinW1D4BIr5iXsmmLWIGJsz1", type: "Ad Campaign", duration: "01:20", quality: "4K", localImg: PerformanceMarketingAd },

    { id: 16, title: "Professional Product Video", driveId: "1APRR_nTnWTp0IJbh6x-V5CNNLGic4i6o", type: "Product Ad", duration: "01:05", quality: "HD", localImg: ProfessionalProductVideo },

    { id: 18, title: "Creative Visual Story", driveId: "1iZiqDr-Vy4Nbb9K80zibPPc_AwYiERB7", type: "Storytelling", duration: "02:00", quality: "4K", localImg: CreativeVisualStory },

    { id: 19, title: "Ad Campaign Highlight", driveId: "13Mkq9rCtB7ZjudPShCh2Lv6s6ZUGm34b", type: "Commercial", duration: "01:25", quality: "HD", localImg: AdCampaignHighlight },

    { id: 22, title: "Social Media Ad Boost", driveId: "17EeBKnN4KzoYJ8laLruS6FGtRO4CO6I9", type: "Marketing", duration: "00:55", quality: "HD", localImg: SocialMediaAdBoost },

    { id: 24, title: "Creative Commercial Edit", driveId: "1HsKpht73fwJ3S0ex5PMuG_W7Skk7cxnV", type: "Commercial", duration: "01:10", quality: "HD", localImg: CreativeCommercialEdit },

    // Remaining items (no local images → fallback Drive)
    { id: 25, title: "High-Performance Ad Video", driveId: "1Ro20cYqd3KLr3TMM8JkI6fv6aFb8YI30", type: "Ad Campaign", duration: "01:30", quality: "4K", localImg: HighPerformanceAdVideo },
    { id: 27, title: "Emotional Storytelling Campaign", driveId: "1NEdY7JWxHJHhUSCxARZhS-gSaYR_lR5q", type: "Storytelling", duration: "02:15", quality: "4K", localImg: EmotionalStorytellingCampaign },
    { id: 28, title: "High-End Product Showcase", driveId: "1QSMfIUwxotSX4FYevtG1MELHNdVDZ6qI", type: "Product Ad", duration: "01:20", quality: "HD", localImg: HighEndProductShowcase },
    ];

  return (
    <div id="ads" className="py-24 px-8 bg-[#FFFFF0] font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[#DAA520] text-sm font-black tracking-[0.5em] uppercase mb-4">
            Commercial Work
          </h2>
          <h3 className="font-['Playfair_Display'] text-6xl font-black text-[#4B0082]">
            Premium <span className="text-[#DAA520]">Ads.</span>
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {adsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group relative h-[520px] rounded-[4rem] bg-neutral-900 overflow-hidden cursor-pointer shadow-2xl border border-[#4B0082]/5"
              onClick={() => setSelectedContent?.(item)}
            >

              {/* ✅ FIXED IMAGE SYSTEM (LOCAL + FALLBACK DRIVE) */}
              <img
                src={
                  item.localImg
                    ? item.localImg
                    : `https://drive.google.com/uc?export=view&id=${item.driveId}`
                }
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-700"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082] via-[#4B0082]/20 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end z-20">

                <div className="w-16 h-16 bg-[#DAA520] rounded-[1.5rem] flex items-center justify-center mb-6 shadow-2xl rotate-12 group-hover:rotate-0 transition-all duration-700">
                  <Play className="text-white fill-current" size={28} />
                </div>

                <span className="text-[#DAA520] text-[11px] font-black tracking-[0.4em] uppercase mb-2">
                  {item.type}
                </span>

                <h4 className="text-white text-3xl font-['Playfair_Display'] font-black leading-tight">
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