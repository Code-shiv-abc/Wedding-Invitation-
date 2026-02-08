export type Guest = {
  name: string;
  role: 'Family' | 'Friend' | 'VIP' | 'Guest';
  welcomeMessage: string;
  rsvpStatus: 'pending' | 'confirmed' | 'declined';
};

const MOCK_GUESTS: Record<string, Partial<Guest>> = {
  'himanshu': { role: 'VIP', welcomeMessage: 'Welcome, Groom!' },
  'anjali': { role: 'VIP', welcomeMessage: 'Welcome, Bride!' },
  'arjun': { role: 'Friend', welcomeMessage: 'Welcome, Best Man!' },
  'priya': { role: 'Family', welcomeMessage: 'Welcome, Sister!' },
};

export async function getGuestDetails(name: string): Promise<Guest | null> {
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 50));

  const normalizedName = name.trim().toLowerCase();
  const found = MOCK_GUESTS[normalizedName];

  if (found) {
    return {
      name: name, // Keep original casing if possible, or capitalize
      role: found.role || 'Guest',
      welcomeMessage: found.welcomeMessage || `Welcome, ${name}!`,
      rsvpStatus: found.rsvpStatus || 'pending',
    };
  }

  // Generic fallback for any name provided in URL
  if (name && name.length > 0) {
      return {
          name: name,
          role: 'Guest',
          welcomeMessage: `Welcome, ${name}!`,
          rsvpStatus: 'pending',
      };
  }

  return null;
}
