'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export function useGuestRecognition() {
  const searchParams = useSearchParams();
  const urlNameRaw = searchParams.get('n');
  const urlName = urlNameRaw ? decodeURIComponent(urlNameRaw) : null;

  const [storedName, setStoredName] = useState<string | null>(null);

  useEffect(() => {
    if (urlName) {
      // If name is in URL, save it to local storage for future visits
      localStorage.setItem('wedding_guest_name', urlName);
    } else {
      // If no name in URL, try to retrieve from local storage
      const saved = localStorage.getItem('wedding_guest_name');
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStoredName(saved);
      }
    }
  }, [urlName]);

  return urlName || storedName || "Distinguished Guest";
}
