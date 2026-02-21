import { useState } from 'react';

export default function DressCode() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center animate-fade-in relative overflow-hidden bg-black/10 backdrop-blur-[2px]">

            {/* Decorative Ornaments */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="max-w-4xl space-y-16 relative z-10">
                <header className="space-y-4 sm:space-y-6">
                    <p className="font-montserrat text-gold tracking-[0.4em] sm:tracking-[0.6em] text-[8px] sm:text-[10px] font-bold opacity-80 animate-fade-in">Protocolo de etiqueta</p>
                    <div className="w-16 sm:w-24 h-px bg-gold mx-auto opacity-50" />
                    <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl text-white drop-shadow-lg leading-tight">Código de vestimenta</h2>
                    <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest mt-2 px-4">Haz clic para ver ejemplos</p>
                </header>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-[340px] sm:max-w-none mx-auto w-full">
                    {/* Mujeres */}
                    <div
                        onClick={() => setSelectedImage('/mujeres1.jpg')}
                        className="group cursor-pointer space-y-4 sm:space-y-6 p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl animate-fade-in [animation-delay:400ms] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gold/40 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                                <span className="text-gold font-sans text-lg italic">M</span>
                            </div>
                        </div>
                        <h3 className="font-sans text-2xl sm:text-3xl text-gold">Mujeres</h3>
                        <div className="w-8 h-[1px] bg-gold/30 mx-auto group-hover:w-16 transition-all" />
                        <p className="font-montserrat text-white/90 text-base sm:text-lg tracking-wide font-light leading-relaxed">
                            Resalta tu elegancia con un <span className="font-bold text-white">vestido largo</span> de gala.
                        </p>
                    </div>

                    {/* Hombres */}
                    <div
                        onClick={() => setSelectedImage('/hombres.jpg')}
                        className="group cursor-pointer space-y-4 sm:space-y-6 p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl animate-fade-in [animation-delay:800ms] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gold/40 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                                <span className="text-gold font-sans text-lg italic">H</span>
                            </div>
                        </div>
                        <h3 className="font-sans text-2xl sm:text-3xl text-gold">Hombres</h3>
                        <div className="w-8 h-[1px] bg-gold/30 mx-auto group-hover:w-16 transition-all" />
                        <p className="font-montserrat text-white/90 text-base sm:text-lg tracking-wide font-light leading-relaxed">
                            La distinción de un <span className="font-bold text-white">traje formal</span> completo.
                        </p>
                    </div>

                    {/* Niños */}
                    <div
                        onClick={() => setSelectedImage('/dresscodebebehombre.jpg')}
                        className="group cursor-pointer space-y-4 sm:space-y-6 p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl animate-fade-in [animation-delay:1000ms] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gold/40 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                                <span className="text-gold font-sans text-lg italic">N</span>
                            </div>
                        </div>
                        <h3 className="font-sans text-2xl sm:text-3xl text-gold">Niños</h3>
                        <div className="w-8 h-[1px] bg-gold/30 mx-auto group-hover:w-16 transition-all" />
                        <p className="font-montserrat text-white/90 text-base sm:text-lg tracking-wide font-light leading-relaxed">
                            Un estilo <span className="font-bold text-white">mini formal</span> para los pequeños.
                        </p>
                    </div>

                    {/* Niñas */}
                    <div
                        onClick={() => setSelectedImage('/bebesmujeres.jpg')}
                        className="group cursor-pointer space-y-4 sm:space-y-6 p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl animate-fade-in [animation-delay:1200ms] hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gold/40 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
                                <span className="text-gold font-sans text-lg italic">N</span>
                            </div>
                        </div>
                        <h3 className="font-sans text-2xl sm:text-3xl text-gold">Niñas</h3>
                        <div className="w-8 h-[1px] bg-gold/30 mx-auto group-hover:w-16 transition-all" />
                        <p className="font-montserrat text-white/90 text-base sm:text-lg tracking-wide font-light leading-relaxed">
                            Elegancia <span className="font-bold text-white">mini gala</span> para las pequeñas.
                        </p>
                    </div>
                </div>

                <div className="pt-6 sm:pt-12 opacity-60 animate-fade-in [animation-delay:1200ms] px-4">
                    <p className="font-montserrat text-white text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] leading-loose">
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
                        className="relative w-full h-fit md:h-auto overflow-y-auto rounded-sm shadow-2xl bg-[#E5E1D3] text-[#2c3e36] max-w-6xl mx-auto"
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
                            {selectedImage.includes('mujeres') && !selectedImage.includes('bebe') && !selectedImage.includes('bebesmujeres') ? (
                                <div className="w-full bg-[#E5E1D3] p-4 sm:p-6 md:p-8 relative flex flex-col items-center justify-center text-[#2F3E30] min-h-[300px]">
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                                    <div className="relative z-10 w-full max-w-lg flex flex-col items-center space-y-4 sm:space-y-6">
                                        <div className="text-center space-y-1">
                                            <p className="font-sans text-2xl sm:text-3xl md:text-4xl italic tracking-wide">Código de vestimenta</p>
                                            <p className="tracking-[0.2em] text-[8px] sm:text-[10px] font-bold opacity-80">Para ellas</p>
                                        </div>

                                        <div className="flex justify-center gap-2 sm:gap-4 py-1 sm:py-2">
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#A8B5A0] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#839678] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#5C7053] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#3D4C38] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-3 sm:gap-6 items-start mt-1 sm:mt-2">
                                            <div className="space-y-2 sm:space-y-4 text-right font-sans">
                                                <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#2F3E30]/20 pb-1 mb-1">Tonalidades</h4>
                                                <div className="flex flex-col items-end gap-1 sm:gap-2 text-[10px] italic">
                                                    <div className="flex items-center gap-1.5"><span>Verde oliva</span><div className="w-2.5 h-2.5 rounded-full bg-[#5C7053]"></div></div>
                                                    <div className="flex items-center gap-1.5"><span>Salvia</span><div className="w-2.5 h-2.5 rounded-full bg-[#839678]"></div></div>
                                                    <div className="flex items-center gap-1.5"><span>Eucalipto</span><div className="w-2.5 h-2.5 rounded-full bg-[#75866C]"></div></div>
                                                    <div className="flex items-center gap-1.5"><span>Bosque</span><div className="w-2.5 h-2.5 rounded-full bg-[#3D4C38]"></div></div>
                                                </div>
                                            </div>

                                            <div className="space-y-4 sm:space-y-6 text-left font-sans">
                                                <div>
                                                    <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#2F3E30]/20 pb-1 mb-1">Las reglas</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium whitespace-nowrap">Vestido largo fluido.<br />Zapatos cómodos.</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#2F3E30]/20 pb-1 mb-1">El deber</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium whitespace-nowrap">Llegar puntual.<br />¡Disfrutar!</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 sm:pt-4 md:pt-6 text-center max-w-xs mx-auto border-t border-[#2F3E30]/10 w-full mb-2 sm:mb-0">
                                            <p className="font-sans italic text-xs sm:text-sm text-[#2F3E30]/70 leading-relaxed px-4">
                                                &quot;No puedo decir &apos;Sí, acepto&apos; sin ti.&quot;
                                            </p>
                                            <p className="text-[9px] sm:text-[10px] font-bold mt-1 tracking-widest opacity-50">- Vale</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (selectedImage.includes('bebe') || selectedImage.includes('bebesmujeres')) ? (
                                <div className="w-full bg-[#E5E1D3] p-4 sm:p-6 md:p-8 relative flex flex-col items-center justify-center text-[#4A3F35] min-h-[300px]">
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                                    <div className="relative z-10 w-full max-w-lg flex flex-col items-center space-y-4 sm:space-y-6">
                                        <div className="text-center space-y-1">
                                            <p className="font-sans text-2xl sm:text-3xl md:text-4xl italic tracking-wide">Código de vestimenta</p>
                                            <p className="tracking-[0.2em] text-[8px] sm:text-[10px] font-bold opacity-80">
                                                {selectedImage.includes('mujeres') ? 'Para ellas' : 'Para ellos'}
                                            </p>
                                        </div>

                                        <div className="flex justify-center gap-2 sm:gap-4 py-1 sm:py-2">
                                            {selectedImage.includes('mujeres') ? (
                                                <>
                                                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white shadow-md border border-[#4A3F35]/20 hover:scale-110 transition-transform"></div>
                                                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#A8B5A0] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#839678] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#5C7053] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#AE8964] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#D2C9B1] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                                </>
                                            )}
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-3 sm:gap-6 items-start mt-1 sm:mt-2">
                                            <div className="space-y-3 sm:space-y-4 text-right font-sans">
                                                <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 mb-2">Tonalidades</h4>
                                                <div className="flex flex-col items-end gap-1.5 sm:gap-2 text-xs italic">
                                                    {selectedImage.includes('mujeres') ? (
                                                        <>
                                                            <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Blanco</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white border border-[#4A3F35]/10"></div></div>
                                                            <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Verde oliva</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#5C7053]"></div></div>
                                                            <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Salvia</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#839678]"></div></div>
                                                            <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Eucalipto</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#75866C]"></div></div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Tan</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#AE8964]"></div></div>
                                                            <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Arena</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D2C9B1]"></div></div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-4 sm:space-y-6 text-left font-sans">
                                                <div>
                                                    <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 mb-2">Su estilo</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">
                                                        {selectedImage.includes('mujeres') ? 'Vestido mini gala.' : 'Traje mini formal.'}<br />
                                                        {selectedImage.includes('mujeres') ? 'Acorde al protocolo.' : 'Preferiblemente colores claros.'}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 mb-2">El objetivo</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">
                                                        Jugar y divertirse.<br />
                                                        {selectedImage.includes('mujeres') ? 'Estar cómodas.' : 'Estar cómodos.'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 sm:pt-4 md:pt-6 text-center max-w-xs mx-auto border-t border-[#4A3F35]/10 w-full mb-2 sm:mb-0">
                                            <p className="font-sans italic text-xs sm:text-sm text-[#4A3F35]/70 leading-relaxed px-4">
                                                {selectedImage.includes('mujeres') ? '“¡No podemos esperar a vernos tan guapas juntas!”' : '“¡No podemos esperar a vernos tan guapos juntos!”'}
                                            </p>
                                            <p className="text-[9px] sm:text-[10px] font-bold mt-1 tracking-widest opacity-50">- Juan y Vale</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full bg-[#E5E1D3] p-4 sm:p-6 md:p-8 relative flex flex-col items-center justify-center text-[#4A3F35] min-h-[300px]">
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                                    <div className="relative z-10 w-full max-w-lg flex flex-col items-center space-y-4 sm:space-y-6">
                                        <div className="text-center space-y-1">
                                            <p className="font-sans text-2xl sm:text-3xl md:text-4xl italic tracking-wide">Código de vestimenta</p>
                                            <p className="tracking-[0.2em] text-[8px] sm:text-[10px] font-bold opacity-80">Para ellos</p>
                                        </div>

                                        <div className="flex justify-center gap-2 sm:gap-4 py-1 sm:py-2">
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#AE8964] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white shadow-md border border-[#4A3F35]/20 hover:scale-110 transition-transform"></div>
                                            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#5C7053] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-3 sm:gap-6 items-start mt-1 sm:mt-2">
                                            <div className="space-y-3 sm:space-y-4 text-right font-sans">
                                                <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 mb-2">Tonalidades</h4>
                                                <div className="flex flex-col items-end gap-1.5 sm:gap-2 text-xs italic">
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Tan</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#AE8964]"></div></div>
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Blanco</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white border border-[#4A3F35]/10"></div></div>
                                                    <div className="flex items-center gap-2 text-[10px] sm:text-xs"><span>Verde</span><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#5C7053]"></div></div>
                                                </div>
                                            </div>

                                            <div className="space-y-4 sm:space-y-6 text-left font-sans">
                                                <div>
                                                    <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 mb-2">Reglamento</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">Traje tan.<br />Camisa blanca.<br />Corbata verde.<br />Zapatos de vestir.</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[8px] sm:text-[10px] tracking-widest border-b border-[#4A3F35]/20 pb-1 mb-2">Misión</h4>
                                                    <p className="text-[10px] sm:text-xs leading-relaxed italic opacity-80 font-medium">Brindar con nosotros.<br />Lucir impecable.<br />¡Disfrutar!</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 sm:pt-4 md:pt-6 text-center max-w-xs mx-auto border-t border-[#4A3F35]/10 w-full mb-2 sm:mb-0">
                                            <p className="font-sans italic text-xs sm:text-sm text-[#4A3F35]/70 leading-relaxed px-4">&quot;Gracias por acompañarme en este día tan importante.&quot;</p>
                                            <p className="text-[9px] sm:text-[10px] font-bold mt-1 tracking-widest opacity-50">- Juan</p>
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
