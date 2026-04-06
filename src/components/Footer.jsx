import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Credentials
  const email = "hussan.sarim@gmail.com";
  const whatsappNumber = "923148906032"; 
  const instaLink = "https://www.instagram.com/sarim_.dgaf?igsh=MXNhMmhkcDlxcnBtOQ%3D%3D&utm_source=qr";
  const linkedinLink = "https://www.linkedin.com/in/sarim-siddiqui-5933a82b5";

  const socialLinks = [
    { name: "Instagram", url: instaLink },
    { name: "WhatsApp", url: `https://wa.me/${whatsappNumber}` },
    { name: "LinkedIn", url: linkedinLink }
  ];

  // Smooth Scroll Function
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#FFFFF0] pt-10 overflow-hidden">
      
      {/* Curved Shape Wrapper */}
      <div 
        className="relative bg-[#4B0082] pt-32 pb-12 px-8"
        style={{ 
          clipPath: 'ellipse(140% 100% at 50% 100%)', 
          backgroundColor: '#4B0082' 
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
            <div className="max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-white mb-6"
              >
                Let's make <br /> 
                <span className="text-[#DAA520]">Magic</span> happen.
              </motion.h2>
              <p className="text-white/60 text-lg font-medium max-w-sm">
                Focused on delivering high-end visual experiences and cinematic storytelling.
              </p>
            </div>

            {/* Big "Hire Me" Button -> Now scrolls to Contact */}
            <motion.button 
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-4 bg-[#DAA520] text-[#4B0082] px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:bg-white shadow-xl cursor-pointer"
            >
              Start a Project
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-['Playfair_Display'] text-2xl font-black text-white">
                S<span className="text-[#DAA520]">am.</span>
              </span>
              <p className="text-white/90 text-[10px] uppercase tracking-[0.3em] mt-2">
                © {currentYear} ALL RIGHTS RESERVED
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-8">
              {socialLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, color: "#DAA520" }}
                  className="text-white/50 transition-colors text-[11px] font-bold uppercase tracking-widest"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Built With */}
            <div className="hidden lg:block text-right">
              <p className="text-white/90 text-[10px] uppercase tracking-widest font-medium">
                Crafted with <span className="text-[#DAA520]">Passion</span> & Code
              </p>
            </div>
          </div>
        </div> {/* Yeh wahi div hai jo close nahi ho raha tha */}

        {/* Floating Background Glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#DAA520]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      </div>
    </footer>
  );
};

export default Footer;