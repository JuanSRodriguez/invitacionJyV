'use client';

import CourtInvite from '@/components/CourtInvite';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { GUEST_PHOTOS } from '@/constants/guests';

function SpecialMessageContent() {
    const searchParams = useSearchParams();
    const guestName = searchParams.get('guest') || 'Invitado Especial';
    const imageUrl = GUEST_PHOTOS[guestName] || null;

    const handleAccept = () => {
        // TODO: Implement actual acceptance logic (e.g. API call or navigation)
        console.log('Invitation accepted by:', guestName);
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-4">
            <CourtInvite name={guestName} onAccept={handleAccept} imageUrl={imageUrl} />
        </section>
    );
}

export default function SpecialMessagePage() {
    return (
        <Suspense fallback={<div className="min-h-screen" />}>
            <SpecialMessageContent />
        </Suspense>
    );
}
