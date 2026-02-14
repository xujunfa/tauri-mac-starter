import type { ReactNode } from 'react';

interface SettingSectionProps {
  title: string;
  children: ReactNode;
}

export function SettingSection({ title, children }: SettingSectionProps) {
  return (
    <section className="space-y-2">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <div className="rounded-lg border bg-card">{children}</div>
    </section>
  );
}
