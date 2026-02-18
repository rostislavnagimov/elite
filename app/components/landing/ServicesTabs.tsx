'use client'

import {useState} from 'react'
import Image from 'next/image'

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
    image: 'https://static.tildacdn.com/tild3161-3037-4330-b462-386461326466/pexels-christina-mor.jpg'
  },
  {
    id: 'outsourcing',
    title: 'Аутсорсинг персонала',
    heading: 'АУТСОРСИНГ ПЕРСОНАЛА',
    description:
      'Позволяет не только перераспределить вспомогательные бизнес-процессы, но и снизить юридические и финансовые риски найма персонала на короткий срок. Трудовые отношения с работниками будут оформлены нашей компанией, правоотношения «клиент-работник» отсутствуют.',
    list: ['Повышение своей конкурентоспособности.'],
    image: 'https://static.tildacdn.com/tild3831-3331-4138-b433-316238313437/pexels-christina-mor.jpg'
  },
  {
    id: 'recruitment',
    title: 'Подбор персонала',
    heading: 'ПОДБОР ПЕРСОНАЛА',
    description:
      'Кадровое агентство Elite - профессиональный подбор высшего руководства, редких специалистов и менеджеров среднего звена.',
    list: ['Оперативное и качественное закрытие вакансии.'],
    image: 'https://static.tildacdn.com/tild6130-3338-4231-a232-353239633633/pexels-christina-mor.jpg'
  },
  {
    id: 'market-reviews',
    title: 'Обзоры рынка',
    heading: 'ОБЗОРЫ РЫНКА ТРУДА И ЗАРАБОТНЫХ ПЛАТ',
    description:
      'Это актуальная информация о реальных заработных платах, наличии и уровнях квалификации специалистов, это целевые аналитические исследования по запросу компании.',
    list: ['Понимание конкурентоспособности уровня оплаты для новой позиции.'],
    image: 'https://static.tildacdn.com/tild6135-6435-4331-b830-613032333762/pexels-christina-mor.jpg'
  }
]

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="mb-12">
          <h2 className="mb-4 text-[18px] font-semibold uppercase tracking-wider text-elite-pink">НАШИ УСЛУГИ</h2>
          <h3 className="text-[36px] font-bold uppercase leading-tight text-elite-black lg:text-[45px]">
            РЕШЕНИЯ В ОБЛАСТИ АУТСОРСИНГА И УПРАВЛЕНИЯ ПЕРСОНАЛОМ
          </h3>
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-8 py-3 font-bold transition-all duration-300 ${
                activeTab.id === tab.id
                  ? 'scale-105 bg-[#e61a66] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 flex flex-col items-center gap-12 duration-500 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h3 className="mb-6 text-2xl font-bold uppercase leading-tight text-elite-black lg:text-3xl">
              {activeTab.heading}
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">{activeTab.description}</p>
            <ul className="space-y-4">
              {activeTab.list.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#e61a66]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 rounded-full bg-[#e61a66] px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#c91659]">
              Подробнее
            </button>
          </div>

          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl lg:w-1/2">
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
