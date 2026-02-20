import Image from 'next/image';

interface SuccessModalProps {
    name?: string;
    imageUrl?: string | null;
    onClose: () => void;
}

export default function SuccessModal({ name, imageUrl, onClose }: SuccessModalProps) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-[6px] animate-fade-in">
            <div className="relative w-full max-w-lg bg-[#0d1a15] border border-[#d3c7b5] p-6 sm:p-12 rounded-[30px] sm:rounded-[40px] text-center space-y-8 sm:space-y-12 shadow-[0_40px_120px_rgba(0,0,0,0.4)] overflow-hidden group">
                {/* Background Image Template */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/invitacion.jpg"
                        alt="Fondo de Éxito"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-white/40" />
                </div>

                {/* Kraft/Rustic Paper Texture Overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.2] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

                {/* Premium Botanical SVGs (Ramitas/Hojas) */}
                {/* Top Left Branch */}
                <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 opacity-10 pointer-events-none rotate-[-15deg] z-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                        <path d="M10,90 Q30,70 50,80 T90,60 M50,80 L40,60 M50,80 L60,70" stroke="currentColor" fill="none" strokeWidth="2" />
                        <ellipse cx="40" cy="55" rx="8" ry="4" transform="rotate(-30 40 55)" />
                        <ellipse cx="65" cy="65" rx="8" ry="4" transform="rotate(-20 65 65)" />
                        <ellipse cx="85" cy="55" rx="7" ry="3.5" transform="rotate(-10 85 55)" />
                    </svg>
                </div>

                {/* Bottom Right Branch */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-20 pointer-events-none rotate-[165deg]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#5C7053]" fill="currentColor">
                        <path d="M10,90 Q30,70 50,80 T90,60 M50,80 L40,60 M50,80 L60,70" stroke="currentColor" fill="none" strokeWidth="2" />
                        <ellipse cx="40" cy="55" rx="9" ry="4.5" transform="rotate(-30 40 55)" />
                        <ellipse cx="67" cy="67" rx="9" ry="4.5" transform="rotate(-20 67 67)" />
                        <ellipse cx="88" cy="58" rx="8" ry="4" transform="rotate(-15 88 58)" />
                        <ellipse cx="32" cy="78" rx="7" ry="3.5" transform="rotate(-45 32 78)" />
                    </svg>
                </div>

                {/* Additional Decorative Branches for "Fullness" */}
                {/* Bottom Left Branch */}
                <div className="absolute -bottom-10 -left-6 w-32 h-32 opacity-[0.15] pointer-events-none rotate-[45deg]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#5C7053]" fill="currentColor">
                        <path d="M10,90 Q30,70 50,80 T90,60" stroke="currentColor" fill="none" strokeWidth="2" />
                        <ellipse cx="40" cy="55" rx="7" ry="3.5" transform="rotate(-30 40 55)" />
                        <ellipse cx="65" cy="65" rx="7" ry="3.5" transform="rotate(-20 65 65)" />
                    </svg>
                </div>

                {/* Top Right Subtle Branch */}
                <div className="absolute -top-4 right-12 w-24 h-24 opacity-[0.1] pointer-events-none rotate-[120deg]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#5C7053]" fill="currentColor">
                        <path d="M10,90 Q30,70 50,80 T90,60" stroke="currentColor" fill="none" strokeWidth="2" />
                        <ellipse cx="45" cy="55" rx="6" ry="3" transform="rotate(-30 45 55)" />
                    </svg>
                </div>

                {/* Subtle Glow Effect (Warmer) */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#5C7053]/5 rounded-full blur-[80px]" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#5C7053]/5 rounded-full blur-[80px]" />

                {/* Guest Photo Placeholder or Checkmark */}
                <div className="relative">
                    {imageUrl ? (
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-[6px] sm:border-[8px] border-[#5C7053] shadow-[0_20px_50px_rgba(92,112,83,0.3)] animate-scale-in group-hover:scale-105 transition-transform duration-700">
                            <Image
                                src={imageUrl}
                                alt={name || 'Invitado'}
                                fill
                                className="object-cover brightness-105 saturate-[0.9]"
                            />
                        </div>
                    ) : (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#5C7053] rounded-full flex items-center justify-center mx-auto shadow-[0_10px_30px_rgba(92,112,83,0.2)] animate-scale-in">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-checkmark"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Typography Section */}
                <div className="space-y-4 sm:space-y-6 animate-fade-in-up relative z-30">
                    <div className="space-y-1 sm:space-y-2 text-black">
                        <p className="font-montserrat text-xs sm:text-sm md:text-lg font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                            ¡LOS AMAMOS!
                        </p>
                        <p className="font-serif italic text-xl sm:text-[22px] md:text-[28px] font-bold tracking-wide leading-tight">
                            {name}
                        </p>
                    </div>

                    <div className="w-12 sm:w-16 h-px bg-black/10 mx-auto" />

                    <p className="font-serif italic text-black font-medium text-sm sm:text-lg md:text-xl leading-relaxed max-w-[95%] sm:max-w-[90%] mx-auto px-2">
                        &quot;Gracias por decir que sí, nos emociona mucho que sean parte de esto, no sería lo mismo sin ustedes&quot;
                    </p>
                </div>

                {/* Modern Link/Button Action */}
                <div className="pt-4 sm:pt-8 animate-fade-in-up [animation-delay:400ms] relative z-10">
                    <button
                        onClick={onClose}
                        className="group/btn relative inline-flex flex-col items-center space-y-3 sm:space-y-4 transition-all"
                    >
                        <span className="text-[#5C7053] text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] border-b-2 border-[#5C7053]/20 pb-1 sm:pb-2 group-hover/btn:border-[#5C7053] group-hover/btn:tracking-[0.4em] sm:group-hover/btn:tracking-[0.6em] transition-all duration-500">
                            Siguientes pasos
                        </span>

                        <div className="w-5 h-5 sm:w-6 h-6 text-[#5C7053]/40 group-hover/btn:text-[#5C7053] group-hover/btn:translate-y-2 transition-all duration-500">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div >
    );
}
