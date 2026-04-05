import {Metadata} from 'next'
import Link from 'next/link'
import JsonLd from '../components/JsonLd'

// Inline SVG icons to avoid external dependencies
const UserCheckIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <polyline points="16 11 18 13 22 9"/>
  </svg>
)

const SettingsIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const TrendingUpIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
)

export const metadata: Metadata = {
  title: 'Карьерное консультирование | Кадровый Холдинг Elite',
  description:
    'Кадровый Холдинг Elite приглашает вас пройти карьерное консультирование. Мы поможем вам начать головокружительную карьеру прямо сейчас.',
  alternates: {
    canonical: 'https://elite.kz/careercounseling'
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Карьерное консультирование',
  serviceType: 'Career Counseling',
  provider: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz'
  },
  areaServed: {
    '@type': 'State',
    name: 'Казахстан'
  },
  description: 'Помощь в поиске работы, анализ резюме, подготовка к собеседованию и сопровождение поиска работы.'
}

export default function CareerCounselingPage() {
  const stats = [
    {val: '11 000', label: 'Трудоустроенных кандидатов'},
    {val: '27', label: 'Лет на рынке'},
    {val: '1000', label: 'Успешных проектов'},
    {val: '216', label: 'Сотрудников в компании'}
  ]

  const values = [
    {
      title: 'Индивидуальный подход',
      Icon: UserCheckIcon
    },
    {
      title: 'Эффективная система',
      Icon: SettingsIcon
    },
    {
      title: 'Полная информация о рынке труда',
      Icon: TrendingUpIcon
    }
  ]

  const services = [
    {
      title: 'Анализ резюме',
      details: ['1 час работы', '10 000 тенге', 'Чек-лист, проверка готового резюме'],
      features: [
        'проводим анализ Вашего опыта и ключевых навыков',
        'проводим оценку относительно рынка, анализируем подходящие вакансии',
        'проводим ревизию Вашего резюме, сглаживаем недостатки, подчеркиваем ваши достоинства',
        'выявляем достижения, сильные и слабые стороны'
      ]
    },
    {
      title: 'Консультация по поиску работы',
      details: ['1,5 часа работы', '30 000 тенге', 'Чек-лист, 25 дней сопровождения и консультаций'],
      features: [
        'анализ опыта, навыков, карьерных и зарплатных ожиданий',
        'анализ вакансий, на которые Вы откликались ранее, выявление причин полученных отказов',
        'аудит резюме и сопроводительных писем, выявление достоинств, сглаживание недостатков',
        'рекомендации по эффективным каналам для поиска и работы с этими каналами',
        'расскажем, как вести себя на собеседовании и как выстроить переговоры о заработной плате'
      ]
    },
    {
      title: 'Эффективное резюме + сопроводительное письмо',
      details: ['1,5 часа работы', '25 000 тенге', 'Чек-лист, консультация в течение 10 дней'],
      features: [
        'проводим анализ Вашего опыта и ключевых навыков',
        'проводим оценку относительно рынка, анализируем подходящие вакансии',
        'проводим ревизию Вашего резюме, сглаживаем недостатки, подчеркиваем ваши достоинства',
        'составляем резюме и сопроводительное письмо',
        'даем рекомендации по эффективным каналам поиска и работы с этими каналами'
      ]
    },
    {
      title: 'Подготовка к собеседованию',
      details: [
        '1,5 часа работы',
        '25 000 тенге',
        'Список вопросов для собеседования, 10 дней сопровождения и консультаций'
      ],
      features: [
        'как подготовиться к собеседованию, собрать информацию о компании и использовать ее',
        'интервью по всем стадиям, с первого звонка рекрутера и до разговора с собственником',
        'разбор ошибок и сложных моментов',
        'подготовим рассказ о себе, о своих мотиваторах при смене места работы, сильных и слабых сторонах',
        'научим отвечать на неудобные вопросы',
        'дадим рекомендации, как вести переговоры о заработной плате'
      ]
    },
    {
      title: 'Сопровождение поиска работы',
      details: ['3 серии по 1,5 часа', '110 000 тенге', '4 чек-листа, 100 дней сопровождения и консультаций'],
      features: [
        'эффективное резюме, сопроводительное письмо, определение целевых вакансий, исследование рынка труда',
        'анализ предыдущего опыта поиска работы, выявление ошибок',
        'подбор подходящей стратегии позиционирования на рынке труда',
        'подготовка к успешному прохождению собеседований, улучшение навыков презентации',
        'разбор ответов на неудобные вопросы, рекомендации как отвечать на вопросы о заработной плате'
      ]
    },
    {
      title: 'Оценка по системе Томаса',
      details: [
        'Ссылка на прохождение теста',
        '20 000 тенге',
        'Личная встреча с предоставлением устной обратной связи'
      ],
      features: [
        'профильный анализ личности (PPA) понять свои сильные и слабые стороны, проработать свои компетенции',
        'лидерские навыки или карьерный гид определить для себя наиболее подходящую профессию'
      ],
      prefix: 'На выбор:'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-20 pt-[140px]">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <div className="max-w-[800px]">
            <span className="mb-4 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B] opacity-50">
              Наши услуги
            </span>
            <h1 className="mb-6 font-[Gilroy,sans-serif] text-[50px] font-bold uppercase leading-[1.1] text-[#e61a66] md:text-[62px]">
              КАРЬЕРНОЕ
              <br />
              КОНСУЛЬТИРОВАНИЕ
            </h1>
            <p className="mb-10 max-w-[500px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
              мы поможем вам начать головокружительную карьеру прямо сейчас
            </p>
            <Link href="#order" className="group inline-flex items-center gap-4">
              <span className="border-b border-transparent font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-widest text-[#26262B] transition-all group-hover:border-[#e61a66]">
                ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#26262B] transition-all group-hover:border-[#e61a66] group-hover:bg-[#e61a66]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors group-hover:text-white"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        {/* Hero Image */}
        <div className="mx-auto mt-16 max-w-[1400px] px-5">
          <div className="relative aspect-[21/9] overflow-hidden rounded-[30px] bg-gradient-to-r from-[#e61a66]/20 to-[#e61a66]/5">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&h=600&fit=crop"
              alt="Career Counseling"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="group text-center">
                <div className="mb-4 font-[Gilroy,sans-serif] text-[50px] font-bold leading-none text-[#e61a66] transition-transform group-hover:scale-105 md:text-[72px]">
                  {stat.val}
                </div>
                <p className="mx-auto max-w-[150px] font-[Gilroy,sans-serif] text-[16px] font-medium leading-tight text-[#26262B] md:text-[18px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#F5F5F5] px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e61a66]/10 text-[#e61a66]">
                  <v.Icon className="h-8 w-8" />
                </div>
                <h3 className="font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-wide text-[#26262B]">
                  {v.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="group flex h-full flex-col rounded-[30px] border border-transparent bg-[#F5F5F5] p-8 transition-all hover:border-[#e61a66]/20 hover:shadow-xl"
              >
                <h3 className="mb-6 flex h-[60px] items-center justify-center text-center font-[Gilroy,sans-serif] text-[20px] font-bold text-[#26262B]">
                  {s.title}
                </h3>

                <div className="mb-8 space-y-2 border-l-2 border-[#e61a66] pl-4">
                  {s.details.map((d, di) => (
                    <p key={di} className="font-[Gilroy,sans-serif] text-[15px] font-medium text-[#26262B]">
                      • {d}
                    </p>
                  ))}
                </div>

                <div className="mb-10 flex-grow space-y-4 border-t border-black/5 pt-6">
                  {s.prefix && (
                    <p className="font-[Gilroy,sans-serif] text-[15px] font-bold text-[#26262B]">{s.prefix}</p>
                  )}
                  {s.features.map((f, fi) => (
                    <div key={fi} className="flex gap-3">
                      <span className="font-bold text-[#e61a66]">—</span>
                      <p className="font-[Gilroy,sans-serif] text-[14px] leading-relaxed text-[#26262B]">{f}</p>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-auto w-full rounded-xl bg-[#e61a66] py-4 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c91659]"
                >
                  Узнать подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Profile */}
      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] overflow-hidden rounded-[30px] bg-[#F5F5F5]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop"
                  alt="Ereshchenko Olesya"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="mb-2 font-[Gilroy,sans-serif] text-[32px] font-bold leading-tight text-[#26262B] md:text-[40px]">
                Ерещенко Олеся
              </h2>
              <p className="mb-8 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-[0.2em] text-[#26262B] opacity-40">
                ЭКСПЕРТ
              </p>
              <div className="mb-10 h-1 w-20 bg-[#26262B] opacity-20"></div>
              <ul className="space-y-6">
                {[
                  'Руководитель направления исследований рынка труда',
                  'Сертифицированный карьерный консультант',
                  'Международный сертифицированный специалист по системе DISC (Thomas PPA)',
                  'Более 10 лет в рекрутинге',
                  'Более 500 карьерных консультаций и успешных проектов'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e61a66]"></span>
                    <p className="font-[Gilroy,sans-serif] text-[16px] leading-snug text-[#26262B] md:text-[18px]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="order" className="relative overflow-hidden bg-[#1A1A1A] px-5 py-24">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <div className="mb-16 max-w-[600px]">
            <h2 className="mb-6 font-[Gilroy,sans-serif] text-[40px] font-bold uppercase leading-tight text-white md:text-[50px]">
              Остались
              <br />
              вопросы?
            </h2>
            <p className="font-[Gilroy,sans-serif] text-[18px] text-white opacity-60">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время для бесплатной консультации.
            </p>
          </div>

          <form className="grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="ml-4 font-[Gilroy,sans-serif] text-[12px] font-bold uppercase tracking-widest text-white opacity-40">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="Иван Иванов"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-[Gilroy,sans-serif] text-white transition-colors focus:border-[#e61a66] focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="ml-4 font-[Gilroy,sans-serif] text-[12px] font-bold uppercase tracking-widest text-white opacity-40">
                Номер телефона
              </label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-[Gilroy,sans-serif] text-white transition-colors focus:border-[#e61a66] focus:outline-none"
              />
            </div>
            <div className="pt-4 md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#e61a66] px-12 py-5 font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#c91659] hover:shadow-[0_10px_30px_rgba(230,26,102,0.3)] md:w-auto"
              >
                Отправить запрос
              </button>
              <p className="mt-6 font-[Gilroy,sans-serif] text-[12px] text-white opacity-30">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных
              </p>
            </div>
          </form>
        </div>
        {/* Decorative element */}
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#e61a66] opacity-10 blur-[150px]"></div>
      </section>

          </main>
  )
}
