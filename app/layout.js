import './globals.css'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'ICECSP',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "Poppins, sans-serif" }} >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
