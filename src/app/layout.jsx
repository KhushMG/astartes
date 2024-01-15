import './globals.css'
import { GeistSans } from "geist/font/sans";
import NavBar from '@/components/NavBar';
import { Suspense } from 'react';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'WH40k Astartes Database',
  description: 'Search for Astartes by name, rank, or allegiance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense>
        <body className={GeistSans.className}>
            <NavBar/>
          {children}
          <section id="footer" className="bottom-0">
            <Footer />
          </section>
        </body>
      </Suspense>
    </html>
  );
}
