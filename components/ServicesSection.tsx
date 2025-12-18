import React from 'react';
import { SectionId } from '../types';
import { SectionTitle } from './UIComponents';
import { PlayCircle, Music, Boxes, Zap } from 'lucide-react';

const SERVICES = [
    { title: "AI Video Production", icon: <PlayCircle size={32} />, desc: "High-end cinematic visuals generated through custom neural pipelines." },
    { title: "Sonic Branding", icon: <Music size={32} />, desc: "AI-enhanced audio scores and reactive sound design for immersive experiences." },
    { title: "3D & Motion", icon: <Boxes size={32} />, desc: "Next-gen motion graphics combining standard tools with generative AI." },
    { title: "Innovation Lab", icon: <Zap size={32} />, desc: "R&D for brands looking to leverage AI at the core of their storytelling." }
];

export const ServicesSection: React.FC = () => {
    return (
        <section id={SectionId.SERVICES} className="relative py-24 px-4 md:px-12 bg-midnight border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Services" subtitle="Expertise" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service, idx) => (
                        <div 
                            key={idx} 
                            className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-acid/30 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-acid/10 border border-acid/20 flex items-center justify-center text-acid mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4 group-hover:text-acid transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-silver/60 text-sm leading-relaxed font-medium">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};