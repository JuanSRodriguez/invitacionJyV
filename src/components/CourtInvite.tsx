import Image from 'next/image';

interface CourtInviteProps {
    name: string;
    imageUrl?: string | null;
    onAccept: () => void;
}

export default function CourtInvite({ name, imageUrl, onAccept }: CourtInviteProps) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4">
            {/* Physical Card Representation - Emerald Version */}
            <div className="relative w-full max-w-[420px] aspect-[3/4.5] sm:aspect-[3/4] bg-[#1a2f26] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-[8px] sm:border-[12px] border-[#0d1a15] flex flex-col items-center justify-between p-6 sm:p-10 md:p-14 text-white animate-scale-up overflow-hidden group">

                {/* SVG Decorative Floral (Right Side) */}
                <div className="absolute top-0 right-0 h-full w-2/5 opacity-50 pointer-events-none transition-opacity duration-1000 group-hover:opacity-70">
                    <svg viewBox="0 0 100 300" className="h-full w-full" preserveAspectRatio="none">
                        <path
                            d="M100,0 C80,50 90,100 70,150 C50,200 80,250 100,300 M100,40 C70,60 60,90 85,110 M100,120 C60,140 50,180 80,210 M100,200 C75,220 70,260 90,280"
                            stroke="#c5a059"
                            strokeWidth="1.2"
                            fill="none"
                        />
                        {[40, 90, 140, 190, 240, 290].map((y, i) => (
                            <g key={i} transform={`translate(${88 - (i % 2) * 12}, ${y}) rotate(${i * 30})`}>
                                <ellipse cx="0" cy="0" rx="7" ry="3.5" fill="#c5a059" />
                            </g>
                        ))}
                    </svg>
                </div>

                {/* Top Label */}
                <div className="relative z-10 w-full flex flex-col items-center space-y-2 sm:space-y-3 pt-0">
                    <div className="w-12 sm:w-16 h-px bg-gold/30 mx-auto" />
                    <p className="font-montserrat text-[9px] sm:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.6em] font-extrabold text-gold/90">
                        Invitación Especial
                    </p>
                </div>

                {/* Central Section: Avatar & Name */}
                <div className="relative z-10 w-full flex flex-col items-center space-y-4 sm:space-y-6 pt-2">
                    {imageUrl && (
                        <div className="relative group/avatar">
                            <div className="absolute inset-0 bg-gold/10 rounded-full blur-[15px] opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-700" />
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gold/40 p-1 bg-white/5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover/avatar:scale-105">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt={name}
                                        fill
                                        className="object-cover filter brightness-110 saturate-[1.1]"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col items-center space-y-1">
                        {(() => {
                            const lowercaseName = name.toLowerCase();
                            const delimiters = ['bebé', 'bebe', 'hija', 'hijo', 'hijas', 'hermana'];
                            let delimiterFound = null;

                            for (const d of delimiters) {
                                if (lowercaseName.includes(d)) {
                                    delimiterFound = d;
                                    break;
                                }
                            }

                            if (delimiterFound) {
                                const index = lowercaseName.indexOf(delimiterFound);
                                const couple = name.substring(0, index).trim();
                                const children = name.substring(index).trim();
                                return (
                                    <>
                                        <h2 className="font-serif text-lg sm:text-[22px] md:text-[26px] font-bold tracking-widest leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] italic">
                                            {couple}
                                        </h2>
                                        <p className="font-serif text-sm sm:text-[16px] md:text-[18px] text-gold/80 italic tracking-wide">
                                            {children}
                                        </p>
                                    </>
                                );
                            }

                            return (
                                <h2 className="font-serif text-base sm:text-[18px] md:text-[22px] font-bold tracking-widest leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] italic text-center">
                                    {name}
                                </h2>
                            );
                        })()}
                    </div>
                </div>

                {/* Message & Action Section */}
                <div className="relative z-10 w-full flex flex-col items-center space-y-6 sm:space-y-8 pb-2">
                    <div className="space-y-3 sm:space-y-4 flex flex-col items-center">
                        <p className="font-serif italic text-white/80 text-xs sm:text-[14px] md:text-base leading-relaxed max-w-[90%] text-center px-2">
                            Queremos que seas parte fundamental de nuestra historia en este día tan especial.
                        </p>

                        <div className="flex items-center gap-2 sm:gap-3 w-full">
                            <div className="h-px flex-1 bg-gradient-to-l from-gold/30 to-transparent" />
                            <p className="font-serif italic text-base sm:text-xl text-gold drop-shadow-sm whitespace-nowrap">
                                &quot;Nuestra Corte de Honor&quot;
                            </p>
                            <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4 sm:space-y-5">
                        <p className="font-montserrat font-black text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-white/40">
                            Agosto 28 . 2026
                        </p>

                        <div className="relative group/btn">
                            <div className="absolute -inset-1 bg-gold/20 blur opacity-0 group-hover/btn:opacity-100 transition duration-500 rounded-sm" />
                            <button
                                onClick={onAccept}
                                className="relative bg-gold hover:bg-[#b08d4a] text-black font-montserrat text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] font-black px-6 sm:px-10 py-3 sm:py-3.5 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.4)] active:translate-y-1"
                            >
                                ACEPTO CON HONOR
                            </button>
                        </div>
                    </div>
                </div>

                {/* Subtle Paper Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
            </div>
        </div>
    );
}
