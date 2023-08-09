import { Inter, Roboto, Poppins, Manrope } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500']
})

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
})