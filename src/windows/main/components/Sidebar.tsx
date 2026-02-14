import { useAtom } from 'jotai';
import { NAV_ITEMS, activeNavAtom, type NavItem } from '@/stores/settings-nav';
import { cn } from '@/lib/utils';

const NAV_LABELS: Record<NavItem, string> = {
  general: 'General',
  appearance: 'Appearance',
  shortcuts: 'Shortcuts',
  about: 'About',
};

export function Sidebar() {
  const [active, setActive] = useAtom(activeNavAtom);

  return (
    <aside className="flex w-[220px] shrink-0 flex-col gap-1 border-r border-sidebar-border bg-sidebar p-3">
      {NAV_ITEMS.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={cn(
            'rounded-md px-3 py-1.5 text-left text-sm font-medium transition-colors',
            active === item
              ? 'bg-sidebar-accent text-sidebar-accent-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent/50',
          )}
        >
          {NAV_LABELS[item]}
        </button>
      ))}
    </aside>
  );
}
