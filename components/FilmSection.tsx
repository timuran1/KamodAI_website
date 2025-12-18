import React, { useState } from 'react';
import { SectionId } from '../types';
import { SectionTitle, Button } from './UIComponents';
import { Play, X, Clock, Zap } from 'lucide-react';

interface FilmItem {
    id: number;
    title: string;
    duration: string;
    youtubeId: string;
    thumbnail: string;
    category: string;
}

const FILMS: FilmItem[] = [
    { 
        id: 1, 
        title: "United MFL: Будущее Футбола", 
        duration: "01:14", 
        youtubeId: "PGNpgP1xYec",
        thumbnail: "https://img.youtube.com/vi/PGNpgP1xYec/maxresdefault.jpg",
        category: "Promo / Sports"
    },
    { 
        id: 2, 
        title: "Ташкент 2077: Кибер-Видение", 
        duration: "01:30", 
        youtubeId: "qC0vDKVPCdA", // Placeholder visual music
        thumbnail: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop",
        category: "Concept Art"
    },
    { 
        id: 3, 
        title: "Цифровая Душа: Глава I", 
        duration: "03:45", 
        youtubeId: "PGNpgP1xYec", // Reusing for demo
        thumbnail: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
        category: "Short Film"
    },
    { 
        id: 4, 
        title: "Абстрактный Поток", 
        duration: "00:58", 
        youtubeId: "PGNpgP1xYec", // Reusing for demo
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        category: "Experimental"
    },
];

export const FilmSection: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<FilmItem | null>(null);

    return (
        <section id={SectionId.FILM} className="relative py-24 px-4 md:px-12 bg-navy overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-0 w-32 h-[200%] bg-orion/10 rotate-12 -translate-y-1/2 blur-3xl pointer-events-none"></div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-hotpink/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionTitle title="AI Кино" subtitle="Кинематографический Синтез" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {FILMS.map((film) => (
                        <div 
                            key={film.id} 
                            onClick={() => setActiveVideo(film)}
                            className="group relative aspect-video bg-black rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer shadow-2xl transition-all duration-500 hover:border-acid/50 hover:shadow-[0_0_60px_rgba(204,255,0,0.15)]"
                        >
                            <img 
                                src={film.thumbnail} 
                                alt={film.title} 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            
                            {/* Overlay UI */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-acid group-hover:scale-110 group-hover:shadow-[0_0_30px_#CCFF00] transition-all duration-500">
                                    <Play className="w-10 h-10 text-white fill-current ml-1 group-hover:text-midnight transition-colors" />
                                </div>
                            </div>

                            {/* Category Tag */}
                            <div className="absolute top-8 left-8">
                                <span className="px-4 py-1 rounded-full bg-midnight/60 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white group-hover:bg-acid group-hover:text-midnight group-hover:border-acid transition-all duration-300">
                                    {film.category}
                                </span>
                            </div>

                            {/* Card Data */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-2">
                                        <h3 className="text-3xl md:text-4xl font-display font-black text-white italic uppercase tracking-tighter leading-none group-hover:text-acid transition-colors">
                                            {film.title}
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 border border-white/5">
                                                <Zap size={10} className="text-acid" />
                                                <span className="text-silver text-[10px] font-bold tracking-widest uppercase">Veo-3 AI</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-silver/60">
                                                <Clock size={12} />
                                                <span className="text-[10px] font-bold uppercase">{film.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Neon Border on hover */}
                            <div className="absolute inset-0 border-2 border-acid/0 group-hover:border-acid/30 transition-all duration-500 rounded-[2rem] pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button variant="primary" icon onClick={() => window.open('https://t.me/kamod_ai', '_blank')}>
                        Заказать Видео-Продакшн
                    </Button>
                </div>
            </div>

            {/* Cinematic Video Lightbox */}
            {activeVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                    <div 
                        className="absolute inset-0 bg-midnight/95 backdrop-blur-3xl" 
                        onClick={() => setActiveVideo(null)}
                    ></div>
                    
                    <button 
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-8 right-8 z-[110] w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-hotpink hover:border-hotpink transition-all shadow-2xl"
                    >
                        <X size={28} />
                    </button>

                    <div className="relative w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-black animate-in zoom-in-95 duration-300">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`} 
                            title={activeVideo.title} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                        
                        {/* Title Overlay in Modal */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic tracking-tighter">
                                {activeVideo.title}
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};