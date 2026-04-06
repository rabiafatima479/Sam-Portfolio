import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Music, Dumbbell } from 'lucide-react';

const Testimonials = () => {
  const review = {
    name: "Phoebe",
    role: "Fitness Influencer / Gym Owner",
    content: "Sarim's gym content work is top-notch! The way he handles nutrition-based videos and gym edits is amazing. The animations always hit the right spots and the background music choices are incredibly attractive. It really brought my brand to life!",
    stars: 5
  };

  return (
    <section className="py-24 bg-[#FFFFF0] overflow-hidden">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#DAA520] text-sm font-black tracking-[0.4em] uppercase mb-4">Client Feedback</h2>
          <h3 className="font-['Playfair_Display'] text-5xl font-black text-[#4B0082]">What People <span className="text-[#DAA520]">Say.</span></h3>
        </div>

        {/* Phoebe's Review Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-[#4B0082]/5"
        >
          {/* Decorative Quote Icon */}
          <div className="absolute -top-6 -left-6 bg-[#DAA520] p-5 rounded-2xl shadow-xl rotate-[-10deg]">
            <Quote size={32} className="text-white" />
          </div>

          <div className="flex flex-col items-center text-center">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} size={20} fill="#DAA520" className="text-[#DAA520]" />
              ))}
            </div>

            {/* Review Content */}
            <p className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl text-[#4B0082] font-medium italic leading-relaxed mb-8">
              "{review.content}"
            </p>

            {/* Tags/Skills Highlighted */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <span className="flex items-center gap-2 bg-[#4B0082]/5 px-4 py-2 rounded-full text-[#4B0082] text-xs font-bold uppercase tracking-wider">
                <Dumbbell size={14} /> Gym Content
              </span>
              <span className="flex items-center gap-2 bg-[#4B0082]/5 px-4 py-2 rounded-full text-[#4B0082] text-xs font-bold uppercase tracking-wider">
                <Music size={14} /> Sound Design
              </span>
            </div>

            {/* Client Info */}
            <div className="border-t border-[#4B0082]/10 pt-8 w-full">
              <h4 className="text-2xl font-black text-[#4B0082]">{review.name}</h4>
              <p className="text-[#DAA520] font-bold text-sm uppercase tracking-widest mt-1">{review.role}</p>
            </div>
          </div>

          {/* Background Glow inside card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#DAA520]/5 rounded-full blur-3xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;