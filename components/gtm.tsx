'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'; // SUBSTITUA PELO SEU GTM ID

export function GTM() {
  useEffect(() => {
    if (GTM_ID && GTM_ID !== 'GTM-XXXXXXX') {
      TagManager.initialize({ gtmId: GTM_ID });
    }
  }, []);

  return null;
}

