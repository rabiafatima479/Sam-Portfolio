import React from 'react';
import { motion } from 'framer-motion';
// Humne 'Instagram' ko hata kar 'Camera' use kiya hai taaki export error na aaye
// Agar aapka version 'Instagram' support nahi kar raha, toh Camera best alternative hai.
import { Mail, MessageCircle, Send, MapPin, ExternalLink, Camera } from 'lucide-react';

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
      // Yahan Instagram ki jagah Camera icon use ho raha hai for safety
      icon: <Camera className="text-white" size={28} />, 
      label: "Instagram",
      value: "@sarim_.dgaf", 
      link: "https://www.instagram.com/sarim_.dgaf?igsh=MXNhMmhkcDlxcnBtOQ%3D%3D&utm_source=qr",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      shadow: "shadow-[0_0_20px_rgba(238,42,123,0.4)]"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-[#FFFFF0] relative overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAA520]/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4B0082]/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#DAA520] text-sm font-black tracking-[0.5em] uppercase mb-4">Contact Me</h2>
            <h3 className="font-['Playfair_Display'] text-7xl font-black text-[#4B0082] leading-[1.1] mb-8">
              Let’s build <br/> something <span className="text-[#DAA520]">Iconic.</span>
            </h3>
            <p className="text-[#4B0082]/70 text-xl leading-relaxed mb-12 max-w-md">
              Available for collaborations and high-end creative projects. Let's make your vision a reality.
            </p>

            <div className="inline-flex items-center gap-4 p-4 bg-white/50 backdrop-blur-md border border-[#4B0082]/5 rounded-2xl text-[#4B0082] font-bold shadow-sm">
              <div className="w-10 h-10 bg-[#DAA520]/20 rounded-xl flex items-center justify-center">
                <MapPin size={20} className="text-[#DAA520]" />
              </div>
              <span className="tracking-tight">Available Worldwide (Remote) 🌍</span>
            </div>
          </motion.div>

          <div className="grid gap-6">
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
                whileHover={{ scale: 1.02, x: 10 }}
                className="group flex items-center justify-between p-8 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 ${method.color} ${method.shadow} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-[#DAA520] text-xs font-black uppercase tracking-[0.2em] mb-1">{method.label}</p>
                    <p className="text-[#4B0082] text-xl font-bold">{method.value}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#4B0082]/10 flex items-center justify-center group-hover:bg-[#4B0082] group-hover:text-white transition-all duration-500">
                  <ExternalLink size={20} />
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