'use client';

import React, { useEffect, useRef } from 'react';

interface SidebarAdProps {
  side: 'left' | 'right';
}

/**
 * Adsterra 160×600 sidebar ad.
 * - Rendered only on screens ≥ 1024px (lg breakpoint) via CSS.
 * - Uses a ref-based script injection approach (no Next.js Script component)
 *   to reliably initialise Adsterra's invoke.js after mount, since it reads
 *   the atOptions global that must be set on the same window before the
 *   invoke script runs.
 */
export function SidebarAd({ side }: SidebarAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    // Only inject once, only on client, only when container is mounted
    if (injected.current || !containerRef.current) return;
    injected.current = true;

    const container = containerRef.current;

    // Step 1: set atOptions on window
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.text = `
      window.atOptions = {
        'key'    : '9f37aaa88f88cbfd811c0ef3d98341a6',
        'format' : 'iframe',
        'height' : 600,
        'width'  : 160,
        'params' : {}
      };
    `;
    container.appendChild(configScript);

    // Step 2: load invoke.js (reads atOptions synchronously)
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = 'https://www.highperformanceformat.com/9f37aaa88f88cbfd811c0ef3d98341a6/invoke.js';
    invokeScript.async = true;
    container.appendChild(invokeScript);

    return () => {
      // Clean up on unmount (dev HMR)
      try {
        container.removeChild(configScript);
        container.removeChild(invokeScript);
      } catch (_) {}
      injected.current = false;
    };
  }, []);

  return (
    <div
      className={[
        // Hidden below lg breakpoint
        'hidden lg:flex',
        // Fixed to viewport edges, vertically centred
        'fixed top-1/2 -translate-y-1/2 z-40',
        side === 'left' ? 'left-0' : 'right-0',
        // Exact ad dimensions
        'w-[160px] h-[600px]',
        // Prevent any pointer events bleeding into the main UI
        'pointer-events-auto',
        // Subtle container so the ad slot is visible even before load
        'overflow-hidden',
      ].join(' ')}
      aria-label={`Advertisement — ${side} sidebar`}
      aria-hidden="false"
    >
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}

/**
 * Drop both sidebars in one import.
 */
export function SidebarAds() {
  return (
    <>
      <SidebarAd side="left" />
      <SidebarAd side="right" />
    </>
  );
}
