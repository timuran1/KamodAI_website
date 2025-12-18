import React, { useState, useRef } from 'react';
import { SectionId } from '../types';
import { SectionTitle, Button } from './UIComponents';
import { Wand2, Image as ImageIcon, Upload, Loader2, Download, X, Plus } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

type LabMode = 'generate' | 'edit';
type AspectRatio = '1:1' | '4:3' | '16:9' | '9:16';

export const AILab: React.FC = () => {
    const [mode, setMode] = useState<LabMode>('generate');
    const [prompt, setPrompt] = useState('');
    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');
    
    // Multi-image state
    const [referenceImages, setReferenceImages] = useState<string[]>([]);
    
    const [resultMedia, setResultMedia] = useState<{ type: 'image', url: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const newImages: string[] = [];
            const remainingSlots = 10 - referenceImages.length;
            // Fix: Cast to File[] to ensure the type is correct for FileReader
            const filesToProcess = Array.from(files).slice(0, remainingSlots) as File[];

            if (filesToProcess.length === 0) return;

            let processedCount = 0;
            filesToProcess.forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (typeof reader.result === 'string') {
                        newImages.push(reader.result);
                    }
                    processedCount++;
                    if (processedCount === filesToProcess.length) {
                        setReferenceImages(prev => [...prev, ...newImages]);
                        setResultMedia(null); // Clear previous result
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removeImage = (index: number) => {
        setReferenceImages(prev => prev.filter((_, i) => i !== index));
    };

    const getBase64Data = (dataUrl: string) => {
        return dataUrl.split(',')[1];
    };

    const getMimeType = (dataUrl: string) => {
        return dataUrl.substring(dataUrl.indexOf(':') + 1, dataUrl.indexOf(';'));
    };

    // Feature 1: Generate Image with Imagen 4
    const generateImage = async () => {
        if (!prompt) return;
        setLoading(true);
        setStatus('Создаем образ...');
        setResultMedia(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: prompt,
                config: {
                    numberOfImages: 1,
                    outputMimeType: 'image/jpeg',
                    aspectRatio: aspectRatio, 
                },
            });

            const base64ImageBytes = response.generatedImages[0].image.imageBytes;
            const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
            setResultMedia({ type: 'image', url: imageUrl });
        } catch (error) {
            console.error(error);
            setStatus('Ошибка генерации. Попробуйте снова.');
        } finally {
            setLoading(false);
        }
    };

    // Feature 2: Edit Image with Gemini 2.5 Flash Image (Nano Banana) with Multi-Image Support
    const editImage = async () => {
        if (!prompt || referenceImages.length === 0) return;
        setLoading(true);
        setStatus('Обработка пикселей...');
        setResultMedia(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Construct parts: Images first, then text prompt
            const parts: any[] = [];
            
            referenceImages.forEach(img => {
                parts.push({
                    inlineData: {
                        data: getBase64Data(img),
                        mimeType: getMimeType(img),
                    },
                });
            });

            parts.push({ text: prompt });

            // Fix: Re-initialized instance right before call and removed responseModalities for nano banana model
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: {
                    parts: parts,
                }
            });

            // Extract image from response by iterating through parts
            let imageUrl = '';
            const candidates = response.candidates;
            if (candidates && candidates[0]?.content?.parts) {
                for (const part of candidates[0].content.parts) {
                    if (part.inlineData) {
                        const base64ImageBytes = part.inlineData.data;
                        imageUrl = `data:image/png;base64,${base64ImageBytes}`;
                        break;
                    }
                }
            }

            if (imageUrl) {
                setResultMedia({ type: 'image', url: imageUrl });
            } else {
                // If the model refuses to generate an image and returns text (e.g. refusal)
                if (candidates && candidates[0]?.content?.parts[0]?.text) {
                    setStatus('Модель вернула текст вместо изображения.');
                } else {
                    setStatus('Изображение не получено.');
                }
            }
        } catch (error) {
            console.error(error);
            setStatus('Ошибка редактирования. Попробуйте снова.');
        } finally {
            setLoading(false);
        }
    };

    const handleAction = () => {
        if (mode === 'generate') generateImage();
        if (mode === 'edit') editImage();
    };

    return (
        <section id={SectionId.LAB} className="relative py-24 px-4 md:px-12 bg-midnight border-t border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-acid/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto">
                <SectionTitle title="Kamod AI LAB" subtitle="Создавай и Экспериментируй" />

                <div className="glass-panel rounded-[3rem] p-8 md:p-12 border border-white/20 shadow-[0_0_50px_rgba(31,90,158,0.2)]">
                    
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button 
                            onClick={() => { setMode('generate'); setResultMedia(null); setPrompt(''); }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold uppercase tracking-wider transition-all ${mode === 'generate' ? 'bg-acid text-midnight shadow-[0_0_20px_#CCFF00]' : 'bg-white/5 text-silver hover:bg-white/10'}`}
                        >
                            <ImageIcon size={18} /> Генерация
                        </button>
                        <button 
                            onClick={() => { setMode('edit'); setResultMedia(null); setPrompt(''); setReferenceImages([]); }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold uppercase tracking-wider transition-all ${mode === 'edit' ? 'bg-hotpink text-white shadow-[0_0_20px_#FF00FF]' : 'bg-white/5 text-silver hover:bg-white/10'}`}
                        >
                            <Wand2 size={18} /> Редакт.
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Input Section */}
                        <div className="space-y-6">
                            
                            {mode === 'edit' && (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-bold text-hotpink uppercase tracking-widest ml-4">
                                            Референсы ({referenceImages.length}/10)
                                        </label>
                                        {referenceImages.length > 0 && referenceImages.length < 10 && (
                                            <button 
                                                onClick={() => fileInputRef.current?.click()}
                                                className="text-xs font-bold text-acid hover:text-white uppercase tracking-widest flex items-center gap-1"
                                            >
                                                <Plus size={12} /> Добавить
                                            </button>
                                        )}
                                    </div>

                                    <input 
                                        type="file" 
                                        ref={fileInputRef} 
                                        className="hidden" 
                                        accept="image/*" 
                                        multiple
                                        onChange={handleImageUpload}
                                    />

                                    {referenceImages.length === 0 ? (
                                        <div 
                                            className="border-2 border-dashed border-white/20 rounded-3xl p-8 text-center hover:border-acid/50 hover:bg-white/5 transition-all cursor-pointer relative group h-40 flex flex-col items-center justify-center"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Upload className="w-8 h-8 mb-4 text-white/20 group-hover:text-acid transition-colors" />
                                            <span className="font-display font-bold uppercase tracking-wide text-sm">Загрузить Изображения</span>
                                            <span className="text-[10px] mt-2 opacity-50">Максимум 10 файлов</span>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-3 gap-2">
                                            {referenceImages.map((img, idx) => (
                                                <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group border border-white/10">
                                                    <img src={img} alt={`Ref ${idx}`} className="w-full h-full object-cover" />
                                                    <button 
                                                        onClick={() => removeImage(idx)}
                                                        className="absolute top-1 right-1 p-1 bg-black/50 hover:bg-hotpink rounded-full text-white transition-colors opacity-0 group-hover:opacity-100"
                                                    >
                                                        <X size={12} />
                                                    </button>
                                                </div>
                                            ))}
                                            {referenceImages.length < 10 && (
                                                <div 
                                                    className="aspect-square rounded-xl border border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/5 hover:border-acid transition-all"
                                                    onClick={() => fileInputRef.current?.click()}
                                                >
                                                    <Plus className="text-white/30" />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-acid uppercase tracking-widest ml-4">
                                    {mode === 'generate' ? 'Промпт' : 'Инструкция'}
                                </label>
                                <textarea
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder={
                                        mode === 'generate' ? "Футуристический город с неоновыми огнями..." :
                                        "Добавь ретро глитч эффект, сделай цвета ярче..."
                                    }
                                    className="w-full bg-black/40 border border-white/10 rounded-3xl p-6 text-white font-sans focus:outline-none focus:border-acid focus:ring-1 focus:ring-acid transition-all resize-none h-32"
                                />
                            </div>

                            {mode === 'generate' && (
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-acid uppercase tracking-widest ml-4">
                                        Формат
                                    </label>
                                    <div className="flex gap-2 flex-wrap">
                                        {(['1:1', '4:3', '16:9', '9:16'] as AspectRatio[]).map((ratio) => (
                                            <button
                                                key={ratio}
                                                onClick={() => setAspectRatio(ratio)}
                                                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                                                    aspectRatio === ratio
                                                    ? 'bg-acid text-midnight border-acid'
                                                    : 'bg-transparent text-silver border-white/20 hover:border-white'
                                                }`}
                                            >
                                                {ratio}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <Button 
                                variant="primary" 
                                onClick={handleAction}
                                disabled={loading || (mode !== 'generate' && referenceImages.length === 0)}
                                className="w-full flex justify-center"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin mr-2" /> {status || 'Обработка...'}
                                    </>
                                ) : (
                                    <>
                                        {mode === 'generate' ? 'Создать Арт' : 'Применить Магию'}
                                    </>
                                )}
                            </Button>
                        </div>

                        {/* Output Section */}
                        <div className="bg-black/40 rounded-3xl border border-white/10 aspect-video flex items-center justify-center relative overflow-hidden group">
                            {!resultMedia && !loading && (
                                <div className="text-center p-6">
                                    <div className="w-20 h-20 rounded-full bg-white/5 mx-auto mb-4 flex items-center justify-center">
                                        <Wand2 className="text-white/20" size={32} />
                                    </div>
                                    <p className="text-silver/40 font-display font-bold uppercase tracking-widest text-sm">
                                        Ваше творение появится здесь
                                    </p>
                                </div>
                            )}

                            {loading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
                                    <div className="w-16 h-16 border-4 border-acid border-t-transparent rounded-full animate-spin mb-4"></div>
                                    <p className="text-acid font-mono text-xs uppercase animate-pulse">{status}</p>
                                </div>
                            )}

                            {resultMedia && (
                                <>
                                    <img src={resultMedia.url} alt="Result" className="w-full h-full object-contain" />
                                    
                                    <a 
                                        href={resultMedia.url} 
                                        download={`kamod-creation-${Date.now()}.jpg`}
                                        className="absolute bottom-6 right-6 bg-acid text-midnight p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                                        title="Скачать"
                                    >
                                        <Download size={20} />
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};