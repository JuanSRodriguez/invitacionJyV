'use client';

import { useState, useRef } from 'react';
import RSVPSection from '@/components/RSVPSection';
import CourtInvite from '@/components/CourtInvite';
import DressCode from '@/components/DressCode';
import LocationSection from '@/components/LocationSection';
import SuccessModal from '@/components/SuccessModal';
import LandingGate from '@/components/LandingGate';
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
    <div className="flex flex-col">
      {/* Section 0: Landing Gate */}
      {!isOpened && <LandingGate onOpen={handleOpen} />}

      <div className={`transition-all duration-1000`}>
        {/* Gratitude Modal */}
        {showGratitude && (
          <SuccessModal
            name={guestName}
            imageUrl={currentGuestPhoto}
            onClose={handleModalClose}
          />
        )}

        {/* Section 1: Hero & RSVP */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
          <div className="animate-fade-in flex flex-col items-center">
            <h1 className="names-title !mb-0 font-bold text-white drop-shadow-2xl">Juan {'&'} Vale</h1>
            <p className="event-details uppercase tracking-[0.3em] font-bold text-white/90 drop-shadow-lg">
              28 de agosto de 2026 - Medellín, Colombia
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
