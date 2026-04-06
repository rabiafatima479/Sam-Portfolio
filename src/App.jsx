import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cursor from './components/Cursor'; // Import Cursor
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import ClientRecord from './components/ClientRecord';

import { Contact } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="bg-[#FFFFF0] min-h-screen">
      <Cursor /> {/* Top par cursor rakhein */}
      <Navbar />
      <Hero />
      <About />
   <Journey/>
   <Portfolio/>
   <Testimonials/>
   <ClientRecord/>
   <ContactForm />
   <Footer />
    </div>
  );
}

export default App
