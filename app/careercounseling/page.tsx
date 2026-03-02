'use client'

import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function CareerCounselingPage() {
  const stats = [
    { val: '11 000', label: 'Трудоустроенных кандидатов' },
    { val: '27', label: 'Лет на рынке' },
    { val: '1000', label: 'Успешных проектов' },
    { val: '216', label: 'Сотрудников в компании' }
  ]

  const values = [
    {
      title: 'Индивидуальный подход',
      icon: 'https://static.tildacdn.com/tild3537-6435-4330-b466-643132643564/icons8-manager-96_1.png'
    },
    {
      title: 'Эффективная система',
      icon: 'https://static.tildacdn.com/tild6130-3166-4131-b461-613463323030/icons8-system-96_1.png'
    },
    {
      title: 'Полная информация о рынке труда',
      icon: 'https://static.tildacdn.com/tild3262-6232-4731-b765-383733363363/icons8-market-96_1.png'
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
      details: ['1,5 часа работы', '25 000 тенге', 'Список вопросов для собеседования, 10 дней сопровождения и консультаций'],
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
      details: ['Ссылка на прохождение теста', '20 000 тенге', 'Личная встреча с предоставлением устной обратной связи'],
      features: [
        'профильный анализ личности (PPA) понять свои сильные и слабые стороны, проработать свои компетенции',
        'лидерские навыки или карьерный гид определить для себя наиболее подходящую профессию'
      ],
      prefix: 'На выбор:'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-[140px] pb-20 px-5 relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] relative z-10">
          <div className="max-w-[800px]">
            <span className="font-[Gilroy,sans-serif] text-[14px] font-bold text-[#26262B] uppercase tracking-wider mb-4 block opacity-50">
              Наши услуги
            </span>
            <h1 className="font-[Gilroy,sans-serif] text-[50px] md:text-[62px] font-bold uppercase leading-[1.1] text-[#e61a66] mb-6">
              КАРЬЕРНОЕ<br />КОНСУЛЬТИРОВАНИЕ
            </h1>
            <p className="font-[Gilroy,sans-serif] text-[18px] md:text-[20px] text-[#26262B] mb-10 max-w-[500px]">
              мы поможем вам начать головокружительную карьеру прямо сейчас
            </p>
            <Link
              href="#order"
              className="inline-flex items-center gap-4 group"
            >
              <span className="font-[Gilroy,sans-serif] text-[14px] font-bold text-[#26262B] uppercase tracking-widest border-b border-transparent group-hover:border-[#e61a66] transition-all">
                ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
              </span>
              <div className="w-12 h-12 rounded-full border border-[#26262B] flex items-center justify-center group-hover:bg-[#e61a66] group-hover:border-[#e61a66] transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white transition-colors">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        {/* Hero Image */}
        <div className="mt-16 mx-auto max-w-[1400px] px-5">
          <div className="rounded-[30px] overflow-hidden relative aspect-[21/9]">
            <img
              src="https://optim.tildacdn.com/tild6333-3331-4131-b333-653736346430/-/format/webp/photo.jpg"
              alt="Career Counseling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="font-[Gilroy,sans-serif] text-[50px] md:text-[72px] font-bold text-[#e61a66] leading-none mb-4 transition-transform group-hover:scale-105">
                  {stat.val}
                </div>
                <p className="font-[Gilroy,sans-serif] text-[16px] md:text-[18px] font-medium text-[#26262B] leading-tight max-w-[150px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-5 bg-[#F5F5F5]">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img src={v.icon} alt={v.title} className="w-16 h-16 mb-6 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                <h3 className="font-[Gilroy,sans-serif] text-[16px] font-bold text-[#26262B] uppercase tracking-wide">
                  {v.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-5">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#F5F5F5] rounded-[30px] p-8 flex flex-col h-full border border-transparent hover:border-[#e61a66]/20 transition-all hover:shadow-xl group">
                <h3 className="font-[Gilroy,sans-serif] text-[20px] font-bold text-[#26262B] mb-6 text-center h-[60px] flex items-center justify-center">
                  {s.title}
                </h3>

                <div className="mb-8 space-y-2 border-l-2 border-[#e61a66] pl-4">
                  {s.details.map((d, di) => (
                    <p key={di} className="font-[Gilroy,sans-serif] text-[15px] text-[#26262B] font-medium">• {d}</p>
                  ))}
                </div>

                <div className="flex-grow space-y-4 mb-10 pt-6 border-t border-black/5">
                  {s.prefix && (
                    <p className="font-[Gilroy,sans-serif] text-[15px] font-bold text-[#26262B]">{s.prefix}</p>
                  )}
                  {s.features.map((f, fi) => (
                    <div key={fi} className="flex gap-3">
                      <span className="text-[#e61a66] font-bold">—</span>
                      <p className="font-[Gilroy,sans-serif] text-[14px] text-[#26262B] leading-relaxed">
                        {f}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-xl bg-[#e61a66] text-white font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-widest hover:bg-[#c91659] transition-colors mt-auto">
                  Узнать подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Profile */}
      <section className="py-24 px-5 bg-white">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <div className="rounded-[30px] overflow-hidden aspect-[4/5] bg-[#F5F5F5]">
                <img
                  src="https://optim.tildacdn.com/tild3161-3932-4432-b733-366562303038/-/format/webp/DSCN3439.jpg"
                  alt="Ereshchenko Olesya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-[Gilroy,sans-serif] text-[32px] md:text-[40px] font-bold text-[#26262B] mb-2 leading-tight">
                Ерещенко Олеся
              </h2>
              <p className="font-[Gilroy,sans-serif] text-[14px] font-bold text-[#26262B] uppercase tracking-[0.2em] mb-8 opacity-40">
                ЭКСПЕРТ
              </p>
              <div className="w-20 h-1 bg-[#26262B] mb-10 opacity-20"></div>
              <ul className="space-y-6">
                {[
                  'Руководитель направления исследований рынка труда',
                  'Сертифицированный карьерный консультант',
                  'Международный сертифицированный специалист по системе DISC (Thomas PPA)',
                  'Более 10 лет в рекрутинге',
                  'Более 500 карьерных консультаций и успешных проектов'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e61a66] mt-2 flex-shrink-0"></span>
                    <p className="font-[Gilroy,sans-serif] text-[16px] md:text-[18px] text-[#26262B] leading-snug">
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
      <section id="order" className="bg-[#1A1A1A] py-24 px-5 relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] relative z-10">
          <div className="max-w-[600px] mb-16">
            <h2 className="font-[Gilroy,sans-serif] text-[40px] md:text-[50px] font-bold text-white uppercase leading-tight mb-6">
              Остались<br />вопросы?
            </h2>
            <p className="font-[Gilroy,sans-serif] text-[18px] text-white opacity-60">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время для бесплатной консультации.
            </p>
          </div>

          <form className="max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-[Gilroy,sans-serif] text-[12px] font-bold text-white uppercase tracking-widest opacity-40 ml-4">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="Иван Иванов"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-[Gilroy,sans-serif] focus:outline-none focus:border-[#e61a66] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="font-[Gilroy,sans-serif] text-[12px] font-bold text-white uppercase tracking-widest opacity-40 ml-4">
                Номер телефона
              </label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-[Gilroy,sans-serif] focus:outline-none focus:border-[#e61a66] transition-colors"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-5 rounded-2xl bg-[#e61a66] text-white font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-widest hover:bg-[#c91659] transition-all hover:shadow-[0_10px_30px_rgba(230,26,102,0.3)]"
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
        <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-[#e61a66] rounded-full blur-[150px] opacity-10"></div>
      </section>

      <Footer />
    </main>
  )
}
