import React, { useState, useEffect } from 'react';
import { Logo } from './UIComponents';
import { SectionId } from '../types';
import { Menu, X, Send } from 'lucide-react';

export const Navigation: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: SectionId) => {
        setMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${
                    isScrolled ? 'pt-4' : 'pt-6'
                }`}
            >
                <div className={`
                    flex items-center justify-between px-6 py-2 rounded-full transition-all duration-500
                    ${isScrolled 
                        ? 'w-[98%] md:w-[85%] bg-midnight/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
                        : 'w-full max-w-7xl bg-transparent border-transparent'}
                `}>
                    
                    {/* Desktop Logo */}
                    <div className="flex-shrink-0">
                        <Logo size="sm" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {[
                            { label: 'SERVICES', id: SectionId.SERVICES },
                            { label: 'WORK', id: SectionId.WORK },
                            { label: 'PLAY', id: SectionId.PLAY },
                            { label: 'LAB', id: SectionId.LAB },
                        ].map((item) => (
                            <button 
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="px-4 py-2 rounded-full text-[10px] font-display font-black transition-all uppercase text-silver hover:text-white hover:bg-white/5 tracking-widest"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <button 
                            onClick={() => window.open('https://t.me/kamod_ai', '_blank')}
                            className="px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-midnight bg-gradient-to-r from-acid via-ice to-hotpink hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                        >
                            HIRE US
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden text-white p-2 rounded-full hover:bg-white/10"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-midnight transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-8 flex flex-col h-full relative overflow-hidden">
                    <div className="flex justify-between items-center mb-12">
                         <Logo size="sm" />
                         <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 rounded-full border border-white/20">
                             <X size={24} />
                         </button>
                    </div>
                    
                    <div className="flex flex-col gap-8 items-start">
                        {[
                            { label: 'SERVICES', id: SectionId.SERVICES },
                            { label: 'WORK', id: SectionId.WORK },
                            { label: 'PLAY', id: SectionId.PLAY },
                            { label: 'LAB', id: SectionId.LAB },
                        ].map((item, idx) => (
                            <button 
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="text-5xl font-display font-black text-white hover:text-acid uppercase italic tracking-tighter"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <button 
                            onClick={() => window.open('https://t.me/kamod_ai', '_blank')}
                            className="w-full py-5 rounded-full text-sm font-black uppercase tracking-widest text-midnight bg-acid mb-8"
                        >
                            HIRE US
                        </button>
                        <p className="text-silver/50 text-xs font-mono uppercase tracking-widest">
                            KAMOD AI // TASHKENT 2025
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};