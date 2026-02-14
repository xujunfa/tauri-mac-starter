import { describe, expect, it } from 'vitest';
import { createStore } from 'jotai';
import { overlayPanelVisibleAtom, overlayPanelMessageAtom } from './overlay';

describe('overlay placeholder store', () => {
  it('has visible panel by default', () => {
    const store = createStore();
    expect(store.get(overlayPanelVisibleAtom)).toBe(true);
  });

  it('allows message updates', () => {
    const store = createStore();
    store.set(overlayPanelMessageAtom, 'Custom placeholder');
    expect(store.get(overlayPanelMessageAtom)).toBe('Custom placeholder');
  });
});
