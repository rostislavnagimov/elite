import { Metadata } from 'next'
import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Аутсорсинг персонала в Алматы | Кадровый аутсорсинг - Elite',
  description: 'Услуги аутсорсинга рабочего персонала в Алматы. Аренда персонала, сотрудников для различных сфер. Заказать аутсорсинг персонала от компании Elite.',
  alternates: {
    canonical: 'https://elite.kz/outsourcing',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Аутсорсинг персонала',
  serviceType: 'Outsourcing',
  provider: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz',
  },
  areaServed: {
    '@type': 'State',
    name: 'Казахстан',
  },
  description: 'Передача определенных функций по управлению персоналом внешней организации для повышения эффективности бизнеса.',
};

export default function OutsourcingPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={serviceSchema} />
      <Header />
      <div className="flex min-h-screen items-center justify-center p-8 pt-[120px]">
        <h1 className="text-center font-[Gilroy,sans-serif] text-3xl font-bold text-[#26262b]">
          Страница в разработке: /outsourcing
        </h1>
      </div>
      <Footer />
    </main>
  )
}
