import React from 'react';
import { Logo } from './UIComponents';
import { Send, Mail } from 'lucide-react';
import { SectionId } from '../types';

export const Footer: React.FC = () => {
    return (
        <footer id={SectionId.CONTACT} className="bg-black pt-32 pb-12 px-4 md:px-12 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="mb-12">
                    <Logo size="lg" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic tracking-tighter mb-12 max-w-2xl leading-tight">
                    Leading the <span className="text-acid">Generative Revolution</span> from Tashkent.
                </h2>

                <a 
                    href="mailto:hello@kamod.ai" 
                    className="text-4xl md:text-7xl font-display font-black text-white hover:text-acid transition-colors flex items-center gap-4 mb-16 break-all"
                >
                    hello@kamod.ai
                </a>

                <button 
                    onClick={() => window.open('https://t.me/kamod_ai', '_blank')}
                    className="group px-12 py-5 rounded-full bg-orion hover:bg-hotpink text-white text-sm font-black uppercase tracking-[0.3em] transition-all flex items-center gap-4 shadow-[0_0_50px_rgba(31,90,158,0.3)]"
                >
                    <Send size={20} className="-rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    TELEGRAM CHANNEL
                </button>

                <div className="mt-32 w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-silver/30 uppercase tracking-[0.2em]">
                    <p>© 2025 KAMOD AI. TASHKENT OFFICE.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                        <a href="#" className="hover:text-white transition-colors">TWITTER / X</a>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-acid rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        </footer>
    );
};