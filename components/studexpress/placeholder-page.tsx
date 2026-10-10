import { SiteShell } from "@/components/studexpress/site-shell";

interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <SiteShell>
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">
            {title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            This page is a placeholder.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}