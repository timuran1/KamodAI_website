import React from 'react';
import { SectionId } from '../types';
import { SectionTitle } from './UIComponents';
import { ArrowUpRight } from 'lucide-react';

const CASE_STUDIES = [
    {
        id: 1,
        title: "United MFL",
        tag: "Hybrid Video",
        image: "https://img.youtube.com/vi/PGNpgP1xYec/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=PGNpgP1xYec"
    },
    {
        id: 2,
        title: "DJ NEURO",
        tag: "Virtual Influencer",
        image: "https://img.youtube.com/vi/bzFLIaDtqdQ/maxresdefault.jpg",
        link: "https://www.youtube.com/shorts/bzFLIaDtqdQ"
    },
    {
        id: 3,
        title: "Moy Jahangir",
        tag: "Music Video",
        image: "https://img.youtube.com/vi/Z6ITRsfLsRg/maxresdefault.jpg",
        link: "https://youtu.be/Z6ITRsfLsRg?si=4i15XgVKFjTVD8gJ"
    },
    {
        id: 4,
        title: "ZOLOTOY PLEN",
        tag: "AI Production",
        image: "https://img.youtube.com/vi/JO8Z8FNhr34/maxresdefault.jpg",
        link: "https://youtu.be/JO8Z8FNhr34"
    }
];

export const WorkSection: React.FC = () => {
    return (
        <section id={SectionId.WORK} className="relative py-24 px-4 md:px-12 bg-navy">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Work" subtitle="Case Studies" align="left" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CASE_STUDIES.map((study) => (
                        <div 
                            key={study.id} 
                            className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-midnight border border-white/5 cursor-pointer shadow-2xl"
                            onClick={() => window.open(study.link, '_blank')}
                        >
                            <img 
                                src={study.image} 
                                alt={study.title} 
                                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-6 space-y-2">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-black text-acid uppercase tracking-widest">
                                    {study.tag}
                                </span>
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tighter leading-none">
                                        {study.title}
                                    </h3>
                                    <div className="w-8 h-8 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};