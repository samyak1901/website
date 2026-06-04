import { profile, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-background)">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-(--color-muted) sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Software, data, and AI systems.</p>
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="link-glow"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
