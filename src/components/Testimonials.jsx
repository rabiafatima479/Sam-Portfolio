import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Music, Dumbbell, Zap, Target } from 'lucide-react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Phoebe",
      role: "Fitness Influencer / Gym Owner",
      content: "Sarim's gym content work is top-notch! The way he handles nutrition-based videos and gym edits is amazing. The animations always hit the right spots and the background music choices are incredibly attractive.",
      stars: 5,
      tags: [<Dumbbell size={14} key="db" />, "Gym Content", <Music size={14} key="mu" />, "Sound Design"],
      isReal: true
    },
    {
      name: "Marcus Chen",
      role: "Tech Startup Founder",
      content: "We needed a visual identity that felt high-end but modern. Sarim delivered beyond expectations. His editing style is clean, sharp, and most importantly, it hooks the audience immediately.",
      stars: 5,
      tags: [<Zap size={14} key="zp" />, "Visual Identity", <Target size={14} key="tg" />, "Audience Hook"],
      isReal: false
    },
    {
      name: "Elena Rodriguez",
      role: "Lifestyle Content Creator",
      content: "Working with Sarim was a game-changer. He understands the algorithm better than anyone I've worked with. My engagement rate jumped by 40% after we started implementing his edit styles.",
      stars: 5,
      tags: [<Target size={14} key="tg2" />, "Growth Strategy", <Zap size={14} key="zp2" />, "Viral Edits"],
      isReal: false
    }
  ];

  // Auto-play logic: 1 Minute (60000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 60000); 
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="testimonials" className="relative py-24 bg-[#FFFFF0] overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* --- Background Shapes --- */}
      <motion.div 
        animate={{ rotate: 360, y: [0, 20, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[15%] opacity-20 z-0"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M50 5 L95 85 L5 85 Z" stroke="#DAA520" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-[10%] w-40 h-40 bg-[#4B0082] rounded-full blur-[80px] z-0"
      />
      
        <motion.div 
        animate={{ rotate: 360, y: [0, 20, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[15%] opacity-20 z-0"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M50 5 L95 85 L5 85 Z" stroke="#DAA520" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <motion.div 
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/3 left-[8%] w-12 h-12 border-4 border-[#DAA520]/20 rounded-full z-0"
      />

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#DAA520] text-sm font-black tracking-[0.4em] uppercase mb-4">Client Feedback</h2>
          <h3 className="font-['Playfair_Display'] text-5xl md:text-6xl font-black text-[#4B0082]">Trust & <span className="text-[#DAA520]">Results.</span></h3>
        </div>

        <div className="relative min-h-[480px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className={`relative p-10 md:p-16 rounded-[3.5rem] shadow-2xl border bg-white/90 backdrop-blur-sm 
                ${reviews[index].isReal ? 'border-[#DAA520]/30' : 'border-[#4B0082]/10'}`}>
                
                <div className="absolute -top-6 -left-6 bg-[#DAA520] p-5 rounded-2xl shadow-xl rotate-[-10deg]">
                  <Quote size={28} className="text-white" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-8">
                    {[...Array(reviews[index].stars)].map((_, i) => (
                      <Star key={i} size={20} fill="#DAA520" className="text-[#DAA520]" />
                    ))}
                  </div>

                  <p className="text-[#4B0082] font-medium italic text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
                    "{reviews[index].content}"
                  </p>

                  <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {reviews[index].tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-2 bg-[#4B0082]/5 px-4 py-2 rounded-full text-[#4B0082] text-xs font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-[#4B0082]/10 pt-8 w-full">
                    <h4 className="text-2xl font-black text-[#4B0082]">{reviews[index].name}</h4>
                    <p className="text-[#DAA520] font-bold text-sm uppercase tracking-widest mt-1">
                      {reviews[index].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-12 flex gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === i ? 'w-12 bg-[#DAA520]' : 'w-3 bg-[#4B0082]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;