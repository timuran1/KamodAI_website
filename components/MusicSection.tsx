
import React, { useState, useRef, useEffect } from 'react';
import { SectionId, MusicTrack } from '../types';
import { SectionTitle } from './UIComponents';
import { Play, Pause, Disc, Activity, ExternalLink } from 'lucide-react';

const TRACKS: MusicTrack[] = [
    { 
        id: '1', 
        title: 'Мой Джахангир', 
        artist: 'ATIFA', 
        duration: '03:45', 
        // Tiger walking in jungle cover
        coverUrl: 'https://raw.githubusercontent.com/timuran1/MUSIC/main/covers/TIger.jpg', 
        waveformType: 'intense',
        audioUrl: 'https://raw.githubusercontent.com/timuran1/MUSIC/main/Мой%20Джахангир.mp3',
        externalUrl: 'https://audio.com/kamodai/audio/moi-dzahangir'
    },
    { 
        id: '2', 
        title: 'Золотой Плен', 
        artist: 'ATIFA', 
        duration: '03:20', 
        // Golden/Abstract cinematic cover
        coverUrl: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop', 
        waveformType: 'calm',
        audioUrl: 'https://raw.githubusercontent.com/timuran1/MUSIC/main/_ЗОЛОТОЙ%20ПЛЕН_.mp3'
    }
];

export const MusicSection: React.FC = () => {
    const [currentTrack, setCurrentTrack] = useState<string>(TRACKS[0].id);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const activeTrack = TRACKS.find(t => t.id === currentTrack);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => {
                    console.error("Playback failed:", e);
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrack]);

    const togglePlay = (id: string) => {
        if (currentTrack === id) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentTrack(id);
            setIsPlaying(true);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    return (
        <section id={SectionId.MUSIC} className="relative py-24 px-4 md:px-12 bg-midnight overflow-hidden">
             {/* Hidden Audio Element */}
             {activeTrack?.audioUrl && (
                 <audio 
                    ref={audioRef}
                    src={activeTrack.audioUrl}
                    onEnded={handleEnded}
                 />
             )}

             {/* Background Blobs */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orion/20 to-transparent"></div>

             <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2">
                    <SectionTitle title="AI Музыка" subtitle="Звуковой Интеллект" align="left" />
                    <p className="text-silver/80 font-sans mb-8 font-medium">
                        Откройте для себя будущее звука с нашими собственными музыкальными произведениями, улучшенными ИИ, от группы <span className="text-acid font-bold">ATIFA</span>.
                    </p>
                    
                    {/* Player Widget */}
                    <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group border border-white/20 shadow-2xl">
                         <div className="flex flex-col gap-6 mb-8">
                             <div className={`w-full aspect-square rounded-2xl overflow-hidden border-2 border-white/10 relative shadow-xl transition-all duration-700 ${isPlaying ? 'shadow-[0_0_50px_#CCFF00] border-acid' : ''}`}>
                                <img 
                                    src={activeTrack?.coverUrl} 
                                    alt="Cover" 
                                    className={`w-full h-full object-cover transition-transform duration-[10s] ${isPlaying ? 'scale-110' : 'scale-100'}`}
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                                
                                {/* Visualizer Bars Overlay (Fake) */}
                                {isPlaying && (
                                    <div className="absolute bottom-0 left-0 w-full h-1/3 flex items-end justify-center gap-1 px-4 pb-4 opacity-80">
                                        {[...Array(20)].map((_, i) => (
                                            <div 
                                                key={i} 
                                                className="w-1 bg-acid rounded-t-full animate-pulse"
                                                style={{ 
                                                    height: `${Math.random() * 100}%`,
                                                    animationDuration: `${0.2 + Math.random() * 0.5}s`
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                )}
                             </div>
                             <div>
                                 <h4 className="text-3xl font-display font-black text-white uppercase leading-none mb-2">{activeTrack?.title}</h4>
                                 <p className="text-acid text-sm font-mono uppercase">{activeTrack?.artist}</p>
                             </div>
                         </div>
                         
                         <div className="flex flex-col gap-3">
                             {activeTrack?.audioUrl ? (
                                 <button 
                                    className="w-full py-4 rounded-full bg-white text-midnight font-black uppercase tracking-widest hover:bg-acid transition-colors flex items-center justify-center gap-3 shadow-lg transform hover:scale-105 duration-300"
                                    onClick={() => togglePlay(currentTrack)}
                                 >
                                     {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" />}
                                     {isPlaying ? 'ПАУЗА' : 'СЛУШАТЬ'}
                                 </button>
                             ) : (
                                 <button disabled className="w-full py-4 rounded-full bg-white/20 text-white/50 font-bold uppercase cursor-not-allowed">
                                     Превью Недоступно
                                 </button>
                             )}

                             {activeTrack?.externalUrl && (
                                 <a 
                                    href={activeTrack.externalUrl} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="w-full py-3 rounded-full border border-white/20 text-white font-bold uppercase text-xs hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                                 >
                                     Слушать на Audio.com <ExternalLink size={14} />
                                 </a>
                             )}
                         </div>
                    </div>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-center">
                    <h3 className="text-white font-display font-bold uppercase mb-6 opacity-50 tracking-widest">Последние Релизы</h3>
                    <div className="space-y-3">
                        {TRACKS.map((track) => (
                            <div 
                                key={track.id} 
                                onClick={() => togglePlay(track.id)}
                                className={`group flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${currentTrack === track.id ? 'bg-white/10 border-acid/50 shadow-[0_0_20px_rgba(204,255,0,0.1)]' : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20'}`}
                            >
                                <div className={`w-14 h-14 flex items-center justify-center rounded-full border mr-6 transition-colors shrink-0 overflow-hidden ${currentTrack === track.id ? 'bg-acid text-midnight border-acid' : 'bg-midnight text-white border-white/10 group-hover:border-white'}`}>
                                    {currentTrack === track.id && isPlaying ? (
                                        <Activity size={24} className="animate-pulse" />
                                    ) : (
                                        <img src={track.coverUrl} alt="mini cover" className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                                    )}
                                </div>
                                
                                <div className="flex-grow min-w-0">
                                    <h5 className={`font-display font-bold text-lg uppercase truncate ${currentTrack === track.id ? 'text-white' : 'text-silver group-hover:text-white'}`}>{track.title}</h5>
                                    <p className="text-xs text-silver/60 font-mono">{track.artist}</p>
                                </div>

                                <div className="flex items-center gap-6 pl-4">
                                    <div className="hidden md:flex gap-1 items-end h-8 w-24 opacity-30 group-hover:opacity-100 transition-opacity">
                                         {/* Fake waveform */}
                                         {[...Array(12)].map((_, i) => (
                                             <div key={i} className={`w-1.5 rounded-full transition-all duration-300 ${currentTrack === track.id ? 'bg-acid' : 'bg-white'}`} style={{ height: `${Math.random() * 100}%` }}></div>
                                         ))}
                                    </div>
                                    <span className="text-sm font-bold text-silver">{track.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </section>
    );
};