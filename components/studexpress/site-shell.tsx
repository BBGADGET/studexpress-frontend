"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { to: "/", label: "Transport Provider" },
  { to: "/student", label: "Student" },
];

const FOOTER_COMPANY_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/how-it-works", label: "How it Works" },
  { to: "/careers", label: "Careers" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <header className="bg-white">
        <nav
          aria-label="Primary"
          className="flex h-[72px] items-center gap-12 px-6 md:h-[111px] md:items-start md:gap-16 md:pl-[23.75%] md:pt-[47px]"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`border-b-2 pb-1.5 text-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                pathname === item.to
                  ? "border-foreground text-foreground"
                  : "border-transparent text-foreground/80 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="flex flex-1 flex-col">{children}</div>

      <footer className="relative overflow-hidden pt-24">
        <div className="px-6 md:pl-[8.7%]">
          <h2 className="font-display text-[18px] font-semibold uppercase tracking-[0.02em] text-foreground">
            For Companies
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {FOOTER_COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className="text-[18px] text-neutral-600 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[122px] flex flex-wrap items-center justify-between gap-4 px-6 md:px-[6.9%]">
          <Link
            href="/terms"
            className="text-base text-neutral-600 underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
          >
            Terms &amp; Condition
          </Link>
          <p className="text-base text-neutral-600">
            ©2025 StudExpress. All Rights Reserved.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-[129px] h-[0.73em] select-none overflow-hidden whitespace-nowrap text-center font-display text-[11.9vw] font-bold leading-none text-[#ebebe9]"
        >
          StudExpress
        </div>
      </footer>
    </div>
  );
}