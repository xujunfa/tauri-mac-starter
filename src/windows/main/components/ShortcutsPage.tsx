import { DEFAULT_SHORTCUTS } from '@/core/config';
import { SettingSection } from './SettingSection';
import { SettingRow } from './SettingRow';

function Kbd({ children }: { children: string }) {
  return (
    <kbd className="rounded-md border bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">
      {children}
    </kbd>
  );
}

export function ShortcutsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Shortcuts</h1>

      <SettingSection title="Global Shortcuts">
        <SettingRow label="Toggle Overlay">
          <Kbd>{DEFAULT_SHORTCUTS.toggleOverlay}</Kbd>
        </SettingRow>
        <SettingRow label="Toggle Main Window" isLast>
          <Kbd>{DEFAULT_SHORTCUTS.toggleMain}</Kbd>
        </SettingRow>
      </SettingSection>
    </div>
  );
}
