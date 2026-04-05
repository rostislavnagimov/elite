import {Metadata} from 'next'
import Link from 'next/link'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Обзор рынка труда и заработных плат | Elite',
  description:
    'Профессиональные услуги по комплексному анализу рынка труда в Алматы. Исследование рынка труда и заработных плат.',
  alternates: {
    canonical: 'https://elite.kz/obzor-rynka-truda-i-zarabotanyh-plat'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Обзор рынка труда и заработных плат',
  provider: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz'
  },
  areaServed: {
    '@type': 'State',
    name: 'Казахстан'
  }
}

const advantages = [
  'Собственные методология и формат проведения обзоров рынка труда, заработных плат и компенсаций',
  'Достоверность предоставляемой в обзоре информации - ее валидность',
  'Расчет средней, медианы, квартилей, минимума и максимума',
  'Таргетированный и целевой подход – возможность поиска данных по конкретным позициям',
  'Помощь в интерпретации полученных данных и расчетов',
  'Презентация обзора заказчику, защита результатов',
  'Возможность расширения запроса дополнительными параметрами исследования'
]

const processSteps = [
  {
    number: '01',
    title: 'Согласование позиций',
    description: 'Согласование позиций для мониторинга (количество позиций, параметры классификации).'
  },
  {
    number: '02',
    title: 'Выборка компаний',
    description: 'Согласование выборки компаний, информация о заработных платах в которых станет базой для анализа.'
  },
  {
    number: '03',
    title: 'Формат продукта',
    description: 'Определение и согласование формата продукта и пунктов мониторинга.'
  },
  {
    number: '04',
    title: 'Сбор данных',
    description: 'Сбор данных по выбранным позициям и компаниям. Сроки зависят от выборки и количества позиций.'
  },
  {
    number: '05',
    title: 'Формирование продукта',
    description: 'Формирование итогового продукта. Сроки зависят от формата документа и параметров мониторинга.'
  },
  {
    number: '06',
    title: 'Контроль процесса',
    description: 'Контроль рабочего процесса и защита результатов перед заказчиком.'
  }
]

export default function MarketOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={serviceSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-20 pt-[140px]">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <span className="mb-4 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
            Наши услуги
          </span>
          <h1 className="mb-6 font-[Gilroy,sans-serif] text-[40px] font-bold uppercase leading-[1.1] text-[#26262B] md:text-[52px]">
            Обзор рынка труда и заработных плат
          </h1>
          <p className="mb-10 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
            Профессиональные услуги по комплексному анализу рынка труда. Исследование рынка труда позволяет
            прогнозировать возможные риски для вашего бизнеса.
          </p>
          <Link href="#consultation" className="group inline-flex items-center gap-4">
            <span className="border-b border-transparent font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-widest text-[#26262B] transition-all group-hover:border-[#e61a66]">
              Получить бесплатную консультацию
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#26262B] transition-all group-hover:border-[#e61a66] group-hover:bg-[#e61a66]">
              <img
                src="/assets/icons/arrow-right.svg"
                alt=""
                className="h-5 w-5 transition-colors group-hover:text-white"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-[#F5F5F5] px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-12 text-center font-[Gilroy,sans-serif] text-[32px] font-bold uppercase text-[#26262B] md:text-[40px]">
            Преимущества наших обзоров
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {advantages.map((advantage, i) => (
              <div key={i} className="flex items-start gap-4 rounded-[20px] bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#e61a66]">
                  <img src="/assets/icons/check.svg" alt="" className="h-5 w-5 text-white" />
                </div>
                <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B]">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-16 text-center font-[Gilroy,sans-serif] text-[32px] font-bold uppercase text-[#26262B] md:text-[40px]">
            Этапы работы
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={i} className="relative rounded-[30px] bg-[#F5F5F5] p-8">
                <span className="mb-4 block font-[Gilroy,sans-serif] text-[48px] font-bold text-[#e61a66] opacity-30">
                  {step.number}
                </span>
                <h3 className="mb-3 font-[Gilroy,sans-serif] text-[20px] font-bold text-[#26262B]">{step.title}</h3>
                <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#1A1A1A] px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 font-[Gilroy,sans-serif] text-[32px] font-bold text-white md:text-[40px]">
              Возможность сфокусироваться на основных бизнес-процессах
            </h2>
            <p className="mb-8 max-w-[700px] font-[Gilroy,sans-serif] text-[18px] text-white opacity-60">
              Анализ рынка труда и услуг решит важнейшие задачи по оптимизации и росту прибыли вашей компании
            </p>
            <Link
              href="/contact"
              className="rounded-xl bg-[#e61a66] px-10 py-4 font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c91659]"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#F5F5F5] px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-12 text-center font-[Gilroy,sans-serif] text-[28px] font-bold text-[#26262B]">
            Связанные услуги
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/podbor-personala"
              className="rounded-full border-2 border-[#26262B] px-8 py-3 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B] transition-all hover:bg-[#26262B] hover:text-white"
            >
              Подбор персонала
            </Link>
            <Link
              href="/outstaffing"
              className="rounded-full border-2 border-[#26262B] px-8 py-3 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B] transition-all hover:bg-[#26262B] hover:text-white"
            >
              Аутстаффинг
            </Link>
            <Link
              href="/outsourcing"
              className="rounded-full border-2 border-[#26262B] px-8 py-3 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B] transition-all hover:bg-[#26262B] hover:text-white"
            >
              Аутсорсинг
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
