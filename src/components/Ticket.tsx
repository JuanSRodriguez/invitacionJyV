'use client';

import { useState } from 'react';

export default function Ticket() {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const unlockDetails = () => {
        if (isUnlocked) return;
        setIsUnlocked(true);

        // Smooth scroll to details after a short delay to allow rendering
        setTimeout(() => {
            const details = document.getElementById('details');
            if (details) {
                details.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <div className="[perspective:1000px] w-full max-w-[500px] mb-8">
                <div
                    onClick={unlockDetails}
                    className="ticket"
                >
                    <div className="bg-[--neon-pink] py-6 px-2 [writing-mode:vertical-rl] rotate-180 flex items-center justify-center font-bold text-black gap-4 text-xs tracking-widest">
                        <span className="font-bebas text-lg">VIP PASS</span>
                        <span className="opacity-70">{isUnlocked ? 'RESERVADO' : 'UNLOCKED'}</span>
                    </div>

                    <div className="flex-1 p-6 text-left flex flex-col justify-center">
                        <div className="mb-4">
                            <h3 className="font-bebas text-3xl text-[--gold] mb-2 leading-none">NUESTRA CORTE DE HONOR</h3>
                            <p className="text-sm opacity-80 leading-relaxed font-light">
                                Queremos que seas parte de nuestra sinfonía más importante.
                            </p>
                        </div>
                        <button
                            className={`mt-4 px-5 py-2 rounded border font-bold text-xs transition-all duration-300 self-start ${isUnlocked
                                ? 'border-[--gold] text-[--gold]'
                                : 'border-[--neon-blue] text-[--neon-blue] hover:bg-[--neon-blue] hover:text-black'
                                }`}
                        >
                            {isUnlocked ? 'DETALLES REVELADOS' : 'REVELAR DETALLES'}
                        </button>
                    </div>

                    <div className="w-[60px] border-l-2 border-dashed border-[#333] flex items-center justify-center p-4">
                        <div className="barcode"></div>
                    </div>
                </div>
            </div>

            {isUnlocked && (
                <section
                    id="details"
                    className="w-full max-w-[500px] p-8 bg-[--glass] rounded-xl border border-[--glass-border] backdrop-blur-md animate-fade-in-down"
                >
                    <div className="flex flex-col gap-6 text-center">
                        <div className="detail-card">
                            <label className="block text-[10px] text-[--neon-blue] tracking-[0.2em] mb-1 font-bold">ESCENARIO</label>
                            <p className="text-xl font-bold">Casa de los Abuelos - Sector Jardín</p>
                        </div>
                        <div className="detail-card">
                            <label className="block text-[10px] text-[--neon-blue] tracking-[0.2em] mb-1 font-bold">FECHA & HORA</label>
                            <p className="text-xl font-bold">Viernes, 28 de agosto | 4:00 PM</p>
                        </div>
                        <div className="detail-card">
                            <label className="block text-[10px] text-[--neon-blue] tracking-[0.2em] mb-1 font-bold">DRESS CODE</label>
                            <p className="text-xl font-bold">Festival Chic (Boho / Artístico)</p>
                        </div>
                        <p className="mt-4 italic opacity-80 text-sm">&quot;Sin ti, el ritmo no es el mismo.&quot;</p>
                        <a
                            href="https://wa.me/1234567890"
                            className="mt-6 bg-[--gold] text-black no-underline p-4 rounded-lg font-black tracking-widest transition-transform hover:scale-105 active:scale-95 text-center"
                        >
                            CONFIRMAR ASISTENCIA
                        </a>
                    </div>
                </section>
            )}
        </div>
    );
}
