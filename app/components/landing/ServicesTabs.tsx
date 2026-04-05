'use client'

import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const tabs = [
  {
    id: 'outstaffing',
    title: 'Аутстаффинг',
    heading: 'ВЫВЕДЕНИЕ ПЕРСОНАЛА ЗА ШТАТ',
    description:
      'Аутстаффинг персонала - кадровая технология, при которой компания-провайдер услуг оформляет в свой штат уже существующий персонал компании-клиента.',
    list: [
      'Возможность оптимизации бизнес процессов',
      'Возможность сфокусироваться на основных бизнес функциях',
      'Взаимодействие с органами власти по документации для иностранной рабочей силы',
      'Официальное оформление персонала',
      'Возможность вести бизнес в Казахстане без открытия офиса или представительства'
    ],
    image: '/assets/images/1.jpeg',
    link: '/outstaffing'
  },
  {
    id: 'outsourcing',
    title: 'Аутсорсинг персонала',
    heading: 'АУТСОРСИНГ ПЕРСОНАЛА',
    description:
      'Позволяет не только перераспределить вспомогательные бизнес-процессы, но и снизить юридические и финансовые риски найма персонала на короткий срок. Трудовые отношения с работниками будут оформлены нашей компанией, правоотношения «клиент-работник» отсутствуют.',
    list: ['Повышение своей конкурентоспособности.'],
    image: '/assets/images/2.jpeg',
    link: '/outsourcing'
  },
  {
    id: 'recruitment',
    title: 'Подбор персонала',
    heading: 'ПОДБОР ПЕРСОНАЛА',
    description:
      'Кадровое агентство Elite - профессиональный подбор высшего руководства, редких специалистов и менеджеров среднего звена.',
    list: ['Оперативное и качественное закрытие вакансии.'],
    image: '/assets/images/3.jpeg',
    link: '/podbor-personala'
  },
  {
    id: 'market-reviews',
    title: 'Обзоры рынка',
    heading: 'ОБЗОРЫ РЫНКА ТРУДА И ЗАРАБОТНЫХ ПЛАТ',
    description:
      'Это актуальная информация о реальных заработных платах, наличии и уровнях квалификации специалистов, это целевые аналитические исследования по запросу компании.',
    list: ['Понимание конкурентоспособности уровня оплаты для новой позиции.'],
    image: '/assets/images/4.jpeg',
    link: '/obzor-rynka-truda-i-zarabotanyh-plat'
  }
]

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section className="w-full bg-white py-20">
      <div className="">
        <div className="mx-auto mb-12 max-w-[1200px] px-5 2xl:max-w-[1400px]">
          <h2 className="mb-4 text-[18px] font-[300] uppercase tracking-wider text-[#e61a66]">НАШИ УСЛУГИ</h2>
          <h3 className="text-[36px] font-[300] uppercase leading-tight text-elite-black lg:text-[45px]">
            РЕШЕНИЯ В ОБЛАСТИ АУТСОРСИНГА И УПРАВЛЕНИЯ ПЕРСОНАЛОМ
          </h3>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-8 py-3 font-[300] transition-all duration-300 ${
                activeTab.id === tab.id
                  ? 'scale-105 bg-[#e61a66] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 flex min-h-[500px] flex-col items-center gap-8 duration-500 lg:h-[70vh] lg:flex-row lg:gap-2">
          <div className="w-full px-5 lg:ml-[160px] lg:w-1/3">
            <h3 className="mb-6 text-2xl font-[300] uppercase leading-tight text-elite-black lg:text-3xl">
              {activeTab.heading}
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">{activeTab.description}</p>
            <ul className="space-y-2">
              {activeTab.list.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#e61a66]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link 
              href={activeTab.link}
              className="mt-10 inline-block rounded-full bg-[#e61a66] px-10 py-4 text-sm font-[300] uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#c91659]"
            >
              Подробнее
            </Link>
          </div>
          <div className="relative hidden h-full overflow-visible lg:block lg:w-2/3">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              width={1000}
              height={1000}
              className="absolute left-0 top-0 h-full rounded-l-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
