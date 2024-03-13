import React from "react";
import { PreLoader } from "@/shared/loaders";
import type { Metadata } from "next";
import { AppProvider } from "@/contexts/AppContext";
import { Inter } from "next/font/google";
import Localfont from 'next/font/local'
import { Toaster }  from 'react-hot-toast'
import "@/styles/index.scss";

const inter = Inter({ subsets: ['latin'] });


const myFont = Localfont({
  src: [
    {
      path: '../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal'
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
      style: 'normal'
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
          <Toaster
            position="top-right"
            // autoClose={2000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            // theme="dark"
          />
          <PreLoader /> 
          <React.Fragment>
            {children}
          </React.Fragment>
        </AppProvider>
      </body>
    </html>
  );
}
