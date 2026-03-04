import { Metadata } from 'next'
import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Подбор персонала в Алматы | Специалисты по подбору персонала - Elite',
  description: 'Специалисты по подбору персонала в Казахстане сделают отбор сотрудников для работ и выполнения задач любой сложности. Кадровое агентство Elite имеет более 25 лет опыта.',
  alternates: {
    canonical: 'https://elite.kz/podbor-personala',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Подбор персонала',
  serviceType: 'Recruitment',
  provider: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz',
  },
  areaServed: {
    '@type': 'State',
    name: 'Казахстан',
  },
  description: 'Профессиональный подбор персонала высшего и среднего звена в Алматы и по всему Казахстану.',
};

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={serviceSchema} />
      <Header />
      <div className="flex min-h-screen items-center justify-center p-8 pt-[120px]">
        <h1 className="text-center font-[Gilroy,sans-serif] text-3xl font-bold text-[#26262b]">
          Страница в разработке: /podbor-personala
        </h1>
      </div>
      <Footer />
    </main>
  )
}
