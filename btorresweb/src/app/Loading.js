'use client';

import { useEffect } from 'react';

export default function Loading() {

    useEffect(() => {
        // Run code on client-side only : ensure document is here
        if (typeof document !== undefined) {
            // load JS bootstrap dependency
            require('bootstrap/dist/js/bootstrap')
        }
    }, []);
}