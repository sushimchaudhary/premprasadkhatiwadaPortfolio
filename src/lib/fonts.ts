import { Poppins, Inter } from "next/font/google";

// Display / heading face — matches the weight the site already leans on
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Body face — pairs cleanly with Poppins for longer paragraphs
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Add both variables once in app/layout.tsx:
 *
 *   import { poppins, inter } from "@/lib/fonts";
 *
 *   export default function RootLayout({ children }: { children: React.ReactNode }) {
 *     return (
 *       <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
 *         <body className="font-sans">{children}</body>
 *       </html>
 *     );
 *   }
 *
 * Then in tailwind.config.ts:
 *
 *   theme: {
 *     extend: {
 *       fontFamily: {
 *         sans: ["var(--font-inter)", "sans-serif"],
 *         display: ["var(--font-poppins)", "sans-serif"],
 *       },
 *     },
 *   },
 *
 * That makes `font-sans` (body) and `font-display` (headings) available
 * everywhere, with no FOUC and no arbitrary font-[Poppins,sans-serif] hacks.
 */