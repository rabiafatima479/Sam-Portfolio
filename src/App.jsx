import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cursor from './components/Cursor';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import AdsVideos from './components/AdsVideos';
import LongVideos from './components/LongVideos'; // <--- Naya Import
import ClientRecord from './components/ClientRecord';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <div className="bg-[#FFFFF0] min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Journey />
      
      {/* Teeno sections mein state pass kar di */}
      <Portfolio setSelectedContent={setSelectedContent} />
      <AdsVideos setSelectedContent={setSelectedContent} />
      
      <Testimonials />
      <ClientRecord />
      <ContactForm />
      <Footer />

      {/* --- UNIVERSAL VIDEO MODAL --- */}
      <AnimatePresence>
        {selectedContent && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedContent(null)}
          >
            <button 
              className="absolute top-5 right-5 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-[#DAA520] rounded-full text-white flex items-center justify-center shadow-2xl z-[10000] hover:scale-110 transition-transform"
              onClick={() => setSelectedContent(null)}
            >
              <X size={32} strokeWidth={3} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl aspect-video rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-black shadow-[0_0_50px_rgba(75,0,130,0.3)] border border-white/10"
              onClick={e => e.stopPropagation()} 
            >
              {selectedContent.localVideo ? (
                <video 
                  key={selectedContent.id} // Key zaruri hai taaki video refresh ho
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                >
                  <source src={selectedContent.localVideo} type="video/mp4" />
                  <source src={selectedContent.localVideo} type="video/quicktime" />
                </video>
              ) : (
                <iframe 
                  src={`https://drive.google.com/file/d/${selectedContent.driveId}/preview`} 
                  className="w-full h-full border-none" 
                  allow="autoplay"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;