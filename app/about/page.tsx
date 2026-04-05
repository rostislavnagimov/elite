import {Metadata} from 'next'
import Link from 'next/link'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'О компании - соискателям | Elite',
  description:
    'Кадровый Холдинг Elite приглашает вас стать одним из наших сотрудников. Одна из первых кадровых компаний на рынке Республики Казахстан.',
  alternates: {
    canonical: 'https://elite.kz/about'
  }
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz'
  }
}

const benefits = [
  'Работа с крупнейшими компаниями Казахстана и международными корпорациями',
  'Профессиональное развитие и обучение',
  'Карьерный рост внутри компании',
  'Стабильная работа в успешной компании с 28-летней историей',
  'Дружный коллектив профессионалов',
  'Конкурентоспособная заработная плата'
]

const services = [
  {
    title: 'Все вакансии',
    href: '/vacancy',
    description: 'Актуальные вакансии от ведущих работодателей'
  },
  {
    title: 'Карьера в Elite',
    href: '/career',
    description: 'Присоединяйтесь к нашей команде'
  },
  {
    title: 'Отправить резюме',
    href: '/sendresume',
    description: 'Отправьте резюме и мы подберем для вас подходящую вакансию'
  },
  {
    title: 'Карьерное консультирование',
    href: '/careercounseling',
    description: 'Профессиональная помощь в построении карьеры'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={aboutSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-20 pt-[140px]">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <span className="mb-4 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
            Соискателям
          </span>
          <h1 className="mb-6 font-[Gilroy,sans-serif] text-[50px] font-bold uppercase leading-[1.1] text-[#26262B] md:text-[62px]">
            О КОМПАНИИ
          </h1>
          <p className="mb-10 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
            Кадровый Холдинг Elite приглашает вас стать одним из наших сотрудников. 
            Мы одна из первых кадровых компаний на рынке Республики Казахстан с 28-летней историей.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-[#F5F5F5] px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-[Gilroy,sans-serif] text-[32px] font-bold text-[#26262B]">
                Почему стоит работать с Elite
              </h2>
              <p className="mb-6 font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-80">
                Elite предлагает широкий спектр услуг в области кадрового консалтинга. 
                Мы имеем широкую партнерскую сеть во многих регионах Казахстана и за рубежом.
              </p>
              <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-80">
                Нашими консультантами реализуются проекты для крупнейших казахстанских и международных компаний 
                в различных отраслях экономики. Присоединяйтесь к команде профессионалов!
              </p>
            </div>
            <div>
              <h3 className="mb-6 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">
                Преимущества работы с нами
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#e61a66]">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-12 text-center font-[Gilroy,sans-serif] text-[32px] font-bold uppercase text-[#26262B] md:text-[40px]">
            Возможности для соискателей
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group flex flex-col rounded-[30px] bg-[#F5F5F5] p-8 transition-all hover:bg-[#e61a66]"
              >
                <h3 className="mb-3 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B] transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B] opacity-70 transition-colors group-hover:text-white/80">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66] transition-colors group-hover:text-white">
                    Подробнее
                  </span>
                  <svg className="h-5 w-5 text-[#e61a66] transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A1A] px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 font-[Gilroy,sans-serif] text-[32px] font-bold text-white md:text-[40px]">
              Начните карьеру с Elite
            </h2>
            <p className="mb-8 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-white opacity-60">
              Отправьте резюме прямо сейчас и наши специалисты подберут для вас идеальную вакансию
            </p>
            <Link
              href="/sendresume"
              className="rounded-xl bg-[#e61a66] px-10 py-4 font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c91659]"
            >
              Отправить резюме
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
