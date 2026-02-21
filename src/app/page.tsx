'use client';

import { useState, useRef, useEffect } from 'react';
import RSVPSection from '@/components/RSVPSection';
import CourtInvite from '@/components/CourtInvite';
import DressCode from '@/components/DressCode';
import LocationSection from '@/components/LocationSection';
import SuccessModal from '@/components/SuccessModal';
import LandingGate from '@/components/LandingGate';
import GratitudeSection from '@/components/GratitudeSection';
import { GUEST_PHOTOS } from '@/constants/guests';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [showGratitude, setShowGratitude] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const courtRef = useRef<HTMLDivElement>(null);
  const dressCodeRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload audio
    audioRef.current = new Audio('/Sé Parte de Nuestro Cuento.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    const handleVisibilityChange = () => {
      if (typeof document !== 'undefined' && audioRef.current) {
        if (document.visibilityState === 'hidden') {
          audioRef.current.pause();
        } else if (document.visibilityState === 'visible' && isOpened) {
          // Only resume if the invitation has been opened
          audioRef.current.play().catch(err => console.log("Audio resume blocked:", err));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isOpened]);

  const handleMusicStart = () => {
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
  };

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleValidated = (name: string) => {
    setGuestName(name);
  };

  const handleProceed = () => {
    setIsValidated(true);
    setTimeout(() => {
      courtRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleAcceptClick = () => {
    setShowGratitude(true);
  };

  const handleModalClose = () => {
    setShowGratitude(false);
    setIsAccepted(true);
    setTimeout(() => {
      dressCodeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const currentGuestPhoto = GUEST_PHOTOS[guestName] || null;

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Section 0: Landing Gate */}
      {!isOpened && <LandingGate onOpen={handleOpen} onMusicStart={handleMusicStart} />}

      <div className={`transition-all duration-1000 overflow-x-hidden`}>
        {/* Gratitude Modal */}
        {showGratitude && (
          <SuccessModal
            name={guestName}
            imageUrl={currentGuestPhoto}
            onClose={handleModalClose}
          />
        )}

        {/* Section 1: Hero & RSVP */}
        <section className="min-h-[100svh] flex flex-col items-center justify-center text-center px-4 relative">
          <div className="animate-fade-in flex flex-col items-center mt-12 sm:mt-20">
            <h1 className="names-title font-cursive !mb-0 font-bold text-white drop-shadow-2xl">Juan y Vale</h1>
            <p className="event-details uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-white/90 drop-shadow-lg text-[9px] sm:text-[11px] md:text-sm">
              28 DE AGOSTO DE 2026 - SUBACHOQUE, COLOMBIA
            </p>
            <RSVPSection onValidated={handleValidated} onProceed={handleProceed} />
          </div>
        </section>

        {/* Section 2: Court Invite */}
        {isValidated && (
          <div
            ref={courtRef}
            className="animate-fade-in"
          >
            <section className="min-h-screen">
              <CourtInvite
                name={guestName}
                onAccept={handleAcceptClick}
                imageUrl={GUEST_PHOTOS[guestName] || null}
              />
            </section>

            {!isAccepted && !showGratitude && (
              <div className="h-[20vh] flex flex-col items-center justify-center opacity-30 text-white animate-pulse">
                <p className="text-[10px] uppercase tracking-[0.4em]">Confirma para ver el protocolo</p>
                <div className="mt-4 w-px h-12 bg-white/50 mx-auto" />
              </div>
            )}
          </div>
        )}

        {/* Section 3: Dress Code & Location */}
        {isAccepted && (
          <div
            ref={dressCodeRef}
            className="animate-fade-in"
          >
            <DressCode />

            <div ref={locationRef}>
              <LocationSection />
            </div>

            <GratitudeSection />

            {/* Footer Space */}
            <section className="h-[20vh] flex items-center justify-center bg-black">
              <p className="text-white/20 text-[10px] uppercase tracking-[1em]">Juan {'&'} Vale • 2026</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
