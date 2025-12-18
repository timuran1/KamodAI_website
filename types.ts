
export interface MediaItem {
    id: string;
    title: string;
    category: string;
    thumbnailUrl: string;
    description?: string;
}

export interface MusicTrack {
    id: string;
    title: string;
    artist: string;
    duration: string;
    coverUrl: string;
    waveformType: 'calm' | 'energetic' | 'intense';
    audioUrl?: string;
    externalUrl?: string;
}

export enum SectionId {
    HERO = 'hero',
    ABOUT = 'about',
    SERVICES = 'services',
    WORK = 'work',
    PLAY = 'play',
    LAB = 'lab',
    CONTACT = 'contact',
    // Fix: Added missing section IDs used in components
    PHOTO = 'photography',
    FILM = 'film',
    MUSIC = 'music',
    PORTFOLIO = 'portfolio',
    BLOG = 'blog'
}