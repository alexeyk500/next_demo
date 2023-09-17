import React from 'react';

import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';

import './globals.css';

import classes from './page.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={classes.content}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
