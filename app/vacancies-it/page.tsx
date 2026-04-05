import {Metadata} from 'next'
import { VacancyList } from '../components/vacancies/VacancyList'
import vacanciesData from '../../vacancies.json'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Вакансии - IT и телеком | Elite',
  description: 'Вакансии в сфере IT, интернета и телекома в Алматы. Разработчики, тестировщики, аналитики, системные администраторы.',
  alternates: {
    canonical: 'https://elite.kz/vacancies-it'
  }
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Вакансии - IT и телеком',
  url: 'https://elite.kz/vacancies-it'
}

export default function ITPage() {
  const categorySlug = 'vacancies-it'
  const categoryVacancies = (vacanciesData as Record<string, any[]>)[categorySlug] || []

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schema} />
      <div className="flex min-h-screen flex-col items-center bg-white p-4 pt-[120px] md:p-8 md:pt-[140px]">
        <div className="w-full max-w-[1200px]">
          <span className="mb-4 block text-center font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
            Вакансии по отраслям
          </span>
          <h1 className="mb-8 text-center font-[Gilroy,sans-serif] text-3xl font-bold uppercase text-[#26262b] md:text-5xl">
            IT, интернет, телеком
          </h1>
          <VacancyList vacancies={categoryVacancies} categoryName="IT, интернет, телеком" />
        </div>
      </div>
    </main>
  )
}
