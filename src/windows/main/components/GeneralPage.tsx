import { useQuery } from '@tanstack/react-query';
import { getAppInfo } from '@/modules/app';
import { SettingSection } from './SettingSection';
import { SettingRow } from './SettingRow';

export function GeneralPage() {
  const { data: appInfo } = useQuery({
    queryKey: ['appInfo'],
    queryFn: getAppInfo,
  });

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">General</h1>

      <SettingSection title="Application">
        <SettingRow label="App Name">
          <span className="text-sm text-muted-foreground">
            {appInfo?.name ?? '-'}
          </span>
        </SettingRow>
        <SettingRow label="Version">
          <span className="text-sm text-muted-foreground">
            {appInfo?.version ?? '-'}
          </span>
        </SettingRow>
        <SettingRow label="Identifier">
          <span className="text-sm text-muted-foreground">
            {appInfo?.identifier ?? '-'}
          </span>
        </SettingRow>
        <SettingRow label="Platform" isLast>
          <span className="text-sm text-muted-foreground">
            {appInfo?.platform ?? '-'}
          </span>
        </SettingRow>
      </SettingSection>

      <SettingSection title="Template Features">
        <SettingRow label="Tauri v2 + Rust command IPC" />
        <SettingRow label="React + TypeScript + Vite" />
        <SettingRow label="Jotai + TanStack Query" />
        <SettingRow label="SQLite + typed IPC generation" />
        <SettingRow
          label="Multi-window + Tray + Global Shortcut"
          isLast
        />
      </SettingSection>
    </div>
  );
}
