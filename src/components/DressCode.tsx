import { useState } from 'react';

export default function DressCode() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center animate-fade-in relative overflow-hidden bg-black/10 backdrop-blur-[2px]">

            {/* Decorative Ornaments */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="max-w-4xl space-y-16 relative z-10">
                <header className="space-y-4 sm:space-y-6">
                    <p className="font-montserrat text-gold uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[8px] sm:text-[10px] font-bold opacity-80 animate-fade-in">Protocolo de Etiqueta</p>
                    <div className="w-16 sm:w-24 h-px bg-gold mx-auto opacity-50" />
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white drop-shadow-lg leading-tight">Código de Vestimenta</h2>
                    <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest mt-2 px-4">Haz clic para ver ejemplos</p>
                </header>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-[340px] sm:max-w-none mx-auto w-full">
                    {/* Mujeres */}
                    <div
                        onClick={() => setSelectedImage('/mujeres1.jpg')}
                        className="group cursor-pointer space-y-4 sm:space-y-6 p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl animate-fade-in [animation-delay:400ms] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gold/40 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                                <span className="text-gold font-serif text-lg italic">M</span>
                            </div>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl text-gold">Mujeres</h3>
                        <div className="w-8 h-[1px] bg-gold/30 mx-auto group-hover:w-16 transition-all" />
                        <p className="font-montserrat text-white/90 text-base sm:text-lg tracking-wide font-light leading-relaxed">
                            Resalta tu elegancia con un <span className="font-bold text-white">Vestido Largo</span> de gala.
                        </p>
                    </div>

                    {/* Hombres */}
                    <div
                        onClick={() => setSelectedImage('/hombres.jpg')}
                        className="group cursor-pointer space-y-4 sm:space-y-6 p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl animate-fade-in [animation-delay:800ms] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gold/40 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                                <span className="text-gold font-serif text-lg italic">H</span>
                            </div>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl text-gold">Hombres</h3>
                        <div className="w-8 h-[1px] bg-gold/30 mx-auto group-hover:w-16 transition-all" />
                        <p className="font-montserrat text-white/90 text-base sm:text-lg tracking-wide font-light leading-relaxed">
                            La distinción de un <span className="font-bold text-white">Traje Formal</span> completo.
                        </p>
                    </div>

                    {/* Niños */}
                    <div
                        onClick={() => setSelectedImage('/dresscodebebehombre.jpg')}
                        className="group cursor-pointer space-y-4 sm:space-y-6 p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl animate-fade-in [animation-delay:1000ms] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gold/40 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                                <span className="text-gold font-serif text-lg italic">N</span>
                            </div>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl text-gold">Niños</h3>
                        <div className="w-8 h-[1px] bg-gold/30 mx-auto group-hover:w-16 transition-all" />
                        <p className="font-montserrat text-white/90 text-base sm:text-lg tracking-wide font-light leading-relaxed">
                            Un estilo <span className="font-bold text-white">Mini Formal</span> para los pequeños.
                        </p>
                    </div>
                </div>

                <div className="pt-6 sm:pt-12 opacity-60 animate-fade-in [animation-delay:1200ms] px-4">
                    <p className="font-montserrat text-white text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] leading-loose">
                        Gracias por acompañarnos con tu mejor estilo
                    </p>
                </div>
            </div>

            {/* Background Graphic Elements */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gold/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gold/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in cursor-default overflow-y-auto"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-h-[95vh] overflow-y-auto rounded-sm shadow-2xl bg-[#E5E1D3] text-[#2c3e36] max-w-6xl"
                    >
                        <button
                            className="absolute top-4 right-4 z-40 text-black/50 hover:text-black bg-white/50 rounded-full p-2 backdrop-blur-md transition-all sm:p-3"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="grid md:grid-cols-2 h-auto">
                            {/* Side: Photo */}
                            <div className="aspect-[4/5] md:aspect-auto md:min-h-full relative bg-gray-200">
                                <img
                                    src={selectedImage}
                                    alt="Referencia de Vestimenta"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            {/* Side: The Information Card */}
                            {selectedImage.includes('mujeres') ? (
                                <div className="w-full bg-[#E5E1D3] p-6 sm:p-8 md:p-12 relative flex flex-col items-center justify-center text-[#2F3E30] min-h-[400px]">
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                                    <div className="relative z-10 w-full max-w-lg flex flex-col items-center space-y-6 sm:space-y-8">
                                        <div className="text-center space-y-2">
                                            <p className="font-serif text-2xl sm:text-3xl md:text-5xl italic tracking-wide">Código de Vestimenta</p>
                                            <p className="uppercase tracking-[0.2em] text-[8px] sm:text-[10px] font-bold opacity-80">PARA ELLAS</p>
                                        </div>

                                        <div className="flex justify-center gap-3 sm:gap-6 py-2 sm:py-4">
                                            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#A8B5A0] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#839678] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#5C7053] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#3D4C38] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-4 sm:gap-8 items-start mt-2 sm:mt-4">
                                            <div className="space-y-4 sm:space-y-6 text-right font-serif">
                                                <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#2F3E30]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">TONALIDADES</h4>
                                                <div className="flex flex-col items-end gap-2 sm:gap-3 text-xs italic">
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Verde oliva</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#5C7053]"></div></div>
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Salvia</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#839678]"></div></div>
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Eucalipto</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#75866C]"></div></div>
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Musgo</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#4A5D45]"></div></div>
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Bosque profundo</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#3D4C38]"></div></div>
                                                </div>
                                            </div>

                                            <div className="space-y-6 sm:space-y-8 text-left font-serif">
                                                <div>
                                                    <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#2F3E30]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">LAS REGLAS</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">Vestido largo fluido.<br />Zapatos cómodos.</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#2F3E30]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">EL DEBER</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">Llegar puntual.<br />Sonreír siempre.<br />¡Disfrutar!</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 sm:pt-6 md:pt-12 text-center max-w-xs mx-auto border-t border-[#2F3E30]/10 w-full mb-4 sm:mb-0">
                                            <p className="font-serif italic text-xs sm:text-sm text-[#2F3E30]/70 leading-relaxed px-4">
                                                &quot;No puedo decir &apos;Sí, acepto&apos; sin ti.&quot;
                                            </p>
                                            <p className="text-[9px] sm:text-[10px] font-bold mt-2 uppercase tracking-widest opacity-50">- Vale</p>
                                        </div>
                                    </div>
                                </div>
                            ) : selectedImage.includes('bebe') ? (
                                <div className="w-full bg-[#E5E1D3] p-6 sm:p-8 md:p-12 relative flex flex-col items-center justify-center text-[#4A3F35] min-h-[400px]">
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                                    <div className="relative z-10 w-full max-w-lg flex flex-col items-center space-y-6 sm:space-y-8">
                                        <div className="text-center space-y-2">
                                            <p className="font-serif text-2xl sm:text-3xl md:text-5xl italic tracking-wide">Código de Vestimenta</p>
                                            <p className="uppercase tracking-[0.2em] text-[8px] sm:text-[10px] font-bold opacity-80">PARA LOS NIÑOS</p>
                                        </div>

                                        <div className="flex justify-center gap-3 sm:gap-6 py-2 sm:py-4">
                                            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#EACCAD] shadow-md border border-white/20 hover:scale-110 transition-transform"></div> {/* Beige */}
                                            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#D2C9B1] shadow-md border border-white/20 hover:scale-110 transition-transform"></div> {/* Arena */}
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-4 sm:gap-8 items-start mt-2 sm:mt-4">
                                            <div className="space-y-4 sm:space-y-6 text-right font-serif">
                                                <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">TONALIDADES</h4>
                                                <div className="flex flex-col items-end gap-2 sm:gap-3 text-xs italic">
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Beige</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EACCAD]"></div></div>
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Arena</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D2C9B1]"></div></div>
                                                </div>
                                            </div>

                                            <div className="space-y-6 sm:space-y-8 text-left font-serif">
                                                <div>
                                                    <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">SU ESTILO</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">Traje Mini Formal.<br />Preferiblemente colores claros.</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">EL OBJETIVO</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">Jugar y divertirse.<br />Estar cómodos.<br />Ser el alma de la fiesta.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 sm:pt-6 md:pt-12 text-center max-w-xs mx-auto border-t border-[#4A3F35]/10 w-full mb-4 sm:mb-0">
                                            <p className="font-serif italic text-xs sm:text-sm text-[#4A3F35]/70 leading-relaxed px-4">&quot;¡No podemos esperar a vernos tan guapos juntos!&quot;</p>
                                            <p className="text-[9px] sm:text-[10px] font-bold mt-2 uppercase tracking-widest opacity-50">- Juan y Vale</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full bg-[#E5E1D3] p-6 sm:p-8 md:p-12 relative flex flex-col items-center justify-center text-[#4A3F35] min-h-[400px]">
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                                    <div className="relative z-10 w-full max-w-lg flex flex-col items-center space-y-6 sm:space-y-8">
                                        <div className="text-center space-y-2">
                                            <p className="font-serif text-2xl sm:text-3xl md:text-5xl italic tracking-wide">Código de Vestimenta</p>
                                            <p className="uppercase tracking-[0.2em] text-[8px] sm:text-[10px] font-bold opacity-80">PARA ELLOS</p>
                                        </div>

                                        <div className="flex justify-center gap-3 sm:gap-6 py-2 sm:py-4">
                                            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#EACCAD] shadow-md border border-white/20 hover:scale-110 transition-transform"></div> {/* Beige */}
                                            <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#D2C9B1] shadow-md border border-white/20 hover:scale-110 transition-transform"></div> {/* Arena */}
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-4 sm:gap-8 items-start mt-2 sm:mt-4">
                                            <div className="space-y-4 sm:space-y-6 text-right font-serif">
                                                <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">TONALIDADES</h4>
                                                <div className="flex flex-col items-end gap-2 sm:gap-3 text-xs italic">
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Beige</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EACCAD]"></div></div>
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Arena</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D2C9B1]"></div></div>
                                                </div>
                                            </div>

                                            <div className="space-y-6 sm:space-y-8 text-left font-serif">
                                                <div>
                                                    <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">REGLAMENTO</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">Traje Formal completo.<br />Camisa de tonalidad clara.<br />Zapatos de vestir.</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold uppercase text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 sm:pb-2 mb-2 sm:mb-4">MISIÓN</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">Brindar con nosotros.<br />Lucir impecable.<br />¡Disfrutar!</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 sm:pt-6 md:pt-12 text-center max-w-xs mx-auto border-t border-[#4A3F35]/10 w-full mb-4 sm:mb-0">
                                            <p className="font-serif italic text-xs sm:text-sm text-[#4A3F35]/70 leading-relaxed px-4">&quot;Gracias por acompañarme en este día tan importante.&quot;</p>
                                            <p className="text-[9px] sm:text-[10px] font-bold mt-2 uppercase tracking-widest opacity-50">- Sebitas</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
