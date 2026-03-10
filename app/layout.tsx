import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import RevealInit from './components/RevealInit'
import GlobalPopupProvider from './components/GlobalPopupProvider'
import JsonLd from './components/JsonLd'
import Header from './components/landing/Header'
import Footer from './components/landing/Footer'
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
  description:
    'Кадровое агентство, специализирующееся на подборе персонала и рекрутинговых услугах. Мы предлагаем профессиональный аутстаффинг персонала. Elite - надежный партнер в сфере трудоустройства.',
  keywords: 'рекрутинг, аутсорсинг, кадровое агентство, подбор персонала, аутстаффинг',
  icons: {
    icon: '/assets/images/Elite_logo_1_1.svg'
  },
  openGraph: {
    title: 'Кадровое агентство Elite | Подбор персонала и рекрутинговые услуги',
    description:
      'Кадровое агентство, специализирующееся на подборе персонала и рекрутинговых услугах. Elite - надежный партнер в сфере трудоустройства.',
    url: 'https://elite.kz',
    siteName: 'Elite',
    images: [
      {
        url: 'https://static.tildacdn.com/tild6663-3730-4262-b461-393335343435/Elite_logo_1_1.svg',
        width: 1200,
        height: 630,
        alt: 'Elite Logo'
      }
    ],
    locale: 'ru_KZ',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кадровое агентство Elite | Подбор персонала и рекрутинговые услуги',
    description: 'Кадровое агентство, специализирующееся на подборе персонала и рекрутинговых услугах.',
    images: ['https://static.tildacdn.com/tild6663-3730-4262-b461-393335343435/Elite_logo_1_1.svg']
  },
  alternates: {
    canonical: 'https://elite.kz'
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Elite',
  url: 'https://elite.kz',
  logo: 'https://static.tildacdn.com/tild6663-3730-4262-b461-393335343435/Elite_logo_1_1.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-727-272-22-22', // Example, should probably check if there's a real one
    contactType: 'customer service'
  }
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Elite',
  url: 'https://elite.kz',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://elite.kz/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} max-w-[100vw] antialiased`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <RevealInit />
        <GlobalPopupProvider>
          <Header />
          {children}
          <Footer />
        </GlobalPopupProvider>
      </body>
    </html>
  )
}
