import './globals.css'
import { GeistSans } from "geist/font/sans";
import NavBar from '@/components/NavBar';
import { Suspense } from 'react';


export const metadata = {
  title: 'WH40k  Database',
  description: 'Search for Astartes or Chapters!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense>
        <body className={GeistSans.className}>
            <NavBar/>
          {children}
        </body>
      </Suspense>
    </html>
  );
}
