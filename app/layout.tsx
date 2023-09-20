import React from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Providers from '@/components/Providers/Providers';

import './globals.css';

import classes from './page.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className={classes.content}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
