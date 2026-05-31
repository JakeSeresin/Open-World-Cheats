import React from 'react';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-app-border py-6 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-[11px] text-text3 leading-relaxed">
          Open World Cheats — Fan-made reference guide.{' '}
          Game aliases used for identification only.{' '}
          Not affiliated with any game publisher.{' '}
          All game content © their respective owners.
        </p>
        <p className="mt-1 font-mono text-[10px] text-text3/50">
          v1.0.0 · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
