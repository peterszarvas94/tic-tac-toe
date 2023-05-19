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
  title: 'tic tac toe',
  description: 'tic tac toe by Peter Szarvas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={indie.variable}>
        <main className="font-indie">
          <Image src={Paper} alt="paper" width={Paper.width} height={Paper.height} className="
        absolute left-0 top-0 h-screen w-full object-cover
      " />
          {children}
        </main>
      </body>
    </html>
  )
}
