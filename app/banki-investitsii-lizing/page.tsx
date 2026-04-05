import {Metadata} from 'next'
import {VacancyList} from '../components/vacancies/VacancyList'
import vacanciesData from '../../vacancies.json'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Вакансии - Банки и инвестиции | Elite',
  description:
    'Вакансии в банковском секторе, инвестициях и лизинге в Алматы. Кредитные специалисты, финансовые консультанты.',
  alternates: {
    canonical: 'https://elite.kz/banki-investitsii-lizing'
  }
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Вакансии - Банки и инвестиции',
  url: 'https://elite.kz/banki-investitsii-lizing'
}

export default function BankiPage() {
  const categorySlug = 'banki-investitsii-lizing'
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
            Банки, инвестиции, лизинг
          </h1>
          <VacancyList vacancies={categoryVacancies} categoryName="Банки, инвестиции, лизинг" />
        </div>
      </div>
    </main>
  )
}
