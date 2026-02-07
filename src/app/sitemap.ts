import type { MetadataRoute } from 'next';
import { WEDDING_DATA } from '@/utils/wedding-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://himanshuanjali.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add other routes if any, e.g., /rsvp if it were a separate page,
    // but this is a microsite (single page).
  ];
}
