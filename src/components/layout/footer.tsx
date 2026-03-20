import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-(--color-border)">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-(--color-muted)">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-(--color-muted) transition-colors hover:text-(--color-foreground)"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-(--color-muted) transition-colors hover:text-(--color-foreground)"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-(--color-muted) transition-colors hover:text-(--color-foreground)"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
