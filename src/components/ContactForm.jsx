import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ExternalLink, Camera } from 'lucide-react';

const ContactForm = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="text-white" size={28} />,
      label: "WhatsApp",
      value: "+92 314 8906032",
      link: "https://wa.me/923148906032", 
      color: "bg-[#25D366]",
      shadow: "shadow-[0_0_20px_rgba(37,211,102,0.4)]"
    },
    {
      icon: <Mail className="text-white" size={28} />,
      label: "Email",
      value: "hussan.sarim@gmail.com", 
      link: "mailto:hussan.sarim@gmail.com",
      color: "bg-[#4B0082]",
      shadow: "shadow-[0_0_20px_rgba(75,0,130,0.4)]"
    },
    {
      icon: <Camera className="text-white" size={28} />, 
      label: "Instagram",
      value: "@sarim_.dgaf", 
      link: "https://www.instagram.com/sarim_.dgaf?igsh=MXNhMmhkcDlxcnBtOQ%3D%3D&utm_source=qr",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      shadow: "shadow-[0_0_20px_rgba(238,42,123,0.4)]"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#FFFFF0] relative overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#DAA520]/10 rounded-full blur-[100px] md:blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#4B0082]/10 rounded-full blur-[100px] md:blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#DAA520] text-xs md:text-sm font-black tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4">Contact Me</h2>
            <h3 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-[#4B0082] leading-[1.1] mb-6 md:mb-8">
              Let’s build <br/> something <span className="text-[#DAA520]">Iconic.</span>
            </h3>
            <p className="text-[#4B0082]/70 text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-md">
              Available for collaborations and high-end creative projects. Let's make your vision a reality.
            </p>

            <div className="inline-flex items-center gap-4 p-4 bg-white/50 backdrop-blur-md border border-[#4B0082]/5 rounded-2xl text-[#4B0082] font-bold shadow-sm">
              <div className="w-10 h-10 bg-[#DAA520]/20 rounded-xl flex items-center justify-center">
                <MapPin size={20} className="text-[#DAA520]" />
              </div>
              <span className="tracking-tight text-sm md:text-base">Available Worldwide (Remote) 🌍</span>
            </div>
          </motion.div>

          {/* Cards Container: No changes to grid logic, just responsive spacing */}
          <div className="grid gap-4 md:gap-6 w-full">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 5 }}
                // Added overflow-hidden to card to stop text compression
                className="group flex items-center justify-between p-5 md:p-8 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] md:rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 ${method.color} ${method.shadow} rounded-xl md:rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500`}>
                    {/* Responsive icon size */}
                    <div className="scale-75 md:scale-100">{method.icon}</div>
                  </div>
                  {/* min-w-0 and truncate used to handle long emails on small screens */}
                  <div className="min-w-0">
                    <p className="text-[#DAA520] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-1">{method.label}</p>
                    <p className="text-[#4B0082] text-sm md:text-xl font-bold truncate">{method.value}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#4B0082]/10 flex items-center justify-center group-hover:bg-[#4B0082] group-hover:text-white transition-all duration-500 ml-2">
                  <ExternalLink size={18} className="md:w-[20px]" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;