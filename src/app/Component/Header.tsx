"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Project", href: "/project" },
    {
      name: "More",
      href: "#",
      dropdown: [
        { name: "About", href: "/about-us" },
        { name: "Skill", href: "/skills" },
      ],
    },
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
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isActiveParent = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Announcement marquee */}
      <div className="overflow-hidden border-b border-black/5 bg-[#f5f7fa] py-2">
        <div className="whitespace-nowrap text-sm font-medium text-[#ee1035]">
          <div className="inline-block animate-[marquee_28s_linear_infinite] pl-[100%]">
            👋 Welcome to my website! I&apos;m Sushim Chaudhary, a passionate
            beginner MERN STACK Developer and Graphic Designer from Dang,
            Mourighat, Nepal, currently based in Kathmandu.
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Navbar */}
      <header
        className={`z-50 w-full font-[Poppins,sans-serif] transition-all duration-300 ${
          scrolled
            ? "fixed inset-x-0 top-0 border-b border-black/5 bg-white/95 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
            : "relative bg-white md:py-3 py-2"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/logo.png"
              alt="Sushim Chaudhary"
              className="h-12 w-auto max-w-[140px] object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop links */}
          <nav className="ml-6 hidden items-center gap-7 lg:flex">
            {mainLinks.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-lg  font-semibold !no-underline transition-colors ${
                      isActiveParent(item.href)
                        ? "text-[#0f95fe]"
                        : "text-black hover:text-[#0f95fe]"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full mt-1 min-w-[110px] -translate-x-1/2 origin-top rounded-lg border border-black/5 bg-white/95 py-1 shadow-sm backdrop-blur-md transition-all duration-200 ${
                      activeDropdown === item.name
                        ? "pointer-events-auto scale-100 opacity-100"
                        : "pointer-events-none scale-95 opacity-0"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block border-l-2  px-2 py-2 text-lg font-semibold !no-underline transition-colors ${
                          isActive(sub.href)
                            ? "border-[#0f95fe] bg-[#0f95fe]/5 text-[#0f95fe]"
                            : "border-transparent text-black hover:border-[#0f95fe] hover:bg-[#0f95fe]/5 hover:text-[#0f95fe]"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-semibold !no-underline transition-colors ${
                    isActive(item.href)
                      ? "text-[#0f95fe]"
                      : "text-black hover:text-[#0f95fe]"
                  }`}
                >
                  {item.name}
                </Link>
              ),
            )}

            <Link
              href="/certificates/sushim.cv.pdf"
              download
              className="inline-flex items-center rounded-md border-2 border-[#0f95fe] px-4 py-1.5 text-sm font-bold tracking-wide text-[#0f95fe] !no-underline transition-all duration-200 hover:-translate-y-0.5  hover:text-white"
            >
              Download CV
            </Link>

            <Link
              href="/contact"
              className={`inline-flex items-center rounded-md px-5 py-2 text-sm font-bold tracking-wide text-white !no-underline shadow-[0_4px_15px_rgba(15,149,254,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(15,149,254,0.5)] ${
                isActive("/contact")
                  ? "bg-gradient-to-r from-[#0c449a] to-[#0e96fe]"
                  : "bg-[#0f95fe]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Spacer so fixed navbar doesn't overlap content when scrolled */}
      {scrolled && <div className="h-[70px]" />}

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-[80%] max-w-xs flex-col bg-[#f7f8fb] shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-5 py-3">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Sushim Chaudhary"
                className="h-8 w-auto max-w-[130px] object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-1">
            {mainLinks.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name,
                      )
                    }
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-semibold transition-colors ${
                      isActiveParent(item.href)
                        ? "bg-[#0f95fe]/10 text-[#0f95fe]"
                        : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`ml-3 overflow-hidden border-l-2 border-[#0f95fe]/25 pl-3 transition-all duration-200 ${
                      activeDropdown === item.name
                        ? "mt-1 max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded-md px-3 py-2 text-sm font-medium !no-underline transition-colors ${
                          isActive(sub.href)
                            ? "text-[#0f95fe]"
                            : "text-black hover:text-[#0f95fe]"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-base font-semibold !no-underline transition-colors ${
                    isActive(item.href)
                      ? "bg-[#0f95fe]/10 text-[#0f95fe]"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <div className="flex flex-col gap-2 border-t border-black/5 px-5 py-5">
            <Link
              href="/certificates/sushim.cv.pdf"
              download
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-md border-2 border-[#0f95fe] px-4 py-2.5 text-sm font-bold text-[#0f95fe] !no-underline transition-colors hover:bg-[#0f95fe] hover:text-white"
            >
              Download CV
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-[#0f95fe] px-4 py-2.5 text-sm font-bold text-white !no-underline shadow-[0_4px_15px_rgba(15,149,254,0.35)] transition-colors hover:bg-[#0c449a]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}