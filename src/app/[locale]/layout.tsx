import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "@/app/globals.css";
import { getLangDir } from "@/utils/i18n";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  const dir = getLangDir(locale);
  // TODO: add arabic font for the arabic text
  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <header className="content-grid border-red border">
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
