import React, { useState } from 'react';
import { SectionId } from '../types';
import { SectionTitle } from './UIComponents';
import { Film, Music, Zap, Palette, Boxes } from 'lucide-react';

const CATEGORIES = [
    { title: 'КИНО', icon: <Film size={40} />, desc: 'Синтез Движения' },
    { title: 'МУЗЫКА', icon: <Music size={40} />, desc: 'Аудио Генерация' },
    { title: 'VFX', icon: <Zap size={40} />, desc: 'Симуляция' },
    { title: 'АРТ', icon: <Palette size={40} />, desc: 'Изобразительное Искусство' },
    { title: 'R&D', icon: <Boxes size={40} />, desc: 'Исследования' },
];

export const PortfolioHub: React.FC = () => {
    return (
        <section id={SectionId.PORTFOLIO} className="relative py-24 px-4 md:px-12 bg-midnight">
            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionTitle title="Хаб" subtitle="Категории" />
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {CATEGORIES.map((cat, idx) => (
                        <div 
                            key={idx} 
                            className="group relative h-64 bg-white/5 border border-white/10 hover:bg-acid hover:border-acid transition-all duration-300 rounded-3xl overflow-hidden flex flex-col items-center justify-center cursor-pointer"
                        >
                            <div className="relative z-10 text-white group-hover:text-midnight transition-colors duration-300 mb-4 transform group-hover:scale-110">
                                {cat.icon}
                            </div>
                            
                            <h3 className="relative z-10 text-2xl md:text-3xl font-display font-black text-white group-hover:text-midnight tracking-tighter transition-colors duration-300">
                                {cat.title}
                            </h3>
                            
                            <p className="relative z-10 mt-2 text-xs font-bold text-white/50 group-hover:text-midnight/70 uppercase tracking-wider">
                                {cat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};