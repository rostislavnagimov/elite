import { VacancyList } from '../components/vacancies/VacancyList';
import vacanciesData from '../../vacancies.json';
import { Vacancy } from '../components/vacancies/VacancyCard';

export default function AllVacanciesPage() {
  // @ts-ignore
  const allVacancies: Vacancy[] = Object.values(vacanciesData).flat();

  return (
    <div className="flex min-h-screen flex-col items-center bg-white p-4 pt-[120px] md:p-8 md:pt-[120px]">
      <div className="w-full max-w-[1200px]">
        <h1 className="mb-8 text-center font-[Gilroy,sans-serif] text-3xl font-bold text-[#26262b] md:text-5xl">
          Все актуальные вакансии
        </h1>
        <VacancyList vacancies={allVacancies} categoryName="Все вакансии" />
      </div>
    </div>
  );
}
