import Image from 'next/image';
import './globals.css';
import Paper from "@/images/paper.jpg";

import { Indie_Flower } from 'next/font/google'

const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--indie'
})

export const metadata = {
  title: 'Big-Tac-Toe (Amoeba)',
  description: 'Big-Tac-Toe (Amoeba) by Peter Szarvas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={indie.variable}>
        <main className="font-indie text-2xl">
          <Image src={Paper} alt="paper" width={Paper.width} height={Paper.height} className="
            fixed left-0 top-0 h-screen w-full 
          " />
          {children}
        </main>
      </body>
    </html>
  )
}
