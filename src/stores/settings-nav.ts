import { atom } from 'jotai';

export const NAV_ITEMS = ['general', 'appearance', 'shortcuts', 'about'] as const;
export type NavItem = (typeof NAV_ITEMS)[number];
export const activeNavAtom = atom<NavItem>('general');
