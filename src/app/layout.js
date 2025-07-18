import { Inter } from 'next/font/google'
import './globals.css'
import Image from "next/image";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ashutosh Pandey | Portfolio',
  description: 'Designed by Ashutos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
