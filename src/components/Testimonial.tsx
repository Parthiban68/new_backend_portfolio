
import React from 'react';
import { X } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
           <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 border-b border-gray-100 pb-4 mb-12">Client Feedback</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-black leading-[1.1]">
              “I just wanted to share a quick note and let you know that you guys do a really good job.
            </h2>
            
            <div className="space-y-1">
              <p className="text-xl font-bold">Rohan Sing</p>
              <p className="text-gray-400 text-sm">Project Manager, Airflow Tech Inc</p>
            </div>

            <div className="flex space-x-2">
               {[...Array(4)].map((_, i) => (
                 <svg key={i} className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                   <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               ))}
            </div>
          </div>

          <div className="relative flex justify-center">
             <div className="w-[400px] h-[400px] star-mask bg-gray-100 shadow-2xl overflow-hidden rotate-[15deg]">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" 
                  alt="Client" 
                  className="w-full h-full object-cover -rotate-[15deg] scale-125"
                />
             </div>
             
             {/* Abstract Decorations */}
             <div className="absolute top-0 right-0">
               <X className="w-12 h-12 text-gray-200" strokeWidth={1} />
             </div>
             <div className="absolute -bottom-10 left-10">
                <svg width="100" height="40" viewBox="0 0 100 40">
                  <path d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20 T100,20" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                  <path d="M0,30 Q10,20 20,30 T40,30 T60,30 T80,30 T100,30" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
