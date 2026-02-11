'use server';

import { getGuestDetails, Guest } from '@/lib/guest-data';

export async function fetchGuestAction(name: string): Promise<Guest | null> {
  return await getGuestDetails(name);
}
