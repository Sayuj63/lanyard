import type { Metadata } from 'next'
import './globals.css'
import NotificationBar from '@/components/header/NotificationBar'
import MainHeader from '@/components/header/MainHeader'

export const metadata: Metadata = {
  title: 'Lanyard Nation - Bulk Custom Lanyards & ID Products',
  description: 'Factory direct custom lanyards, ID cards, wristbands and promotional products. Bulk specialists serving schools, corporations and events since 2008.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">
        <NotificationBar />
        <div style={{ paddingTop: '40px' }}> {/* Account for fixed notification bar */}
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  )
}