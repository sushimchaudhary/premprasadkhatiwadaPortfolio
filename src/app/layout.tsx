import { Mukta, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Component/Footer";
import { ThemeProvider } from "./Component/ThemeProvider";
import GoogleTranslate from "./Component/languageTranslate";
import Script from "next/script";

// Mukta font configuration
const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mukta",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Prem Prasad Khatiwada | Operations Manager | Operations Planning & Workflow Management",
  description:
    "Portfolio of Prem Prasad Khatiwada, an Operations Manager focused on operations planning, workflow management, team coordination, process improvement, and logistics.",
  keywords: [
    "Prem Prasad Khatiwada",
    "Operations Manager",
    "Operations Manager Nepal",
    "Operations Planning",
    "Workflow Management",
    "Team Coordination",
    "Process Improvement",
    "Logistics Operations",
  ],
  authors: [{ name: "Prem Prasad Khatiwada" }],
  openGraph: {
    title: "Prem Prasad Khatiwada | Operations Manager",
    description:
      "Operations Manager experienced in operations planning, workflow management, team coordination, process improvement, and practical problem solving.",
    url: "/",
    siteName: "Prem Prasad Khatiwada",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SZQXE52XTE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SZQXE52XTE');
          `}
        </Script>
      </head>

      <body
        className={`${mukta.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-mukta), sans-serif" }}
      >
        <GoogleTranslate />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}