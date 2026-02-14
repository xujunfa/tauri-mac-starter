import { describe, expect, it } from 'vitest';
import { createStore } from 'jotai';
import { activeNavAtom, NAV_ITEMS } from './settings-nav';

describe('settings-nav store', () => {
  it('defaults to general', () => {
    const store = createStore();
    expect(store.get(activeNavAtom)).toBe('general');
  });

  it('allows switching nav item', () => {
    const store = createStore();
    store.set(activeNavAtom, 'appearance');
    expect(store.get(activeNavAtom)).toBe('appearance');
  });

  it('exports all nav items', () => {
    expect(NAV_ITEMS).toEqual(['general', 'appearance', 'shortcuts', 'about']);
  });
});
