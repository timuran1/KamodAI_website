import React from 'react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
    return (
        <section id={SectionId.HERO} className="relative h-[80vh] w-full overflow-hidden flex flex-col items-center justify-center pt-24">
            
            {/* Marquee Backgrounds */}
            <div className="absolute top-20 left-0 w-full opacity-5 rotate-[-5deg] z-0 pointer-events-none mix-blend-overlay">
                 <div className="whitespace-nowrap animate-marquee text-[12rem] font-display font-black text-stroke">
                     KAMOD AI STUDIO // KAMOD AI STUDIO // KAMOD AI STUDIO //
                 </div>
            </div>

            {/* Floating Blobs */}
            <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-acid rounded-full blur-[120px] opacity-10 animate-float"></div>
                 <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-hotpink rounded-full blur-[120px] opacity-10 animate-float-fast"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-6xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                    <div className="w-2 h-2 rounded-full bg-acid animate-pulse"></div>
                    <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase">TASHKENT // GENERATIVE REVOLUTION</span>
                </div>

                <h1 className="text-7xl md:text-[11rem] font-display font-black text-white tracking-tighter leading-[0.8] mb-8 uppercase italic">
                    KAMOD<span className="text-transparent bg-clip-text bg-gradient-to-r from-acid via-ice to-hotpink">AI</span>
                </h1>
            </div>

            {/* Vignette & Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#07182E_120%)] z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] z-0"></div>
        </section>
    );
};