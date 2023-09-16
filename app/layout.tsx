import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import classes from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A500 Next App',
  description: 'Generated by A500',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={classes.container}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
