'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CourtInviteProps {
    name: string;
    imageUrl?: string | null;
    onAccept: () => void;
}

export default function CourtInvite({ name, imageUrl, onAccept }: CourtInviteProps) {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsButtonVisible(entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: '0px 0px -20px 0px'
            }
        );

        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4">
            {/* Physical Card Representation - Final Version */}
            <div className="relative w-full max-w-[450px] min-h-[600px] bg-[#0d1a15] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-[8px] sm:border-[12px] border-[#0d1a15] flex flex-col items-center p-8 sm:p-12 text-black animate-scale-up overflow-hidden group">

                {/* Background Image Template */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/invitacion.jpg"
                        alt="Plantilla de Invitación"
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/30" />
                </div>

                {/* Subtle Paper Texture Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.2] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                {/* Main Content Layout */}
                <div className="relative z-20 w-full flex flex-col items-center flex-grow">

                    {/* Header Label */}
                    <div className="mt-8 mb-4">
                        <p className="font-cormorant text-[11px] sm:text-[13px] uppercase tracking-[0.4em] font-bold text-black/90">
                            . Invitación Especial .
                        </p>
                    </div>

                    {/* Couple Names */}
                    <div className="mb-8 text-center">
                        <h1 className="font-dancing text-5xl sm:text-6xl text-black leading-tight drop-shadow-sm">
                            Juan y Vale
                        </h1>
                    </div>

                    {/* Guest Message - MOVED UP */}
                    <div className="text-center space-y-4 mb-4 border-t border-black/10 pt-8 w-full px-4 text-black">
                        <h2 className="font-cormorant text-[22px] sm:text-[26px] font-bold uppercase tracking-[0.1em]">
                            {name}
                        </h2>
                        <p className="font-cormorant text-xs sm:text-sm italic leading-relaxed font-medium max-w-[280px] mx-auto">
                            &quot;Queremos que nos acompañen como nuestra Corte de Honor, siendo testigos de principio a fin de esta promesa de amor.&quot;
                        </p>

                        {/* Scroll Indicator - Hidden when button is visible */}
                        <div className={`flex justify-center transition-all duration-500 ${isButtonVisible ? 'opacity-0 scale-0 h-0 overflow-hidden' : 'opacity-40 animate-bounce pt-2'}`}>
                            <svg
                                className="w-5 h-5 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Grid Info Section - MOVED DOWN */}
                    <div className="w-full border-t border-b border-black/20 py-5 grid grid-cols-[1fr_auto_1fr] items-center mb-8">
                        <div className="text-center px-4">
                            <p className="font-cormorant text-[10px] uppercase tracking-widest text-black mb-1 font-bold">Viernes</p>
                            <p className="font-cormorant text-3xl font-bold text-black">28</p>
                            <p className="font-cormorant text-[10px] uppercase tracking-widest text-black">Agosto</p>
                        </div>
                        <div className="w-px h-16 bg-black/20" />
                        <div className="text-center px-4">
                            <p className="font-cormorant text-[10px] uppercase tracking-widest text-black mb-1 font-bold">Nuestra</p>
                            <p className="font-cormorant text-xl sm:text-2xl font-bold text-black leading-tight">Corte de Honor</p>
                        </div>
                    </div>

                    {/* Location Info - MOVED DOWN */}
                    <div className="text-center space-y-2 mb-12">
                        <p className="font-cormorant text-sm sm:text-base font-bold uppercase tracking-widest text-black">
                            Hacienda La Victoria
                        </p>
                        <p className="font-cormorant italic text-xs sm:text-sm text-black font-medium text-center">
                            Subachoque, Cundinamarca . Vía Siberia
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto pb-6 w-full flex justify-center">
                        <button
                            ref={buttonRef}
                            onClick={onAccept}
                            className="w-full max-w-[280px] border border-black text-black hover:bg-black hover:text-white font-cormorant text-[12px] sm:text-[14px] tracking-[0.4em] font-bold py-4 px-8 transition-all duration-300 uppercase shadow-sm"
                        >
                            ACEPTO LA MISIÓN
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
