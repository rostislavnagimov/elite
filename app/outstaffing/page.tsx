'use client'

import Link from 'next/link'
import JsonLd from '../components/JsonLd'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Аутстаффинг персонала',
  serviceType: 'Outstaffing',
  provider: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz'
  },
  areaServed: {
    '@type': 'State',
    name: 'Казахстан'
  },
  description:
    'Вывод персонала за штат, оформление сотрудников в штат провайдера для оптимизации налогообложения и снижения рисков.'
}

const benefits = [
  'Возможность оптимизации бизнес-процессов',
  'Возможность сфокусироваться на основных бизнес-функциях',
  'Взаимодействие с органами власти по документации для иностранной рабочей силы',
  'Официальное оформление персонала',
  'Возможность вести бизнес в Казахстане без открытия офиса или представительства',
  'Механизмы регулирования фактического количества сотрудников без изменения штатного расписания',
  'Возможность увеличить испытательный срок, минимизируя риски трудовых споров',
  'Механизмы для исключения претензий со стороны проверяющих органов',
  'Адаптированные под рынок Казахстана технологии, соответствующие мировым стандартам',
  'Использование передовых технологий и методик мировых аутстаффинговых компаний-партнеров',
  'Широкий перечень предоставления дополнительных услуг, удовлетворяющий различным видам деятельности',
  'Широкая география услуги, включая все города Казахстана, Центральной Азии и других зарубежных стран',
  'Дополнительные корпоративные скидки и программы лояльности для сотрудников-аутстафферов',
  'Широкий выбор провайдеров банковских и страховых услуг',
  'Финансовая стабильность компании',
  'Конфиденциальность ваших данных'
]

const steps = [
  {
    num: '01',
    title: 'Оформление заявки',
    desc: 'Вы направляете заявку на вывод персонала в аутстаффинг'
  },
  {
    num: '02',
    title: 'Подписание договора',
    desc: 'Заключаем договор с прописанными условиями и обязательствами'
  },
  {
    num: '03',
    title: 'Согласование регламента',
    desc: 'Согласуем регламент по дальнейшим действиям и взаимодействию'
  },
  {
    num: '04',
    title: 'Заключение трудовых договоров',
    desc: 'Оформляем сотрудников в штат компании Elite'
  },
  {
    num: '05',
    title: 'Контроль рабочего процесса',
    desc: 'Осуществляем постоянный контроль и управление персоналом'
  }
]

export default function OutstaffingPage() {
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
            АУТСТАФФИНГ<br />ПЕРСОНАЛА
          </h1>
          <p className="mb-10 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
            Вывод персонала за штат, оформление сотрудников в штат провайдера. Оптимизация бизнеса с минимальными рисками.
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
            Преимущества аутстаффинга
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 rounded-[20px] bg-white p-5 transition-shadow hover:shadow-lg">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#e61a66]">
                  <img src="/assets/icons/check.svg" alt="" className="h-3 w-3 text-white" />
                </div>
                <p className="font-[Gilroy,sans-serif] text-[15px] leading-relaxed text-[#26262B]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-16 text-center font-[Gilroy,sans-serif] text-[32px] font-bold uppercase text-[#26262B] md:text-[40px]">
            Этапы работы
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div key={i} className="relative rounded-[30px] bg-[#F5F5F5] p-6">
                <span className="mb-3 block font-[Gilroy,sans-serif] text-[40px] font-bold text-[#e61a66] opacity-30">
                  {step.num}
                </span>
                <h3 className="mb-2 font-[Gilroy,sans-serif] text-[18px] font-bold text-[#26262B]">
                  {step.title}
                </h3>
                <p className="font-[Gilroy,sans-serif] text-[14px] leading-relaxed text-[#26262B] opacity-70">
                  {step.desc}
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
            Оптимизируйте ваш бизнес
          </h2>
          <p className="mb-10 font-[Gilroy,sans-serif] text-[18px] text-white opacity-60">
            Свяжитесь с нами для консультации по аутстаффингу персонала
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
              Заказать звонок
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
