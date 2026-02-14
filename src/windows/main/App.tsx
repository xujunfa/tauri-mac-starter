import { useAtomValue } from 'jotai';
import { activeNavAtom } from '@/stores/settings-nav';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sidebar } from './components/Sidebar';
import { GeneralPage } from './components/GeneralPage';
import { AppearancePage } from './components/AppearancePage';
import { ShortcutsPage } from './components/ShortcutsPage';
import { AboutPage } from './components/AboutPage';
import type { NavItem } from '@/stores/settings-nav';

const PAGE_MAP: Record<NavItem, React.ComponentType> = {
  general: GeneralPage,
  appearance: AppearancePage,
  shortcuts: ShortcutsPage,
  about: AboutPage,
};

function App() {
  const active = useAtomValue(activeNavAtom);
  const Page = PAGE_MAP[active];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <ScrollArea className="flex-1">
        <main className="p-8">
          <Page />
        </main>
      </ScrollArea>
    </div>
  );
}

export default App;
