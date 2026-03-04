import { Metadata } from 'next'
import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Услуги аутстаффинга персонала в Алматы | Elite',
  description: 'Оптимизация бизнеса путем аутстаффинга компании. Предоставление персонала для быстрого решения задач. 25 лет на рынке рекрутинга.',
  alternates: {
    canonical: 'https://elite.kz/outstaffing',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Аутстаффинг персонала',
  serviceType: 'Outstaffing',
  provider: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz',
  },
  areaServed: {
    '@type': 'State',
    name: 'Казахстан',
  },
  description: 'Вывод персонала за штат, оформление сотрудников в штат провайдера для оптимизации налогообложения и снижения рисков.',
};

export default function OutstaffingPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={serviceSchema} />
      <Header />
      <div className="flex min-h-screen items-center justify-center p-8 pt-[120px]">
        <h1 className="text-center font-[Gilroy,sans-serif] text-3xl font-bold text-[#26262b]">
          Страница в разработке: /outstaffing
        </h1>
      </div>
      <Footer />
    </main>
  )
}
