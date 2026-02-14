import { useQuery } from '@tanstack/react-query';
import { getAppInfo } from '@/modules/app';
import { TEMPLATE_INFO } from '@/core/config';

export function AboutPage() {
  const { data: appInfo } = useQuery({
    queryKey: ['appInfo'],
    queryFn: getAppInfo,
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-semibold">
        {appInfo?.name ?? TEMPLATE_INFO.name}
      </h1>
      <p className="text-sm text-muted-foreground">
        Version {appInfo?.version ?? TEMPLATE_INFO.version}
      </p>
      <p className="max-w-md text-sm text-muted-foreground">
        {TEMPLATE_INFO.description}
      </p>
      <a
        href="https://github.com/xujunfa/tauri-mac-starter"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary underline-offset-4 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
}
