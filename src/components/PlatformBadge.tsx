import React from 'react';
import type { Platform } from '@/types';
import { FaWindows } from 'react-icons/fa';
import { SiPlaystation } from 'react-icons/si';

/**
 * SiXbox was removed from react-icons in v5.3+.
 * Using an inline SVG so this never breaks on library updates.
 */
function XboxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4.102 4.102C2.218 5.986 1 8.614 1 12c0 3.074 1.07 5.965 3.062 8.248C5.855 19.217 9.153 14.43 12 11.147c2.847 3.283 6.145 8.07 7.938 9.101C21.93 17.965 23 15.074 23 12c0-3.386-1.218-6.014-3.102-7.898C17.994 2.198 15.366 1 12 1 8.634 1 6.006 2.198 4.102 4.102zM5.197 3.01C7.124 1.724 9.47 1 12 1s4.876.724 6.803 2.01C16.977 4.744 14.68 7.48 12 9.806 9.32 7.48 7.023 4.744 5.197 3.01zM3.75 19.576C2.407 17.755 1.5 15.469 1.5 12.75c0-2.048.557-3.97 1.524-5.607C4.13 9.16 6.52 12.024 9.44 14.788c-1.94 2.354-4.074 4.28-5.69 4.788zm16.5 0c-1.616-.508-3.75-2.434-5.69-4.788 2.92-2.764 5.31-5.628 6.416-7.645.967 1.637 1.524 3.559 1.524 5.607 0 2.719-.907 5.005-2.25 6.826z" />
    </svg>
  );
}

const CONFIG: Record<Platform, { label: string; color: string; Icon: React.ElementType }> = {
  PC:          { label: 'PC',          color: '#3B82F6', Icon: FaWindows    },
  PlayStation: { label: 'PlayStation', color: '#8B5CF6', Icon: SiPlaystation },
  Xbox:        { label: 'Xbox',        color: '#22C55E', Icon: XboxIcon      },
};

interface Props {
  platform: Platform;
  code: string;
}

export function PlatformBadge({ platform, code }: Props) {
  const { label, color, Icon } = CONFIG[platform];

  return (
    <div className="flex items-start gap-2 py-2 border-b border-app-border last:border-0">
      {/* Badge */}
      <span
        className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shrink-0 mt-0.5"
        style={{
          color,
          background: `${color}1A`,
          border: `1px solid ${color}40`,
        }}
      >
        <Icon className="w-2.5 h-2.5" />
        {label}
      </span>

      {/* Code */}
      <code
        className="font-mono text-sm text-text1 leading-snug break-all"
        style={{ color: '#00FFCC' }}
      >
        {code}
      </code>
    </div>
  );
}
