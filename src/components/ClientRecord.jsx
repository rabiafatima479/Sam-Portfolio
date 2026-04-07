import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, TrendingUp, X } from 'lucide-react';

const ClientRecord = () => {
  const stats = [
    { label: "Global Clients", value: "50+", icon: <Globe className="text-[#DAA520]" /> },
    { label: "Completion Rate", value: "100%", icon: <Award className="text-[#DAA520]" /> },
    { label: "Revenue Generated", value: "$10k+", icon: <TrendingUp className="text-[#DAA520]" /> },
  ];

  return (
    <section className="py-24 bg-[#FFFFF0] relative overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* --- DARK SOLID SHAPES (Using #4B0082) --- */}
      
      {/* 1. Solid Dark Indigo Circle (Top Right) */}
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 w-64 h-64 bg-[#4B0082] rounded-full opacity-10 z-0"
      />

      {/* 2. Rotated Dark Square (Middle Left) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 -left-12 w-40 h-40 bg-[#4B0082] rounded-[3rem] opacity-[0.07] rotate-12 z-0"
      />

    

      {/* 4. Small Dark Accent Circle (Right Center) */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 right-[10%] w-20 h-20 bg-[#4B0082] rounded-full opacity-[0.08] z-0"
      />

  

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px -12px rgba(75,0,130,0.15)" }}
              className="p-10 bg-white/90 backdrop-blur-md rounded-[3rem] border border-[#4B0082]/10 flex flex-col items-center text-center gap-6 group transition-all duration-500 hover:border-[#DAA520]/40"
            >
              <div className="w-16 h-16 bg-[#4B0082]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#DAA520]/10 transition-all duration-500">
                {React.cloneElement(stat.icon, { size: 28 })}
              </div>
              <div>
                <h4 className="text-4xl font-black text-[#4B0082] mb-1 tracking-tight">{stat.value}</h4>
                <p className="text-[#4B0082]/60 text-[10px] uppercase font-black tracking-[0.4em]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Link Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center relative"
        >
          <div className="w-24 h-1.5 bg-[#DAA520]/20 mx-auto mb-10 rounded-full" />
          
          <p className="text-[#4B0082]/60 text-sm mb-8 font-semibold italic tracking-wide">Transparency is key. View the live record.</p>
          
          <motion.a 
            href="https://docs.google.com/spreadsheets/d/1CbNOYtGZUXhXK9YSg62QuAzfUMACKXVdaT1YjHL4jko/edit?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-[#4B0082] text-white rounded-full font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl shadow-[#4B0082]/30 hover:bg-[#DAA520] transition-all duration-500"
          >
            Open Client Ledger <X className="rotate-45" size={18} strokeWidth={3}/>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientRecord;