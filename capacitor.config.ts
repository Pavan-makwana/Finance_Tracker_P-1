import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vaultix.finance',
  appName: 'Vaultix',
  webDir: 'public',
  server: {
    // In local development, points to your Next.js dev server on your network IP
    // For emulators, you can also use http://10.0.2.2:3001
    // For production release, replace with your live domain (e.g., https://your-domain.com)
    url: process.env.CAPACITOR_SERVER_URL || 'http://10.10.81.10:3001',
    cleartext: true,
  },
  android: {
    allowMixedContent: true,
  },
};

export default config;
