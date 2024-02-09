"use client"
import React from 'react'
import ScrollToTop from './ScrollToTop'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const LayoutProvider = ({ children } : {children: React.ReactNode}) => {

    return (
    <html lang="en" className={poppins.className}>
        <head>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
            <ScrollToTop/>
            { children }
        </body>
    </html>
  )
}

export default LayoutProvider
