'use client';

import { useState, useRef, useEffect } from 'react';

interface LandingGateProps {
    onOpen: () => void;
}

export default function LandingGate({ onOpen }: LandingGateProps) {
    const [isOpening, setIsOpening] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Preload audio
        audioRef.current = new Audio('/Sé Parte de Nuestro Cuento.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0;
    }, []);

    const handleOpenClick = () => {
        if (isOpening) return;
        setIsOpening(true);

        if (audioRef.current) {
            audioRef.current.play().catch(err => console.log("Audio playback blocked:", err));
            let vol = 0;
            const interval = setInterval(() => {
                if (vol < 0.7) {
                    vol += 0.05;
                    if (audioRef.current) audioRef.current.volume = Math.min(vol, 0.7);
                } else {
                    clearInterval(interval);
                }
            }, 100);
        }

        // Duration of the split animation
        setTimeout(() => {
            onOpen();
        }, 2000);
    };

    return (
        <div
            className={`fixed inset-0 z-[200] overflow-hidden ${isOpening ? 'pointer-events-none' : 'cursor-pointer'}`}
            onClick={handleOpenClick}
        >
            <div className={`split-gate-container ${isOpening ? 'is-splitting' : ''}`}>

                {/* LEFT GATE */}
                <div className="split-gate-half split-gate-left flex items-center justify-end">
                    <div className="envelope-split-wrapper w-[280px] sm:w-[560px]">
                        <div className="left-half-envelope w-[140px] sm:w-[280px] flex flex-col items-center justify-center border-r border-gold/10">
                            <div className="gate-texture" />
                            <div className="relative z-10 text-right pr-4 sm:pr-6 translate-x-[50%] flex flex-col items-end gap-3">
                                <div className="text-right">
                                    <div className="font-serif text-xl sm:text-2xl md:text-3xl text-gold/80 italic font-bold">Juan</div>
                                    <div className="w-4 sm:w-6 h-px bg-gold/20 mr-0 ml-auto mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT GATE */}
                <div className="split-gate-half split-gate-right flex items-center justify-start">
                    <div className="envelope-split-wrapper w-[280px] sm:w-[560px]">
                        <div className="right-half-envelope w-[140px] sm:w-[280px] flex flex-col items-center justify-center border-l border-gold/10">
                            <div className="gate-texture" />
                            <div className="relative z-10 text-left pl-4 sm:pl-6 translate-x-[-50%] flex flex-col items-start gap-3">
                                <div className="text-left">
                                    <div className="font-serif text-xl sm:text-2xl md:text-3xl text-gold/80 italic font-bold">Vale</div>
                                    <div className="w-4 sm:w-6 h-px bg-gold/20 mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FLOATING WAX SEAL (CENTRIC) */}
                {!isOpening && (
                    <div className="seal-split-wrapper">
                        <div className="relative group">
                            {/* Pulsing Hint Text - MOVED TO TOP EDGE OF ENVELOPE */}
                            <div className="absolute top-[-100px] sm:top-[-130px] md:top-[-200px] left-[50%] translate-x-[-50%] w-[250px] sm:w-[350px] text-center opacity-90 group-hover:opacity-100 transition-opacity">
                                <p className="font-montserrat text-[10px] sm:text-[12px] text-gold tracking-[0.8em] sm:tracking-[1.2em] uppercase drop-shadow-xl font-bold">Ábreme</p>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 mx-auto border-b-2 border-r-2 border-gold/40 rotate-45 animate-bounce mt-4" />
                            </div>

                            {/* The Gold Seal */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#d4af37] via-[#c5a059] to-[#8b6b23] rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.3),_0_15px_40px_rgba(0,0,0,0.6)] flex items-center justify-center animate-pulse-slow active:scale-95 transition-transform">
                                <div className="w-[88%] h-[88%] border-2 border-dashed border-[#8b6b23]/40 rounded-full flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" className="w-12 h-12 sm:w-16 sm:h-16 text-[#8b6b23]/80" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 21l-8.228-9.204a.5.5 0 010-.592L12 3l8.228 8.204a.5.5 0 010 .592L12 21z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
