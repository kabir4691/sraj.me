/**
 * Util to check if the app is in the browser environment
 */

export const isBrowser = () => !!(typeof window !== 'undefined' && window.document && window.document.createElement);
