import type { Metadata } from "next";
import { ThemeProvider } from "./theme-provider"

import localFont from "next/font/local";

import "./globals.css";

const mangoli = localFont({
    src: [
        {
            path: '../../public/fonts/mangoli/mangoli.otf',
            weight: '400'
        }
    ],
    variable: "--font-mangoli"
})
const poppins = localFont({
    src: [
        {
            path: '../../public/fonts/poppins/poppins-regular.ttf',
            weight: '400'
        },
        {
            path: '../../public/fonts/poppins/poppins-light.ttf',
            weight: '300'
        }
    ],
    variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Chep0x61's Website",
  description: "Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning className={`${mangoli.variable} ${poppins.variable} text-poppins`}>
      <head>
          <link rel="icon" href="favicon.ico" sizes="any"/>
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          <link rel="icon" href="favicon.png" type="image/png" sizes="any"/>
          <link rel="apple-touch-icon" href="apple-touch-icon.png" type="image/png" sizes="any"/>
      </head>
      <body className="bg-[#f8f8f8] dark:bg-[#1a1a1a] color-[#1a1a1a] dark:color[#f8f8f8]">
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
      >
          <main>
              {children}
          </main>
      </ThemeProvider>
      </body>
      </html>
  );
}
