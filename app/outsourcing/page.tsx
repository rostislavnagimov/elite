'use client'

import Link from 'next/link'
import JsonLd from '../components/JsonLd'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Аутсорсинг персонала',
  serviceType: 'Outsourcing',
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
    'Передача определенных функций по управлению персоналом внешней организации для повышения эффективности бизнеса.'
}

const benefits = [
  'Работников на срок, необходимый для выполнения конкретных задач',
  'Подбор и наем персонала нужной квалификации, сертифицированных рабочих, имеющих все законные допуски и разрешения',
  'Увеличение количества работающих без роста фонда оплаты труда и списочной численности',
  'Специалистов, обеспеченных всем необходимым – спецодеждой, командировочными средствами',
  'Скорость решения проблемы – заказчику не грозит долгое ожидание, нужных специалистов мы подберем в короткие сроки',
  'Широкий охват регионов – работа будет организована в любой точке Казахстана, а также за рубежом',
  'Отсутствие рисков трудовых споров с работниками – все правоотношения с персоналом мы закрепляем сами',
  'Льготные тарифы для постоянных клиентов с возможностью применения индивидуальных бонусов'
]

const steps = [
  {
    num: '01',
    title: 'Заявка',
    desc: 'Вы направляете нам заявку, в которой указываете какое количество сотрудников и на какой срок вам необходимо нанять'
  },
  {
    num: '02',
    title: 'Согласование',
    desc: 'Оговариваем с заказчиком квалификацию, требования к сотрудникам, условия труда'
  },
  {
    num: '03',
    title: 'Договор',
    desc: 'Заключается договор, в котором прописываются все условия, объем услуг'
  },
  {
    num: '04',
    title: 'Подбор и оформление',
    desc: 'В рамках предъявленных требований подбираются кадры, производится их оформление'
  }
]

export default function OutsourcingPage() {
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
            АУТСОРСИНГ<br />ПЕРСОНАЛА
          </h1>
          <p className="mb-10 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
            Передача функций штатного персонала и части бизнес-процессов. Профессиональный подбор рабочего персонала для вашей компании.
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
            Преимущества аутсорсинга
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

      {/* Steps Section */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-16 text-center font-[Gilroy,sans-serif] text-[32px] font-bold uppercase text-[#26262B] md:text-[40px]">
            Как мы работаем
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative rounded-[30px] bg-[#F5F5F5] p-8">
                <span className="mb-4 block font-[Gilroy,sans-serif] text-[48px] font-bold text-[#e61a66] opacity-30">
                  {step.num}
                </span>
                <h3 className="mb-3 font-[Gilroy,sans-serif] text-[20px] font-bold text-[#26262B]">
                  {step.title}
                </h3>
                <p className="font-[Gilroy,sans-serif] text-[15px] leading-relaxed text-[#26262B] opacity-70">
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
            Нужен персонал для вашего бизнеса?
          </h2>
          <p className="mb-10 font-[Gilroy,sans-serif] text-[18px] text-white opacity-60">
            Свяжитесь с нами для получения индивидуального предложения
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
