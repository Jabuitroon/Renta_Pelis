import { Inter, Montserrat_Alternates,Geist, Geist_Mono } from 'next/font/google'

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
