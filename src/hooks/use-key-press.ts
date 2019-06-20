import { useEffect } from 'react';

/**
 * Use keyPress hook
 * @param targetKey any valid key from KeyPressEvent
 */
export function useKeyPress(targetKey: string, callback: () => void) {
  // Handle keyup
  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      callback();
    }
  };

  // Add event listeners
  useEffect(() => {
    const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    if (!isBrowser) {
      return null;
    }
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
}
