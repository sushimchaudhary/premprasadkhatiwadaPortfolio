"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { LANGUAGES } from "../../lib/language";
import { changeLanguage, getStoredLanguage } from "../Component/GoogleTranslate";

export default function LanguageSwitcher({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const containerRef = useRef<HTMLDivElement>(null);

  // Read the persisted choice after mount (avoids SSR/client mismatch).
  useEffect(() => {
    setCurrent(getStoredLanguage());
  }, []);

  // Close the dropdown when clicking outside it.
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function handleSelect(code: string) {
    setCurrent(code);
    setOpen(false);
    changeLanguage(code);
  }

  // "notranslate" keeps Google from translating the switcher's own labels —
  // otherwise "English" ends up translated into whatever language is active.
  if (variant === "mobile") {
    return (
      <div className="notranslate flex flex-wrap gap-2 px-1">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleSelect(lang.code)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              current === lang.code
                ? "border-[#0f95fe] bg-[#0f95fe]/10 text-[#0f95fe]"
                : "border-[#dee2e6] bg-white text-gray-700 hover:border-[#0f95fe] hover:text-[#0f95fe]"
            }`}
          >
            {lang.short}
          </button>
        ))}
      </div>
    );
  }

  const activeLang = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[1];

  return (
    <div ref={containerRef} className="notranslate relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 !rounded-md border border-[#dee2e6] px-1.5 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:border-[#0f95fe] hover:text-[#0f95fe]"
      >
        <Globe size={16} />
        {activeLang.short}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border border-[#eaecef] bg-white py-1 shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={current === lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex  items-center justify-between px-4 py-2 rounded text-sm transition-colors ${
                  current === lang.code
                    ? "bg-[#0f95fe]/10 font-semibold text-[#0f95fe]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {/* {lang.label} */}
                <span className="text-xs text-gray-400">{lang.short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}