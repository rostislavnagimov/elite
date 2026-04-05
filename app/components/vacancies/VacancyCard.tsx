'use client'

import React from 'react'

export interface Vacancy {
  Название: string
  город: string
  опыт: string
  сфера: string
  описание: string
}

interface VacancyCardProps {
  vacancy: Vacancy
  onSelect: (vacancy: Vacancy) => void
}

export const VacancyCard: React.FC<VacancyCardProps> = ({vacancy, onSelect}) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg border border-transparent bg-[#fafafa] p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-lg">
      <div>
        <h3 className="mb-4 font-[Gilroy,sans-serif] text-xl font-bold text-[#1e1e1e]">{vacancy.Название}</h3>
        <ul className="mb-6 space-y-2 font-sans text-sm text-[#555]">
          {vacancy.город && (
            <li className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#888]">
              ГОРОД: <span className="text-[#333]">{vacancy.город}</span>
            </li>
          )}
          {vacancy.опыт && (
            <li className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#888]">
              ОПЫТ РАБОТЫ: <span className="text-[#333]">{vacancy.опыт}</span>
            </li>
          )}
        </ul>
      </div>
      <div className="mt-auto">
        <button
          onClick={() => onSelect(vacancy)}
          className="w-auto rounded-[5px] bg-[#e61a66] px-6 py-3 font-sans text-sm font-semibold text-white transition-all hover:bg-[#c91659] hover:shadow-md"
        >
          Узнать подробнее
        </button>
      </div>
    </div>
  )
}
