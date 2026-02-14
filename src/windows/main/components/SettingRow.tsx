import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SettingRowProps {
  label: string;
  description?: string;
  children?: ReactNode;
  isLast?: boolean;
}

export function SettingRow({
  label,
  description,
  children,
  isLast = false,
}: SettingRowProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between px-4 py-3',
        !isLast && 'border-b',
      )}
    >
      <div className="space-y-0.5">
        <p className="text-sm font-medium">{label}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
