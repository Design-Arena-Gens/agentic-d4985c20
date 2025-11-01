import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maths Kit Training Report - Gandhi Aided Primary School',
  description: '2 Days Maths Kit Training Completion Report',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
