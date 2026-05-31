import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { SidebarAds } from '@/components/SidebarAds';

export const metadata: Metadata = {
  title: 'Open World Cheats',
  description:
    'Find every cheat code for your favorite open-world action games including III, Vice, San, IV, V, and LC — fully offline, searchable, and installable.',
  applicationName: 'Open World Cheats',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'OW Cheats',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icons/icon-192.png',
  },
  keywords: ['cheat codes', 'open world games', 'offline', 'pwa', 'reference'],
};

export const viewport: Viewport = {
  themeColor: '#1E1E1E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script: apply dark/light class before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('owc_theme');document.documentElement.classList.toggle('dark',t!=='light')}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        {/* Sidebar ads — hidden on mobile/tablet via CSS, fixed on desktop */}
        <SidebarAds />

        {/* Main app content — padded on lg+ to avoid overlap with 160px sidebars */}
        <div className="lg:px-[176px]">
          {children}
        </div>
      </body>
    </html>
  );
}
