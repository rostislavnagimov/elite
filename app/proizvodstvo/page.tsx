import { VacancyList } from '../components/vacancies/VacancyList';
import vacanciesData from '../../vacancies.json';

export default function VacanciesPage() {
  const categorySlug = 'proizvodstvo';
  // @ts-ignore
  const categoryVacancies = vacanciesData[categorySlug] || [];

  return (
    <div className="flex min-h-screen flex-col items-center bg-white p-4 pt-[120px] md:p-8 md:pt-[120px]">
      <div className="w-full max-w-[1200px]">
        <h1 className="mb-8 text-center font-[Gilroy,sans-serif] text-3xl font-bold text-[#26262b] md:text-5xl">
          Производство
        </h1>
        <VacancyList vacancies={categoryVacancies} categoryName="Производство" />
      </div>
    </div>
  );
}
