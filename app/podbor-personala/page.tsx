'use client'

import Link from 'next/link'
import JsonLd from '../components/JsonLd'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Подбор персонала',
  serviceType: 'Recruitment',
  provider: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz'
  },
  areaServed: {
    '@type': 'State',
    name: 'Казахстан'
  },
  description: 'Профессиональный подбор персонала высшего и среднего звена в Алматы и по всему Казахстану.'
}

const benefits = [
  'Наличие уникальной и актуальной базы кандидатов',
  'Уникальное программное обеспечение, автоматизирующее процесс подбора персонала, с возможностью дистанционного доступа Заказчика',
  'Использование передовых технологий, методик и баз мировых рекрутинговых компаний-партнеров',
  'Широкая география поиска: 3 континента, более 20 стран мира',
  'Неукоснительное соблюдение всех этапов и процедур подбора',
  'Содействие заказчику в проведении интервью с кандидатами',
  'Сопровождение кандидата в процессе принятия решения, в период адаптации и в течение гарантийного периода услуги',
  'Соблюдение норм Этического Кодекса в отношении всех участников рынка'
]

const stages = [
  {
    num: '1',
    title: 'Анализ целей и задач',
    desc: 'Формируется портрет идеального кандидата. Определяются ключевые факторы его успешности. Уточняются основные направления поиска.'
  },
  {
    num: '2',
    title: 'Поиск специалистов',
    desc: 'Поиск персонала ведется несколькими методами: поиск на сайтах по поиску работы, объявления в СМИ, анализ базы данных Компании, прямой поиск кандидатов (head-hunting).'
  },
  {
    num: '3',
    title: 'Оценка и отбор кандидатов',
    desc: 'Для оценки каждого кандидата формируется отдельный набор инструментов, позволяющий с максимальной точностью определить уровень его профессиональных компетенций и личностных качеств.'
  },
  {
    num: '4',
    title: 'Сопровождение заказчиков',
    desc: 'Мы считаем процесс подбора завершенным не тогда, когда специалист приступил к выполнению своих обязанностей, а тогда, когда будут достигнуты цели и задачи, поставленные заказчиком.'
  }
]

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={serviceSchema} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-20 pt-[140px]">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <span className="mb-4 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B] opacity-50">
            Услуги для бизнеса
          </span>
          <h1 className="mb-6 font-[Gilroy,sans-serif] text-[50px] font-bold uppercase leading-[1.1] text-[#e61a66] md:text-[62px]">
            ПОДБОР<br />ПЕРСОНАЛА
          </h1>
          <p className="mb-10 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
            Специалисты по подбору персонала в Казахстане сделают отбор сотрудников для работ и выполнения задач любой сложности.
          </p>
          <button 
            onClick={() => window.showPopup && window.showPopup('callback')}
            className="group inline-flex items-center gap-4"
          >
            <span className="border-b border-transparent font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-widest text-[#26262B] transition-all group-hover:border-[#e61a66]">
              ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#26262B] transition-all group-hover:border-[#e61a66] group-hover:bg-[#e61a66]">
              <img src="/assets/icons/arrow-right.svg" alt="" className="h-5 w-5 transition-colors group-hover:text-white" />
            </div>
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F5F5F5] px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-16 text-center font-[Gilroy,sans-serif] text-[32px] font-bold uppercase text-[#26262B] md:text-[40px]">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 rounded-[20px] bg-white p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#e61a66]">
                  <img src="/assets/icons/check.svg" alt="" className="h-4 w-4 text-white" />
                </div>
                <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-16 text-center font-[Gilroy,sans-serif] text-[32px] font-bold uppercase text-[#26262B] md:text-[40px]">
            Этапы подбора персонала
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {stages.map((stage, i) => (
              <div key={i} className="relative rounded-[30px] bg-[#F5F5F5] p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e61a66]">
                  <span className="font-[Gilroy,sans-serif] text-[24px] font-bold text-white">
                    {stage.num}
                  </span>
                </div>
                <h3 className="mb-3 font-[Gilroy,sans-serif] text-[22px] font-bold text-[#26262B]">
                  {stage.title}
                </h3>
                <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-70">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A1A] px-5 py-24">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="mb-6 font-[Gilroy,sans-serif] text-[32px] font-bold text-white md:text-[40px]">
            Нужны сотрудники для вашей компании?
          </h2>
          <p className="mb-10 font-[Gilroy,sans-serif] text-[18px] text-white opacity-60">
            Оставьте заявку и мы подберем идеальных кандидатов для вашего бизнеса
          </p>
          <div className="flex flex-col items-center gap-4">
            <a 
              href="tel:+77013555355" 
              className="font-[Gilroy,sans-serif] text-[24px] font-bold text-[#e61a66] transition-opacity hover:opacity-80"
            >
              +7 (701) 355-53-55
            </a>
            <button 
              onClick={() => window.showPopup && window.showPopup('callback')}
              className="mt-4 rounded-xl bg-[#e61a66] px-10 py-4 font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c91659]"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
