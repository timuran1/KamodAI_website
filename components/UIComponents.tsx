import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon, className = '', ...props }) => {
    const baseClasses = "relative group px-8 py-4 font-display font-black tracking-wider uppercase text-xs transition-all duration-300 ease-out rounded-full overflow-hidden";
    
    const variants = {
        primary: "text-midnight bg-acid hover:scale-105 hover:shadow-[0_0_30px_#CCFF00]",
        secondary: "text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-midnight hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]",
        ghost: "text-silver hover:text-acid border border-transparent hover:bg-white/5"
    };

    return (
        <button 
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
                {icon && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </span>
        </button>
    );
};

export const Logo: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'sm' }) => {
    // Increased height slightly for better visibility
    const containerHeight = size === 'lg' ? 'h-40' : 'h-16';

    return (
        <div className={`flex items-center select-none`}>
            <img 
                src="https://raw.githubusercontent.com/timuran1/MUSIC/main/covers/kamodlogo.jpg" 
                alt="KAMOD AI" 
                className={`${containerHeight} w-auto object-contain rounded-lg`}
            />
        </div>
    );
};

export const SectionTitle: React.FC<{ title: string; subtitle: string, align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => {
    return (
        <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            <h2 className="text-acid font-display font-bold tracking-[0.2em] text-xs mb-2 uppercase inline-block px-3 py-1 rounded-full border border-acid/30 bg-acid/10 backdrop-blur-sm">
                {subtitle}
            </h2>
            <h3 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
                {title}
            </h3>
        </div>
    );
};