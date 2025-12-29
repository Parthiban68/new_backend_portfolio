
import React from 'react';
import { Send, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#0A0A0A] py-24 md:py-32 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[800px] h-full md:h-[800px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-20">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mono">Get in touch</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] md:leading-[0.9] tracking-tighter">
            LET'S BUILD <br className="hidden sm:block" /> SOMETHING <br className="hidden sm:block" /> <span className="text-blue-600 italic uppercase">ICONIC.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-12 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/5">
             <div className="flex items-center justify-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="mono text-[10px] md:text-xs tracking-widest uppercase text-white/60">parthibanm1268@gmail.com</span>
             </div>
             <div className="flex items-center justify-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="mono text-[10px] md:text-xs tracking-widest uppercase text-white/60">+91 8754131978</span>
             </div>
          </div>
        </div>

        <form className="space-y-10 md:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-3 md:space-y-4">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mono">01 / Full Name</span>
              <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-xl md:text-2xl font-medium focus:border-blue-600 outline-none transition-all placeholder:text-white/5"/>
            </div>
            <div className="space-y-3 md:space-y-4">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mono">02 / Email</span>
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-xl md:text-2xl font-medium focus:border-blue-600 outline-none transition-all placeholder:text-white/5"/>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 mono">03 / Message</span>
            <textarea rows={1} placeholder="Details..." className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-xl md:text-2xl font-medium focus:border-blue-600 outline-none transition-all placeholder:text-white/5 resize-none"></textarea>
          </div>

          <div className="flex flex-col items-center gap-6 md:gap-8 pt-8 md:pt-12">
            <button className="group relative w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Send className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 border border-blue-600 rounded-full animate-ping opacity-20"></div>
            </button>
            <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-white/40 mono">Send message</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
