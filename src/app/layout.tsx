import type { Metadata } from "next";
import "./globals.css";
import { lexend } from "../Assets/Font/Fonts";
import Provider from "../lib/themeProvider/Provider";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Next Gen Interface",
  description: "Professional web and mobile development, UI/UX design, and graphic design services. Transforming ideas into stunning digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lexend.variable} m-0 p-0 `}>
      <body
        className={`${lexend.variable} text-lg m-0 p-0 bg-background text-white transition-all duration-200 antialiased`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
