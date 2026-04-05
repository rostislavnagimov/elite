import {Metadata} from 'next'
import { VacancyList } from '../components/vacancies/VacancyList';
import vacanciesData from '../../vacancies.json';
import { Vacancy } from '../components/vacancies/VacancyCard';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'Все вакансии | Elite',
  description: 'Актуальные вакансии от ведущих работодателей Казахстана.',
  alternates: {
    canonical: 'https://elite.kz/vacancy'
  }
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Все вакансии',
  url: 'https://elite.kz/vacancy'
}

export default function AllVacanciesPage() {
  // Flatten all category arrays into one array
  const allVacancies: Vacancy[] = Object.values(vacanciesData).reduce((acc: Vacancy[], curr) => {
    return acc.concat(Array.isArray(curr) ? curr : []);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schema} />
      <div className="flex min-h-screen flex-col items-center bg-white p-4 pt-[120px] md:p-8 md:pt-[140px]">
        <div className="w-full max-w-[1200px]">
          <span className="mb-4 block text-center font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
            Вакансии
          </span>
          <h1 className="mb-8 text-center font-[Gilroy,sans-serif] text-3xl font-bold uppercase text-[#26262b] md:text-5xl">
            Все актуальные вакансии
          </h1>
          <VacancyList vacancies={allVacancies} categoryName="Все вакансии" />
        </div>
      </div>
    </main>
  );
}
