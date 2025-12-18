import React, { useState } from 'react';
import { SectionId } from '../types';
import { SectionTitle } from './UIComponents';
import { Calendar, Tag, ArrowUpRight, X, Play, Clock, Share2, MessageSquare } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    date: string;
    youtubeId: string; 
    description: string;
    fullContent: string;
    tags: string[];
}

const POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Case Study: Redefining Sports Marketing with Hybrid AI Production",
        date: "17 December 2025",
        youtubeId: "PGNpgP1xYec",
        description: "How we blended raw athleticism with Generative AI to launch Uzbekistan's first Media Football League — United MFL.",
        fullContent: `In the world of sports media, the game has changed. It is no longer just about capturing the match; it is about capturing the energy.

For the launch of United MFL (Uzbekistan’s first Media Football League), a standard promo video wasn't enough. The league represents a collision of professional sports, influencers, and show business. The visual identity had to match that intensity.

The Challenge: Create a high-impact launch video that conveys "The Future of Football" while keeping the authenticity of the players and the game.

The Solution: A Hybrid Production Pipeline 🎥 + 🤖 At KAMOD AI, we utilized a hybrid approach, blending raw, real-world footage with Generative AI enhancements.

The "Real" Layer: We used actual footage of the players and the field to ground the video in reality. You need real emotion, real sweat, and real faces to build a connection.

The "AI" Layer: We used Generative AI to build the atmosphere. Neon overlays, stadiums, kinetic typography, and texture enhancements that would cost a fortune to build physically, but were created efficiently through code.

The Result: A seamless integration where the viewer can't tell where the camera stops and the AI begins. We didn't just document the league; we visualized its ambition.

Why Hybrid Matters for Brands: This approach allows for "Blockbuster Quality" on an agile timeline. It is the most efficient way to scale visual value without scaling production costs exponentially.

Proud to partner with the United MFL team on this journey. This is just the kick-off. ⚽️🚀

#KAMODAI #UnitedMFL #HybridProduction #SportsMarketing #GenerativeAI #VideoProduction #CaseStudy #Uzbekistan #Tashkent #Innovation`,
        tags: ["Case Study", "United MFL", "Hybrid AI", "Sports"]
    },
    {
        id: 2,
        title: "The Next Big Influencer Isn’t Human. Meet DJ NEURO.",
        date: "20 December 2025",
        youtubeId: "bzFLIaDtqdQ",
        description: "Exploring how virtual influencers and AI-generated identity provide brands with unprecedented control and scalability.",
        fullContent: `In the world of advertising and media, the question isn't "what is AI?" anymore. The question is: "How can AI build a brand?"

At KAMOD AI, we believe the future of engagement blends creativity with code. To demonstrate the full power of Generative AI in media production, we created something unique for the Tashkent market.

Introducing DJ NEURO. 🤖🎧

He is our first fully virtual music artist.
▪️ Visuals: Generated via advanced neural networks.
▪️ Music: Composed by AI, curated by humans.
▪️ Identity: A symbol of digital transformation.

Why does this matter for business? Virtual influencers and AI-generated content offer brands unprecedented control, scalability, and consistency. DJ NEURO is a testament to our agency's ability to produce high-end, futuristic content that captures attention in a crowded digital landscape.

This isn't just a music video. It is a glimpse into the future of content creation.

👇 Watch the Full Performance. Experience the synergy of binary code and bass.

#KAMODAI #GenerativeAI #VirtualInfluencer #DigitalMarketing #Innovation #Uzbekistan #AdTech #FutureOfWork #Tashkent`,
        tags: ["Virtual Influencer", "DJ NEURO", "Digital Brand", "AdTech"]
    },
    {
        id: 3,
        title: "Meet ATIFA: How We Built a Virtual Pop Group from Scratch",
        date: "22 December 2025",
        youtubeId: "JO8Z8FNhr34",
        description: "A deep dive into the generative pipeline behind our debut hits: 'Moy Jahangir' and 'Zolotoy Plen'.",
        fullContent: `The music industry is undergoing its biggest shift since streaming. We are no longer limited by physical talent, studio availability, or filming budgets. At KAMOD AI, we asked ourselves: Can we create a chart-topping music group that doesn’t exist in the real world? The answer is ATIFA. In this breakdown, we reveal the generative pipeline behind our two debut hits: "Moy Jahangir" and "Zolotoy Plen".

1. The Concept: Digital Idols
ATIFA is not just a deepfake. It is a fully realized virtual stage group designed to evoke real emotion. Our goal was to create characters that feel "human" enough to love, but stylized enough to stand out in the digital noise of Instagram and YouTube.

2. The Pipeline: From Audio to Lipsync
Creating a coherent music video with AI is vastly different from generating a single image. It requires consistency. Here is the stack we used to bring ATIFA to life:

Phase 1: Sonic Branding (The Music)
Before visuals, comes the beat. We used advanced Generative Audio models to compose the tracks "Moy Jahangir" and "Zolotoy Plen". We didn't just take the raw AI output; our sound engineers curated the stems, mixing AI vocals with professional mastering to ensure radio-quality sound.

Phase 2: Character Design (The Face)
Using Midjourney, we developed the consistent look of the group members. We defined their style, fashion, and lighting to match the "Pop Star" aesthetic.

Phase 3: Motion Synthesis (Veo 3.1 & Kling AI)
This is where the magic happens. Kling AI was used for realistic body movement and cinematic camera angles. Google Veo 3.1 allowed us to generate high-definition video sequences with complex lighting interactions, giving the video that "expensive production" gloss.

Phase 4: The Performance (AI Lipsync)
The biggest challenge in AI video is making the characters sing. We utilized advanced Lipsync models to map the phonemes of our audio tracks onto the generated video. The result? Perfect synchronization where the characters genuinely appear to be singing the lyrics.

3. Why This Matters for Brands
ATIFA is proof of concept. If we can build a pop group, imagine what we can build for your business.
▪️ Brand Safety: Virtual ambassadors never get into scandals.
▪️ Total Control: You control the look, the sound, and the message 100%.
▪️ Cost Efficiency: No travel costs, no makeup artists, no studio rental.

Experience the fusion of art and code. The era of Generative Entertainment is here.

#KAMODAI #ATIFA #VirtualInfluencer #Veo3.1 #KlingAI #Lipsync #GenerativeAudio #Tashkent #Innovation`,
        tags: ["AI Music Video", "ATIFA", "Veo 3.1", "Entertainment"]
    }
];

export const BlogSection: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    return (
        <section id={SectionId.BLOG} className="relative py-24 px-4 md:px-12 bg-navy border-t border-white/5">
            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionTitle title="Insights" subtitle="Blog & Case Studies" align="left" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS.map((post) => (
                        <div 
                            key={post.id} 
                            className="group relative bg-midnight rounded-[2rem] border border-white/5 overflow-hidden hover:border-acid/50 transition-all duration-500 cursor-pointer shadow-2xl"
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img 
                                    src={`https://img.youtube.com/vi/${post.youtubeId}/maxresdefault.jpg`} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all">
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-acid transition-all">
                                        <Play className="w-5 h-5 text-white group-hover:text-midnight fill-current ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 space-y-4">
                                <div className="flex items-center gap-4 text-[10px] font-black text-silver/40 uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-acid" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><MessageSquare size={12} className="text-ice" /> Case Study</span>
                                </div>
                                <h3 className="text-2xl font-display font-black text-white uppercase italic leading-tight group-hover:text-acid transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-silver/60 text-sm font-sans line-clamp-2">
                                    {post.description}
                                </p>
                                <div className="pt-4 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {post.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[9px] font-black text-white/40 uppercase tracking-tighter border border-white/10 px-2 py-0.5 rounded">
                                                #{tag.replace(/\s+/g, '')}
                                            </span>
                                        ))}
                                    </div>
                                    <ArrowUpRight className="text-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Case Study Modal Popup */}
            {selectedPost && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
                    <div 
                        className="fixed inset-0 bg-midnight/98 backdrop-blur-2xl transition-opacity animate-in fade-in duration-500" 
                        onClick={() => setSelectedPost(null)}
                    ></div>
                    
                    <div className="relative bg-navy w-full max-w-5xl h-full max-h-[90vh] rounded-[2.5rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-500">
                        
                        {/* Modal Header */}
                        <div className="p-6 md:px-12 md:py-8 flex items-center justify-between border-b border-white/5 bg-navy/50 backdrop-blur-md sticky top-0 z-50">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-acid/10 border border-acid/20 flex items-center justify-center text-acid">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-display font-black text-sm uppercase tracking-widest">Reading Case Study</h4>
                                    <p className="text-[10px] text-silver/50 font-black uppercase tracking-[0.2em]">{selectedPost.date} // TASHKENT</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setSelectedPost(null)}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-hotpink hover:border-hotpink transition-all"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Content - Scrollable Area */}
                        <div className="flex-grow overflow-y-auto no-scrollbar p-6 md:p-12">
                            <div className="max-w-4xl mx-auto space-y-12 pb-24">
                                
                                <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase italic tracking-tighter leading-none">
                                    {selectedPost.title}
                                </h2>

                                {/* Video Embed */}
                                <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
                                    <iframe 
                                        width="100%" 
                                        height="100%" 
                                        src={`https://www.youtube.com/embed/${selectedPost.youtubeId}?autoplay=1&rel=0`} 
                                        title={selectedPost.title} 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {selectedPost.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-acid uppercase tracking-[0.2em]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    {selectedPost.fullContent.split('\n\n').map((paragraph, i) => (
                                        <p key={i} className="text-silver/80 text-lg md:text-2xl font-sans leading-relaxed mb-8 font-light selection:bg-acid selection:text-midnight">
                                            {paragraph.startsWith('#') ? (
                                                <span className="text-acid/50 font-mono text-sm uppercase tracking-widest">{paragraph}</span>
                                            ) : paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Footer of the Popup */}
                                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex items-center gap-6">
                                        <div className="text-left">
                                            <p className="text-silver/40 text-[10px] font-black uppercase tracking-widest mb-1">Share Project</p>
                                            <div className="flex gap-4">
                                                <button className="text-white hover:text-acid transition-colors"><Share2 size={20} /></button>
                                                <button onClick={() => window.open(`https://youtu.be/${selectedPost.youtubeId}`, '_blank')} className="text-white hover:text-acid transition-colors"><Play size={20} /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => window.open('https://t.me/kamod_ai', '_blank')}
                                        className="px-10 py-5 rounded-full bg-acid text-midnight font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(204,255,0,0.2)]"
                                    >
                                        Discuss This Pipeline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};