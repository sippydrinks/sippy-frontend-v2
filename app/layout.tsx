import type { Metadata } from "next";
import { AppProvider } from "@/contexts/AppContext";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "@/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: "Sippy Life",
  description: "Sippy Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
