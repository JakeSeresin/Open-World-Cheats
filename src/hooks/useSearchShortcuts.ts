'use client';

import { useEffect, RefObject } from 'react';

/**
 * Press "/" to focus the search input.
 * Press "Escape" to clear and blur the search input.
 */
export function useSearchShortcuts(
  inputRef: RefObject<HTMLInputElement>,
  onClear: () => void,
): void {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        inputRef.current?.focus();
      }

      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        onClear();
        inputRef.current?.blur();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputRef, onClear]);
}
