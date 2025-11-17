import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { WhatsAppChat } from '@/components/whatsapp-chat'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: 'VuzaTrading- Aluminium Fabrication & Security Systems',
  description: 'Professional aluminium fabrication, CCTV installation, electric fencing, alarm systems, and intercom solutions. Trusted security experts.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-sans antialiased`}>
        {children}
        <WhatsAppChat />
        <Analytics />
      </body>
    </html>
  )
}
