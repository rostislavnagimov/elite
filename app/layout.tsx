import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import RevealInit from './components/RevealInit'
import JsonLd from './components/JsonLd'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Кадровое агентство Elite | Профессиональный рекрутинг и аутсорсинг персонала',
  description: 'Кадровое агентство, специализирующееся на подборе персонала и рекрутинговых услугах. Мы предлагаем профессиональный аутстаффинг персонала. Elite - надежный партнер в сфере трудоустройства.',
  keywords: 'рекрутинг, аутсорсинг, кадровое агентство, подбор персонала, аутстаффинг',
  openGraph: {
    title: 'Кадровое агентство Elite | Подбор персонала и рекрутинговые услуги',
    description: 'Кадровое агентство, специализирующееся на подборе персонала и рекрутинговых услугах. Elite - надежный партнер в сфере трудоустройства.',
    url: 'https://elite.kz',
    siteName: 'Elite',
    images: [
      {
        url: 'https://static.tildacdn.com/tild6564-3730-4663-a262-303235323832/Elite_logo_white2.png',
        width: 1200,
        height: 630,
        alt: 'Elite Logo',
      },
    ],
    locale: 'ru_KZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кадровое агентство Elite | Подбор персонала и рекрутинговые услуги',
    description: 'Кадровое агентство, специализирующееся на подборе персонала и рекрутинговых услугах.',
    images: ['https://static.tildacdn.com/tild6564-3730-4663-a262-303235323832/Elite_logo_white2.png'],
  },
  alternates: {
    canonical: 'https://elite.kz',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Elite',
  url: 'https://elite.kz',
  logo: 'https://static.tildacdn.com/tild6564-3730-4663-a262-303235323832/Elite_logo_white2.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-727-272-22-22', // Example, should probably check if there's a real one
    contactType: 'customer service',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Elite',
  url: 'https://elite.kz',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://elite.kz/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <RevealInit />
        {children}
      </body>
    </html>
  )
}
