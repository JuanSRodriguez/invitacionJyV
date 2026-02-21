'use client';

import { useState } from 'react';
import { GUESTS } from '@/constants/guests';

interface RSVPSectionProps {
    onValidated: (name: string) => void;
    onProceed: () => void;
}

export default function RSVPSection({ onValidated, onProceed }: RSVPSectionProps) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState<'idle' | 'checking' | 'invited'>('idle');
    const [feedback, setFeedback] = useState<string | null>(null);

    const getLevenshteinDistance = (a: string, b: string): number => {
        const matrix = Array.from({ length: a.length + 1 }, () =>
            Array.from({ length: b.length + 1 }, (_, i) => i)
        );
        for (let i = 0; i <= a.length; i++) matrix[i][0] = i;

        for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost
                );
            }
        }
        return matrix[a.length][b.length];
    };

    const handleCheck = () => {
        if (!name.trim()) return;
        setFeedback(null);
        setStatus('checking');

        const input = name.toLowerCase().trim();

        // 1. Find potential matches (exact or contains)
        const potentialMatches = GUESTS.filter(g =>
            g.husbandKeys.some(k => input.includes(k) || k.includes(input)) ||
            g.wifeKeys.some(k => input.includes(k) || k.includes(input))
        );

        setTimeout(() => {
            if (potentialMatches.length === 0) {
                // 2. Fuzzy Matching for typos
                let closestMatch: { key: string, distance: number } | null = null;

                GUESTS.forEach(g => {
                    const keys = [...g.husbandKeys, ...g.wifeKeys];
                    if (g.childKeys) keys.push(...g.childKeys);

                    keys.forEach(k => {
                        const dist = getLevenshteinDistance(input, k);
                        if (!closestMatch || dist < closestMatch.distance) {
                            closestMatch = { key: k, distance: dist };
                        }
                    });
                });

                // If close (1-2 chars diff), suggest typo correction
                if (closestMatch && (closestMatch as any).distance > 0 && (closestMatch as any).distance <= 2) {
                    setStatus('idle');
                    const suggestion = (closestMatch as any).key;
                    setFeedback(`quizas escribiste mal tu nombre? quisiste decir ${suggestion.charAt(0).toUpperCase() + suggestion.slice(1)}? revisalo!.`);
                    return;
                }

                // If no close match, show the generic "not found"
                setStatus('idle');
                setFeedback('Lo sentimos, no encontramos tu invitación. Escribe tu nombre completo o contacta a Juan o Vale.');
                return;
            }

            // 3. Resolve ambiguity (Multiple results)
            const bestMatch = potentialMatches.find(g => {
                const hasHusband = g.husbandKeys.some(k => input.includes(k));
                const hasWife = g.wifeKeys.some(k => input.includes(k));
                return hasHusband && hasWife;
            });

            if (!bestMatch && potentialMatches.length > 1) {
                setStatus('idle');
                const firstName = input.split(' ')[0];
                setFeedback(`Hay varios invitados con el nombre ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}... ¿Cuál es el nombre de tu pareja?`);
                return;
            }

            const activeMatch = bestMatch || potentialMatches[0];
            const inputHasHusband = activeMatch.husbandKeys.some(k => input.includes(k));
            const inputHasWife = activeMatch.wifeKeys.some(k => input.includes(k));
            const inputHasChild = activeMatch.childKeys ? activeMatch.childKeys.some(k => input.includes(k)) : true;

            const missing = [];
            if (!inputHasHusband) missing.push(activeMatch.husband);
            if (!inputHasWife) missing.push(activeMatch.wife);
            if (activeMatch.child && !inputHasChild) missing.push(activeMatch.child);

            if (missing.length > 0) {
                setStatus('idle');
                let missingMsg = "";
                if (missing.length === 1) {
                    missingMsg = `¿Y ${missing[0]} qué?`;
                } else {
                    const last = missing.pop();
                    missingMsg = `¿Y ${missing.join(', ')} y ${last} qué?`;
                }
                setFeedback(missingMsg);
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
                    <h2 className="font-serif text-[10px] sm:text-xs tracking-[0.4em] mb-4 font-bold text-white/90">
                        Tenemos una misión para ti
                    </h2>
                    {feedback && (
                        <p className="text-gold text-[10px] sm:text-xs italic animate-bounce-subtle bg-gold/10 p-2 sm:p-3 rounded-lg border border-gold/20">
                            {feedback}
                        </p>
                    )}
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre..."
                        className="w-full bg-transparent border-b border-white/20 py-3 sm:py-4 px-2 text-white focus:outline-none focus:border-white transition-colors text-center text-sm sm:text-base font-serif"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button
                        onClick={handleCheck}
                        className="confirm-btn-hero mt-4 mx-auto"
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
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-white animate-pulse">Buscando tu invitación...</p>
                </div>
            )}

            {status === 'invited' && (
                <div className="relative w-full overflow-hidden bg-[#0d1a15] border border-[#d3c7b5] rounded-2xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.3)] animate-scale-up group">
                    {/* Background Image Template */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/invitacion.jpg"
                            alt="Fondo de Validación"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-white/40" />
                    </div>

                    {/* Rustic Paper Texture Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.2] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />


                    <div className="relative z-30 flex flex-col items-center gap-3 sm:gap-4 py-2 sm:py-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/80 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
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
                            <h3 className="text-lg sm:text-xl font-bold font-serif text-black italic tracking-wider">¡Invitados VIP!</h3>
                            <p className="text-[10px] sm:text-sm text-black mt-4 sm:mt-6 tracking-[0.1em] font-black leading-relaxed max-w-[250px] mx-auto">Están en nuestra lista de invitados especiales {name}</p>
                        </div>

                        <button
                            onClick={onProceed}
                            className="group flex flex-col items-center gap-1 sm:gap-2 transition-all hover:scale-105"
                        >
                            <span className="text-[#5C7053] border-b-2 border-[#5C7053]/20 pb-1 text-[9px] sm:text-[10px] tracking-[0.3em] font-black group-hover:border-[#5C7053] group-hover:tracking-[0.4em] transition-all duration-500">
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
