import React from 'react';

export function CheatCardSkeleton() {
  return (
    <div className="rounded-xl border border-app-border bg-surface overflow-hidden animate-pulse">
      {/* Header */}
      <div className="p-4 border-b border-app-border">
        <div className="flex items-center justify-between gap-3">
          <div className="h-4 w-2/5 rounded bg-surface2" />
          <div className="h-5 w-12 rounded-full bg-surface2" />
        </div>
        <div className="mt-2 h-3 w-3/5 rounded bg-surface2" />
      </div>

      {/* Codes */}
      <div className="p-4 space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-5 w-20 rounded bg-surface2" />
            <div className="h-4 flex-1 rounded bg-surface2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CheatCardSkeleton key={i} />
      ))}
    </div>
  );
}
