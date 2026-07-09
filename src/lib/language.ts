export const LANGUAGES = [
  { code: "ne", label: "नेपाली", short: "ने (NP)" },
  { code: "en", label: "English", short: "Eng (US)" },
  { code: "ja", label: "Japanese", short: "日 (JA)" },
  { code: "hi", label: "Hindi", short: "हि (HI)" },
  { code: "ko", label: "Korean", short: "한 (KO)" },
] as const;

export type Language = (typeof LANGUAGES)[number];
export type LanguageCode = Language["code"];