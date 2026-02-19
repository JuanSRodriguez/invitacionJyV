'use client';

export default function LocationSection() {
    return (
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 text-center animate-fade-in relative overflow-hidden bg-black">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/garden.jpg"
                    alt="Hacienda La Victoria Garden"
                    className="w-full h-full object-cover opacity-50 grayscale-[20%] brightness-[0.4]"
                />
            </div>

            {/* Background Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay z-0" />

            <div className="max-w-4xl space-y-12 relative z-10">
                <header className="space-y-4 sm:space-y-6">
                    <p className="font-montserrat text-gold uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[8px] sm:text-[10px] font-bold opacity-80">Ubicación</p>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-lg leading-tight">El Lugar Mágico</h2>
                    <div className="w-16 sm:w-24 h-px bg-gold mx-auto opacity-50" />
                </header>

                <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-1 sm:space-y-2">
                        <h3 className="font-serif text-2xl sm:text-3xl text-gold/90 italic">Hacienda La Victoria</h3>
                        <p className="font-serif text-base sm:text-xl md:text-2xl text-white tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-90 drop-shadow-lg">Salón Garden</p>
                    </div>
                    <p className="font-montserrat text-white/80 text-sm sm:text-lg tracking-wide font-light max-w-[280px] sm:max-w-lg mx-auto leading-relaxed">
                        Tenjo, Cundinamarca<br />
                        Vía Siberia - Tenjo
                    </p>
                </div>

                <div className="pt-4 sm:pt-8 w-full flex justify-center">
                    <a
                        href="https://www.google.com/maps/place/Hacienda+La+Victoria/@4.8995357,-74.1859374,17.45z/data=!4m6!3m5!1s0x8e407f98165ee23b:0x32a1f2311b1aa982!8m2!3d4.8992284!4d-74.1828565!16s%2Fg%2F11cmn8_48v?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto border border-gold/40 hover:border-gold text-gold hover:text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold transition-all hover:bg-gold/10 hover:scale-105 text-center"
                    >
                        Ver en el Mapa
                    </a>
                </div>
            </div>

            {/* Decorative Ornaments */}
            <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-gold/20" />
            <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-gold/20" />
        </div>
    );
}
