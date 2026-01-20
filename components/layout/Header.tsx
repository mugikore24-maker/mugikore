"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const pathSegments = pathname?.split("/").filter(Boolean) ?? [];

  // Determine current language from pathname
  const isEnglish = pathSegments.includes("en");

  const navLinks = [
    { href: "/about", enHref: "/about/en", label: "About" },
    { href: "/blog", enHref: "/blog/en", label: "Blog" },
    { href: "/contact", enHref: "/contact/en", label: "Contact" },
  ];

  const getHref = (href: string, enHref?: string) =>
    isEnglish && enHref ? enHref : href;

  // Language toggle function
  const buildLanguagePath = (target: "ja" | "en") => {
    if (!pathname) return "/";

    const segments = pathSegments;
    const isBlogRoute = segments[0] === "blog";

    // Blog routes are nested as /blog/[slug] (ja) and /blog/en/[slug] (en)
    if (isBlogRoute) {
      if (target === "en") {
        if (segments[1] === "en") return pathname; // already English
        if (segments.length === 1) return "/blog/en";
        return `/blog/en/${segments[1]}`;
      }

      if (segments[1] !== "en") return pathname; // already Japanese
      if (segments.length === 2) return "/blog";
      return `/blog/${segments[2]}`;
    }

    if (target === "en") {
      return pathname === "/" ? "/en" : `${pathname}/en`;
    }

    // Strip trailing /en for non-blog routes
    const stripped = pathname.replace(/\/en(\/)?$/, "") || "/";
    return stripped === "" ? "/" : stripped;
  };

  const toggleLanguage = () => {
    const nextPath = buildLanguagePath(isEnglish ? "ja" : "en");
    window.location.href = nextPath;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brown-300 bg-beige-50/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={isEnglish ? "/en" : "/"} className="flex items-center">
            <span className="font-display text-xl font-bold text-brown-900 lg:text-lg">
              UTokyo Bakers' Lab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getHref(link.href, link.enHref)}
                  className="text-sm font-medium text-brown-700 hover:text-brown-900 lg:text-[13px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="rounded border border-brown-400 bg-white px-3 py-1 text-xs font-medium text-brown-700 hover:bg-brown-50 lg:px-2.5"
              aria-label="言語切り替え"
            >
              {isEnglish ? "JP" : "EN"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded p-2 text-brown-700 hover:bg-brown-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t border-brown-300 bg-beige-50/95 backdrop-blur-md md:hidden">
          <div className="space-y-2 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href, link.enHref)}
                className="block rounded px-4 py-2 text-base font-medium text-brown-700 hover:bg-brown-100 hover:text-brown-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="mt-2 w-full rounded border border-brown-400 bg-white px-4 py-2 text-sm font-medium text-brown-700 hover:bg-brown-50"
            >
              {isEnglish ? "日本語に切り替え (JP)" : "Switch to English (EN)"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
