import React, { useState } from 'react';
import { SectionId, MediaItem } from '../types';
import { SectionTitle } from './UIComponents';
import { X, ZoomIn } from 'lucide-react';

const PHOTOS: MediaItem[] = [
    { id: '1', title: 'Неоновый Дождь', category: 'Город', thumbnailUrl: 'https://github.com/timuran1/MUSIC/blob/main/covers/1-1.jpg?raw=true' },
    { id: '2', title: 'Нейро Лес', category: 'Природа', thumbnailUrl: 'https://github.com/timuran1/MUSIC/blob/main/covers/1-2.jpg?raw=true' },
    { id: '3', title: 'Кибер Портрет', category: 'Абстракция', thumbnailUrl: 'https://github.com/timuran1/MUSIC/blob/main/covers/1-3.jpg?raw=true' },
    { id: '4', title: 'Жидкий Огонь', category: 'Огонь', thumbnailUrl: 'https://github.com/timuran1/MUSIC/blob/main/covers/1-4.jpg?raw=true' },
    { id: '5', title: 'Будущий Ташкент', category: 'Город', thumbnailUrl: 'https://github.com/timuran1/MUSIC/blob/main/covers/1-5.jpg?raw=true' },
    { id: '6', title: 'Глитч Горы', category: 'Природа', thumbnailUrl: 'https://github.com/timuran1/MUSIC/blob/main/covers/1-6.jpg?raw=true' },
];

export const PhotographySection: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<MediaItem | null>(null);

    return (
        <section id={SectionId.PHOTO} className="relative py-24 px-4 md:px-12 bg-midnight overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionTitle title="AI Фотография" subtitle="Генеративное Видение" />

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {PHOTOS.map((photo) => (
                        <div 
                            key={photo.id}
                            className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer bg-navy border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(204,255,0,0.2)] hover:border-acid"
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-60 z-20"></div>
                            
                            <img 
                                src={photo.thumbnailUrl} 
                                alt={photo.title} 
                                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                            />
                            
                            <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                                <span className="inline-block px-3 py-1 rounded-full bg-acid text-midnight text-[10px] font-black uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {photo.category}
                                </span>
                                <h4 className="text-white font-display text-2xl font-black uppercase tracking-tight group-hover:text-acid transition-colors">{photo.title}</h4>
                            </div>

                            <div className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ZoomIn className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedPhoto && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight/95 backdrop-blur-2xl p-4 md:p-12">
                    <button 
                        onClick={() => setSelectedPhoto(null)}
                        className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-hotpink hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    
                    <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center">
                        <img 
                            src={selectedPhoto.thumbnailUrl} 
                            alt={selectedPhoto.title}
                            className="max-h-[80vh] w-auto rounded-2xl shadow-[0_0_100px_rgba(31,90,158,0.5)] border-2 border-white/10" 
                        />
                        <div className="mt-8 text-center">
                            <h3 className="text-4xl font-display font-black text-white uppercase">{selectedPhoto.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};