import { Metadata } from 'next'
import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'О компании - соискателям | Elite',
  description: 'Кадровый Холдинг Elite приглашает вас стать одним из наших сотрудников. Одна из первых кадровых компаний на рынке Республики Казахстан.',
  alternates: {
    canonical: 'https://elite.kz/about',
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={aboutSchema} />
      <Header />
      <div className="flex min-h-screen items-center justify-center p-8 pt-[120px]">
        <h1 className="text-center font-[Gilroy,sans-serif] text-3xl font-bold text-[#26262b]">
          О компании - соискателям (в разработке)
        </h1>
      </div>
      <Footer />
    </main>
  )
}
