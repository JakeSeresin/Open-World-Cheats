import React from 'react';
import type { Platform } from '@/types';
import { FaWindows } from 'react-icons/fa';
import { SiPlaystation, SiXbox } from 'react-icons/si';

const CONFIG: Record<Platform, { label: string; color: string; Icon: React.ElementType }> = {
  PC:          { label: 'PC',          color: '#3B82F6', Icon: FaWindows    },
  PlayStation: { label: 'PlayStation', color: '#8B5CF6', Icon: SiPlaystation },
  Xbox:        { label: 'Xbox',        color: '#22C55E', Icon: SiXbox        },
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
