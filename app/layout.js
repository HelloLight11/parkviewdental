import './globals.css'

export const metadata = {
  title: 'Parkview Modern Dentistry | Seattle, WA',
  description: 'Dentistry, elevated. Advanced technology and modern care in the heart of Seattle.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
