import { Mukta, Geist_Mono } from "next/font/google"; // Mukta import gareko
import "./globals.css";
import Header from "./Component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Component/Footer";
import { ThemeProvider } from "./Component/ThemeProvider";
import GoogleTranslate from "./Component/languageTranslate";
import Script from "next/script";

// Mukta font configuration
const mukta = Mukta({
  subsets: ["latin", "devanagari"], // Nepali ko lagi devanagari thapeko
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mukta",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sushim Chaudhary | Full Stack Developer & Portfolio | sushim | Web Development | sushimchaudhary" ,
  description: "Personal portfolio of Sushim Chaudhary. Explore my projects, technical skills, and professional experience in web development.",
  keywords: [
    "Sushim Chaudhary", 
    "Full Stack Developer", 
    "Web Developer Nepal", 
    "Portfolio", 
    "Next.js Developer", 
    "React Developer", 
    "Software Engineer"
  ],
  authors: [{ name: "Sushim Chaudhary" }],
  openGraph: {
    title: "Sushim Chaudhary | Full Stack Developer",
    description: "I'm Sushim Chaudhary, a passionate MERN STACK Developer and Graphic Designer from Nepal. Explore my portfolio to see my projects and technical skills.",    url: "https://sushimchaudhary.com.np/",
    siteName: "Sushim Chaudhary Portfolio",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://sushimchaudhary.com.np/",
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
        style={{ fontFamily: "var(--font-mukta), sans-serif" }} // Default font Mukta banayeko
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