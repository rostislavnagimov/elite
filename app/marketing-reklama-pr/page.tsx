import {Metadata} from 'next'
import {VacancyList} from '../components/vacancies/VacancyList'
import vacanciesData from '../../vacancies.json'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Вакансии - Маркетинг и PR | Elite',
  description: 'Вакансии в сфере маркетинга, рекламы и PR в Алматы. Маркетологи, PR-менеджеры, SMM-специалисты.',
  alternates: {
    canonical: 'https://elite.kz/marketing-reklama-pr'
  }
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Вакансии - Маркетинг и PR',
  url: 'https://elite.kz/marketing-reklama-pr'
}

export default function MarketingPage() {
  const categorySlug = 'marketing-reklama-pr'
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
            Маркетинг, реклама, PR
          </h1>
          <VacancyList vacancies={categoryVacancies} categoryName="Маркетинг, реклама, PR" />
        </div>
      </div>
    </main>
  )
}
