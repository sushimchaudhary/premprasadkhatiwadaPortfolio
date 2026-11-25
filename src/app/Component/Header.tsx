"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import GoogleTranslate from "../Component/languageTranslate";
import LanguageSwitcher from "../Component/languageSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
  ];

  // Sticky/scrolled navbar state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isActiveParent = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <GoogleTranslate />

      <div className="mx-auto max-w-7xl">
        <header
          className={`z-50 w-full transition-all duration-300 ${
            scrolled
              ? "fixed inset-x-0 top-0 border-b border-[#b30302]/10 bg-white/85 py-3 shadow-[0_6px_24px_rgba(179,3,2,0.08)] backdrop-blur-md"
              : "relative bg-transparent py-3"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center">
              <img
                src="/logo.png"
                alt="Prem Prasad Khatiwada"
                className="h-12 w-auto max-w-[140px] object-contain transition-all duration-300"
              />
            </Link>

            {/* Desktop links centered + right actions */}
            <nav className="hidden flex-1 items-center justify-between lg:flex">
              <div className="flex flex-1 items-center justify-center gap-7">
                {mainLinks.map((item) => {
                  const active = isActiveParent(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{
                        color: active ? "#b30302" : "#000000",
                        textDecoration: "none",
                      }}
                      className="py-1 text-lg font-semibold !no-underline transition-colors hover:!text-[#b30302]"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <LanguageSwitcher variant="desktop" />

                <Link
                  href="/certificates/sushim.cv.pdf"
                  download
                  style={{ textDecoration: "none" }}
                  className="inline-flex items-center rounded-md border-2 border-[#b30302] bg-white/80 px-4 py-1.5 text-sm font-bold tracking-wide text-black !no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b30302] hover:text-white"
                >
                  Download CV
                </Link>

                <Link
                  href="/contact"
                  style={{ textDecoration: "none" }}
                  className={`inline-flex items-center rounded-md px-5 py-2 text-sm font-bold tracking-wide text-white !no-underline shadow-[0_4px_15px_rgba(179,3,2,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(179,3,2,0.42)] ${
                    isActive("/contact")
                      ? "bg-gradient-to-r from-[#8f0201] to-[#b30302]"
                      : "bg-[#b30302] hover:bg-[#960201]"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </nav>

            {/* Mobile toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher variant="mobile" />

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="rounded-md border border-slate-200 bg-white/80 p-2 text-black transition-colors hover:border-[#b30302]/40 hover:bg-[#b30302]/10 hover:text-[#b30302]"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer so fixed navbar doesn't overlap content when scrolled */}
      {scrolled && <div className="h-[72px]" />}

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-3">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Prem Prasad Khatiwada"
                className="h-8 w-auto max-w-[130px] object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="rounded-md p-2 text-black transition-colors hover:bg-[#b30302]/10 hover:text-[#b30302]"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-3">
            {mainLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: active ? "#b30302" : "#000000",
                    textDecoration: "none",
                  }}
                  className={`rounded-md px-3 py-2.5 text-base font-semibold !no-underline transition-colors ${
                    active ? "bg-[#b30302]/10" : "hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="mt-2 border-t border-slate-200/80 pt-3">
              <p className="notranslate mb-2 px-1 text-xs font-bold uppercase tracking-wide text-black/60">
                Language
              </p>
              <LanguageSwitcher variant="mobile" />
            </div>
          </nav>

          <div className="flex flex-col gap-2 border-t border-slate-200/80 px-5 py-5">
            <Link
              href="/certificates/sushim.cv.pdf"
              download
              onClick={() => setMobileOpen(false)}
              style={{ textDecoration: "none" }}
              className="inline-flex items-center justify-center rounded-md border-2 border-[#b30302] px-4 py-2.5 text-sm font-bold text-black !no-underline transition-colors hover:bg-[#b30302] hover:text-white"
            >
              Download CV
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{ textDecoration: "none" }}
              className="inline-flex items-center justify-center rounded-md bg-[#b30302] px-4 py-2.5 text-sm font-bold text-white !no-underline shadow-[0_4px_15px_rgba(179,3,2,0.28)] transition-colors hover:bg-[#960201]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}