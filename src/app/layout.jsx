import './globals.css'
import { GeistSans } from "geist/font/sans";
import { Suspense } from 'react';
import Hamburger from '@/components/Hamburger';


export const metadata = {
  title: 'WH40k  Database',
  description: 'Search for Astartes or Chapters!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense>
        <body className={GeistSans.className}>
          <Hamburger/>
          {children}
        </body>
      </Suspense>
    </html>
  );
}
