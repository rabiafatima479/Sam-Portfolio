import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, TrendingUp, X } from 'lucide-react';

const ClientRecord = () => {
  const stats = [
    { label: "Global Clients", value: "50+", icon: <Globe className="text-[#DAA520]" /> },
    { label: "Completion Rate", value: "100%", icon: <Award className="text-[#DAA520]" /> },
    { label: "Revenue Generated", value: "$10k+", icon: <TrendingUp className="text-[#DAA520]" /> },
  ];

  // Floating Animation for Shapes
  const floatAnim = {
    y: [0, -20, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section className="py-24 bg-[#FFFFF0] relative overflow-hidden">
      
      {/* --- BACKGROUND ABSTRACT SHAPES --- */}
      {/* Gold Circle (Top Left) */}
      <motion.div 
        animate={floatAnim}
        className="absolute -top-10 -left-10 w-40 h-40 bg-[#DAA520]/10 rounded-full blur-3xl"
      />
      
      {/* Purple Blob (Bottom Right) */}
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-20 -right-10 w-64 h-64 bg-[#4B0082]/5 rounded-full blur-[100px]"
      />

      {/* Small Decorative Dots */}
      <div className="absolute top-1/2 left-5 opacity-20 hidden md:block">
        <div className="grid grid-cols-2 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#4B0082] rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(75,0,130,0.05)" }}
              className="p-10 bg-white rounded-[2.5rem] border border-[#4B0082]/5 flex flex-col items-center text-center gap-6 group transition-all duration-500"
            >
              <div className="w-16 h-16 bg-[#4B0082]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(stat.icon, { size: 28 })}
              </div>
              <div>
                <h4 className="text-4xl font-black text-[#4B0082] mb-1">{stat.value}</h4>
                <p className="text-gray-400 text-[10px] uppercase font-black tracking-[0.3em]">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Spreadsheet Link Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center relative"
        >
          {/* Decorative Line */}
          <div className="w-20 h-1 bg-[#DAA520]/20 mx-auto mb-8 rounded-full" />
          
          <p className="text-[#4B0082]/60 text-sm mb-6 font-medium">Transparency is key. View the live record.</p>
          
          <motion.a 
            href="https://docs.google.com/spreadsheets/d/1CbNOYtGZUXhXK9YSg62QuAzfUMACKXVdaT1YjHL4jko/edit?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4B0082] text-white rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl shadow-[#4B0082]/20 hover:bg-[#DAA520] transition-colors duration-500"
          >
            Open Client Ledger <X className="rotate-45" size={16} strokeWidth={3}/>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientRecord;