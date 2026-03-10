'use client'

import React, { useState } from 'react';
import { VacancyCard, Vacancy } from './VacancyCard';
import { VacancyModal } from './VacancyModal';

interface VacancyListProps {
    vacancies: Vacancy[];
    categoryName?: string;
}

export const VacancyList: React.FC<VacancyListProps> = ({ vacancies, categoryName }) => {
    const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

    if (!vacancies || vacancies.length === 0) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center p-8">
                <p className="text-center text-xl text-gray-500 font-sans">В данной категории пока нет открытых вакансий.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {vacancies.map((vacancy, idx) => (
                    <VacancyCard
                        key={`${vacancy.Название}-${idx}`}
                        vacancy={vacancy}
                        onSelect={setSelectedVacancy}
                    />
                ))}
            </div>

            <VacancyModal
                vacancy={selectedVacancy}
                onClose={() => setSelectedVacancy(null)}
            />
        </div>
    );
};
