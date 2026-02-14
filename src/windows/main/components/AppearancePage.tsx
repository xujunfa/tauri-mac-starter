import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getSettings, setSettings } from '@/modules/settings';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { SettingSection } from './SettingSection';
import { SettingRow } from './SettingRow';
import { cn } from '@/lib/utils';
import { useCallback, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';
const THEMES: Theme[] = ['light', 'dark', 'system'];

function applyTheme(theme: string) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else if (theme === 'light') {
    root.classList.remove('dark');
  } else {
    // system
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    root.classList.toggle('dark', prefersDark);
  }
}

export function AppearancePage() {
  const queryClient = useQueryClient();
  const { data: settings } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  const mutation = useMutation({
    mutationFn: setSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
  });

  const currentTheme = (settings?.theme ?? 'system') as Theme;

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const handleThemeChange = useCallback(
    (theme: Theme) => {
      applyTheme(theme);
      mutation.mutate({
        theme,
        locale: null,
        launch_on_login: null,
      });
    },
    [mutation],
  );

  const handleLaunchOnLoginChange = useCallback(
    (checked: boolean) => {
      mutation.mutate({
        launch_on_login: checked,
        theme: null,
        locale: null,
      });
    },
    [mutation],
  );

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Appearance</h1>

      <SettingSection title="Theme">
        <div className="flex gap-2 px-4 py-3">
          {THEMES.map((theme) => (
            <Button
              key={theme}
              variant={currentTheme === theme ? 'default' : 'outline'}
              size="sm"
              className={cn('capitalize')}
              onClick={() => handleThemeChange(theme)}
            >
              {theme}
            </Button>
          ))}
        </div>
      </SettingSection>

      <SettingSection title="Language">
        <SettingRow label="Locale" isLast>
          <span className="text-sm text-muted-foreground">
            {settings?.locale ?? '-'}
          </span>
        </SettingRow>
      </SettingSection>

      <SettingSection title="Startup">
        <SettingRow label="Launch on Login" description="Open app when you log in to your Mac" isLast>
          <Switch
            checked={settings?.launch_on_login ?? false}
            onCheckedChange={handleLaunchOnLoginChange}
          />
        </SettingRow>
      </SettingSection>
    </div>
  );
}
