import { atom } from 'jotai';

// Minimal placeholder state used by the floating overlay window.
export const overlayPanelVisibleAtom = atom(true);
export const overlayPanelMessageAtom = atom('Overlay Placeholder');
