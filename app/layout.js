import './globals.css'
import { poppins } from './lib/fonts'

import Header from './components/header'
import Footer from './components/footer'

export const metadata = {
  title: 'Technical assessment',
  description: 'Next.js technical assessment',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <div className='layout'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
