import { Geist, Geist_Mono, Literata } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { getCategories } from '@/lib/sanity'
import { ScrollToTop } from '@/lib/ScrollToTop'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", 'cyrillic'],
});

const literataDisplay = Literata({
  variable: "--font-literata-display",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "ТРЕНДАФИЛ::TRENDAFIL",
  description: "Трендафил е модерен македонски портал за вести со најнови информации, анализи и трендови од земјата и светот – брзо, точно и релевантно информирање на едно место.",
};

export default async function RootLayout({ children }) {
  const categories = await getCategories()

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${literataDisplay.variable} antialiased`}
      >
      <ScrollToTop />

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header categories={categories} />

        {children}

        <Footer categories={categories} />
      </ThemeProvider>
      </body>
    </html>
  );
}
