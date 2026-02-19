'use client';

import { useState } from 'react';

interface RSVPSectionProps {
    onValidated: (name: string) => void;
    onProceed: () => void;
}

export default function RSVPSection({ onValidated, onProceed }: RSVPSectionProps) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState<'idle' | 'checking' | 'invited'>('idle');
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleCheck = () => {
        if (!name.trim()) return;
        setFeedback(null);
        setStatus('checking');

        // Intelligent mapping logic
        const input = name.toLowerCase().trim();

        const guests = [
            { formal: 'Dani y Kric bebé Ethan', husband: 'Dani', husbandKeys: ['dani', 'daniel'], wife: 'Kric', wifeKeys: ['kric', 'kriccia', 'kri'], child: 'Ethan', childKeys: ['ethan'], childPrefix: 'tu hijo' },
            { formal: 'Cris y Pau bebé Anto', husband: 'Cris', husbandKeys: ['cris', 'cristian'], wife: 'Pau', wifeKeys: ['pau', 'paula'], child: 'Anto', childKeys: ['anto', 'antonia'], childPrefix: 'tu hija' },
            { formal: 'Dani y Rubby bebé Cami', husband: 'Dani', husbandKeys: ['dani', 'daniel'], wife: 'Rubby', wifeKeys: ['rubby'], child: 'Cami', childKeys: ['cami', 'camila'], childPrefix: 'tu hija' },
            { formal: 'Sebas y Ale bebé JuanPa', husband: 'Sebas', husbandKeys: ['sebas', 'sebastian'], wife: 'Ale', wifeKeys: ['ale', 'alejandra'], child: 'JuanPa', childKeys: ['juanpa', 'juan'], childPrefix: 'tu hijo' },
            { formal: 'Pipe y Nata', husband: 'Pipe', husbandKeys: ['pipe', 'felipe'], wife: 'Nata', wifeKeys: ['nata', 'natalia'] },
            { formal: 'David y Lili hijas Sofi y hermana', husband: 'David', husbandKeys: ['david'], wife: 'Lili', wifeKeys: ['lili', 'liliana'], child: 'Sofi y hermana', childKeys: ['sofi', 'sofia', 'hermana'], childPrefix: 'tus hijas' }
        ];

        // 1. Find potential matches
        const potentialMatches = guests.filter(g =>
            g.husbandKeys.some(k => input.includes(k)) ||
            g.wifeKeys.some(k => input.includes(k))
        );

        if (potentialMatches.length === 0) {
            // Standard fallback
            setTimeout(() => {
                setStatus('invited');
                onValidated(name);
            }, 1500);
            return;
        }

        // 2. Resolve ambiguity (Multiple "Dani")
        const bestMatch = potentialMatches.find(g => {
            const hasHusband = g.husbandKeys.some(k => input.includes(k));
            const hasWife = g.wifeKeys.some(k => input.includes(k));
            return hasHusband && hasWife;
        });

        setTimeout(() => {
            if (!bestMatch && potentialMatches.length > 1) {
                setStatus('idle');
                setFeedback(`Hay dos ${input.charAt(0).toUpperCase() + input.slice(1)} en nuestra lista... ¿Cuál es el nombre de tu pareja?`);
                return;
            }

            const activeMatch = bestMatch || potentialMatches[0];
            const inputHasHusband = activeMatch.husbandKeys.some(k => input.includes(k));
            const inputHasWife = activeMatch.wifeKeys.some(k => input.includes(k));
            const inputHasChild = activeMatch.childKeys ? activeMatch.childKeys.some(k => input.includes(k)) : true;

            if (!inputHasHusband) {
                setStatus('idle');
                setFeedback(`¿Y tu esposo ${activeMatch.husband} qué?`);
                return;
            }

            if (!inputHasWife) {
                setStatus('idle');
                setFeedback(`¿Y tu esposa ${activeMatch.wife} qué?`);
                return;
            }

            if (activeMatch.child && !inputHasChild) {
                setStatus('idle');
                setFeedback(`¿Y ${activeMatch.childPrefix} ${activeMatch.child} qué?`);
                return;
            }

            setStatus('invited');
            const finalName = activeMatch.formal;
            setName(finalName);
            onValidated(finalName);
        }, 1500);
    };

    return (
        <div className="w-full max-w-md mt-8 sm:mt-12 p-6 sm:p-8 glass-card rounded-2xl animate-fade-in mx-auto">
            {status === 'idle' && (
                <div className="flex flex-col gap-4 sm:gap-6">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-widest opacity-70 text-white">Tenemos una misión para ti</p>
                    {feedback && (
                        <p className="text-gold text-[10px] sm:text-xs italic animate-bounce-subtle bg-gold/10 p-2 sm:p-3 rounded-lg border border-gold/20">
                            {feedback}
                        </p>
                    )}
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre..."
                        className="w-full bg-transparent border-b border-white/30 py-2 sm:py-3 px-1 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button
                        onClick={handleCheck}
                        className="confirm-btn-hero !mt-4 !py-3 sm:!py-4 w-full text-xs sm:text-sm"
                    >
                        Continuar
                    </button>
                </div>
            )}

            {status === 'checking' && (
                <div className="flex flex-col items-center justify-center py-8 sm:py-10 gap-4 sm:gap-6 animate-fade-in">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                        <div className="absolute inset-0 border-4 border-gold/20 rounded-full" />
                        <div className="absolute inset-0 border-4 border-t-gold rounded-full animate-spin" />
                    </div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white animate-pulse">Buscando tu invitación...</p>
                </div>
            )}

            {status === 'invited' && (
                <div className="relative w-full overflow-hidden bg-[#f4ece1] border border-[#d3c7b5] rounded-2xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.3)] animate-scale-up group">
                    {/* Rustic Paper Texture Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.2] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                    {/* Multiple Botanical SVGs (Ramitas/Hojas) for a Fuller Look */}
                    {/* Top Left Branch */}
                    <div className="absolute -top-3 -left-3 w-20 h-20 sm:w-28 sm:h-28 opacity-20 pointer-events-none rotate-[-45deg]">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#5C7053]" fill="currentColor">
                            <path d="M10,90 Q30,70 50,80 T90,60 M50,80 L40,60 M50,80 L60,70" stroke="currentColor" fill="none" strokeWidth="2" />
                            <ellipse cx="40" cy="55" rx="8" ry="4" transform="rotate(-30 40 55)" />
                            <ellipse cx="65" cy="65" rx="8" ry="4" transform="rotate(-20 65 65)" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 py-2 sm:py-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#5C7053] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(92,112,83,0.3)] border-2 border-white/20">
                            <svg
                                className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-checkmark"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="text-center mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#3d362e] uppercase italic tracking-wider">¡Invitado VIP Confirmado!</h3>
                            <p className="text-[10px] sm:text-sm text-[#5C7053] mt-1 uppercase tracking-[0.2em] font-black">Los amamos: {name}</p>
                        </div>

                        <button
                            onClick={onProceed}
                            className="group flex flex-col items-center gap-1 sm:gap-2 transition-all hover:scale-105"
                        >
                            <span className="text-[#5C7053] border-b-2 border-[#5C7053]/20 pb-1 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-black group-hover:border-[#5C7053] group-hover:tracking-[0.4em] transition-all duration-500">
                                Ver mensaje especial
                            </span>
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-[#5C7053]/40 group-hover:text-[#5C7053] animate-bounce mt-1 sm:mt-2 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
