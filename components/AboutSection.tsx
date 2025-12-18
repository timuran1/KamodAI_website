import React from 'react';
import { SectionId } from '../types';
import { SectionTitle } from './UIComponents';

export const AboutSection: React.FC = () => {
    return (
        <section id={SectionId.ABOUT} className="relative py-32 px-4 md:px-12 bg-navy overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orion rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-acid rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-acid to-orion rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
                            <img 
                                src="https://raw.githubusercontent.com/timuran1/MUSIC/main/covers/kamodlogo.jpg" 
                                alt="Kamod AI" 
                                className="relative z-10 w-full aspect-square object-cover rounded-full border-2 border-white/10 shadow-2xl"
                            />
                        </div>
                    </div>
                    
                    <div className="w-full md:w-2/3 space-y-8">
                        <div className="inline-block px-3 py-1 rounded-full border border-acid/30 bg-acid/10 text-acid text-[10px] font-black uppercase tracking-[0.2em]">
                            Manifesto
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight uppercase italic tracking-tighter">
                            Blending Experience <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-ice">With Innovation</span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-silver text-xl md:text-2xl font-sans leading-relaxed font-light">
                                <span className="text-white font-bold">Kamod AI</span> is a creative studio that uses advanced artificial intelligence to produce cinematic videos, visuals, and music for brands and storytellers.
                            </p>
                            
                            <p className="text-silver/80 text-lg md:text-xl font-sans leading-relaxed border-l-2 border-acid/30 pl-6 py-2">
                                It combines <span className="text-white font-semibold">15+ years of filmmaking experience</span> with next‑generation AI tools to deliver fast, high‑quality content for commercials, social media, and cultural projects.
                            </p>
                        </div>

                        <div className="flex gap-8 pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-display font-black text-acid">15+</span>
                                <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">Years Experience</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-display font-black text-ice">Gen-3</span>
                                <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">AI Pipeline</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-display font-black text-white">4K+</span>
                                <span className="text-[10px] text-silver/60 uppercase font-bold tracking-widest">Resolution</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};