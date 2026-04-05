import {Metadata} from 'next'
import Link from 'next/link'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Карьера в Elite | Работа в кадровом агентстве',
  description:
    'Присоединяйтесь к команде Elite! Мы предлагаем работу в ведущем кадровом агентстве Казахстана. Открытые вакансии в Алматы.',
  alternates: {
    canonical: 'https://elite.kz/career'
  }
}

const careerSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  name: 'Работа в Elite',
  description: 'Возможности карьерного роста в кадровом агентстве Elite',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz'
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Алматы',
      addressCountry: 'KZ'
    }
  }
}

const benefits = [
  {
    title: 'Постоянное развитие',
    description: 'Мы верим, что постоянное развитие – ключ к успеху, поэтому сотрудники Elite проходят регулярное обучение и повышение квалификации.'
  },
  {
    title: 'Ваш голос важен',
    description: 'Мы всегда открыты для новых идей и предложений.'
  },
  {
    title: 'Карьерный рост',
    description: 'Elite предоставляет большие перспективы для карьерного роста.'
  }
]

const vacancies = [
  {
    title: 'Специалист по подбору персонала',
    city: 'Алматы',
    experience: 'не менее 2-х лет на аналогичной позиции, опыт во внешнем рекрутинге будет преимуществом',
    responsibilities: [
      'Ведение полного цикла подбора персонала: от снятия заявки до завершения гарантийного срока',
      'Разработка стратегий поиска кандидатов, используя передовые технологии и методы',
      'Обеспечение качественного и своевременного закрытия вакансий'
    ],
    requirements: [
      'Опыт работы от 1 года на аналогичной позиции',
      'Отличное знание технологий рекрутинга',
      'Опыт работы с различными каналами поиска кандидатов',
      'Ответственность, самоорганизация и ориентированность на результат'
    ],
    offers: [
      'Официальное трудоустройство',
      'Фиксированный оклад + проценты от закрытых проектов',
      'Множество возможностей для профессионального и карьерного роста',
      'Работа в одной из ведущих компаний кадрового консалтинга в Казахстане'
    ]
  },
  {
    title: 'Ресечер',
    city: 'Алматы',
    experience: 'не обязателен',
    responsibilities: [
      'Активная работа с внутренней базой кандидатов и внешними источниками поиска',
      'Предварительный отбор и скрининг кандидатов',
      'Проведение первичных телефонных интервью',
      'Поддержание связи с рекрутерами и предоставление необходимой обратной связи'
    ],
    requirements: [
      'Высокая результативность и способность к командной работе',
      'Отличные навыки тайм-менеджмента',
      'Грамотность, уверенные устная и письменная речь'
    ],
    offers: [
      'Старт вашей карьеры в подборе персонала',
      'Уникальную возможность обучаться у лучших профессионалов отрасли',
      'Регулярное внутреннее обучение и реальные перспективы карьерного роста до позиции рекрутера в течение года',
      'Динамичную работу в команде высококлассных экспертов'
    ]
  },
  {
    title: 'Менеджер по продажам услуг',
    city: 'Алматы',
    experience: 'в B2B продажах не менее 1 года',
    responsibilities: [
      'Поиск и привлечение новых клиентов в сегменте B2B',
      'Проведение переговоров и заключение договоров',
      'Сопровождение клиентов на всех этапах сотрудничества',
      'Работа с текущей клиентской базой и её активное расширение'
    ],
    requirements: [
      'Опыт работы в продажах от 1 года (опыт в B2B будет вашим преимуществом)',
      'Отличные коммуникативные навыки и способность убеждать',
      'Владение современными техниками продаж'
    ],
    offers: [
      'Работу в сердце деловой активности Алматы, на пересечении Кабанбай батыра и Масанчи',
      'График 5/2 с 09:00 до 18:00, позволяющий совмещать работу и личную жизнь',
      'Конкурентоспособную заработную плату с фиксированной частью 300 000тг на руки и неограниченными бонусами',
      'Возможности для карьерного роста и регулярное обучение'
    ]
  },
  {
    title: 'Руководитель направления подбора персонала',
    city: 'Алматы',
    experience: 'в рекрутинге не менее 3 лет, наличие управленческого опыта не менее 2-х лет',
    responsibilities: [
      'Управление процессом подбора персонала – вы будете главным в этом процессе',
      'Активный поиск и привлечение кандидатов – используйте свой талант для поиска лучших',
      'Анализ и внедрение новых методик – улучшайте процессы подбора',
      'Обучение и развитие рекрутеров – передавайте свои знания и опыт',
      'Ведение отчетности – будьте в курсе всех процессов'
    ],
    requirements: [
      'Опыт работы в кадровом агентстве будет вашим преимуществом',
      'Опыт в подборе персонала не менее 3 лет – мы ценим ваш опыт',
      'Понимание и управление метриками подбора – влиять на результаты важно',
      'Доказанный опыт успешного закрытия различных позиций',
      'Проактивность, результативность, гибкость и позитивный настрой – ключ к успеху'
    ],
    offers: [
      'Уютный офис в центре Алматы – работайте в комфортных условиях',
      'Фиксированный оклад + бонусы – ваши достижения будут щедро вознаграждены',
      'Оплата мобильной связи и доступ ко всем ресурсам для поиска кандидатов',
      'Профессиональная команда с многолетним опытом – учитесь у лучших'
    ]
  },
  {
    title: 'HR менеджер',
    city: 'Алматы',
    experience: 'в сфере подбора персонала не менее 3-х лет',
    responsibilities: [
      'Построение процессов внутреннего найма, контроль исполнения, ведение отчетности',
      'Работа над развитием HR-бренда компании',
      'Адаптация новых сотрудников, контроль ввода в должность',
      'Разработка мотивации, доработка адаптационной программы, обучение персонала',
      'Организация мероприятий, поддержание корпоративной культуры и рабочей атмосферы в компании',
      'Руководство отделом (в подчинении предполагается 1-2 рекрутера)'
    ],
    requirements: [
      'Опыт работы HR-менеджером от 3-х лет',
      'Отличное понимание HR процессов',
      'Навыки эффективного планирования',
      'Высокие коммуникативные навыки',
      'Умение работать в режиме многозадачности'
    ],
    offers: [
      'Важную позицию в компании',
      'Карьерный рост до руководителя HR Департамента',
      'Конкурентоспособный оклад',
      'Бесплатные курсы по Soft Skills, скидки на оплату skillbox, skyeng, geekbrains',
      'Корпоративный мобильный телефон и связь',
      'График 5/2 с 09:00-18:00'
    ]
  },
  {
    title: 'Менеджер по работе с ключевыми клиентами',
    city: 'Алматы',
    experience: 'не менее 2-х лет',
    responsibilities: [
      'Ведение ключевых клиентов компании',
      'Сопровождение проектов аутстаффинга',
      'Организация и проведение встреч с клиентами, презентаций и переговоров',
      'Ведение документации, контроль сроков договоров, поступлений и платежей',
      'Подготовка отчетов о проделанной работе и достигнутых результатах',
      'Владение актуальной информацией по клиентам'
    ],
    requirements: [
      'Умение работать в команде',
      'Коммуникабельность и стрессоустойчивость',
      'Знание порядка проведения переговоров с клиентами',
      'Владение 1С (желательно)',
      'Опыт работы с отчетностью в Excel'
    ],
    offers: [
      'Официальное трудоустройство и социальный пакет',
      'Возможность обучения и развития',
      'Пятидневная рабочая неделя с 9:00 до 18:00',
      'Уютный офис в центре города',
      'Стабильный доход без задержек'
    ]
  },
  {
    title: 'Офис-менеджер',
    city: 'Алматы',
    experience: 'не менее 1-го года',
    responsibilities: [
      'Встреча и приветствие посетителей и гостей компании',
      'Выполнение поручений и задач, поставленных руководством',
      'Коммутация входящих и исходящих звонков',
      'Обработка входящей и исходящей корреспонденции',
      'Сбор и предоставление необходимой информации и материалов для руководства',
      'Обеспечение своевременной обработки поступающих и отправляемых документов',
      'Обеспечение рабочих мест сотрудников организационной техникой и канцелярскими принадлежностями',
      'Взаимодействие с курьерами и водителями'
    ],
    requirements: [
      'Опыт работы на аналогичной позиции от одного года и выше',
      'Обязательное знание государственного языка',
      'Умение работать с офисными программами',
      'Грамотная и четко поставленная речь'
    ],
    offers: [
      'Комфортный офис в центре города',
      'Дружный и сплоченный коллектив, где ценится креативность и инициатива',
      'Рабочий график с понедельника по пятницу, с 09:00 до 18:00',
      'Официальное трудоустройство по ТК РК'
    ]
  }
]

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={careerSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-20 pt-[140px]">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <h1 className="mb-6 font-[Gilroy,sans-serif] text-[50px] font-bold uppercase leading-[1.1] text-[#e61a66] md:text-[62px]">
            КАРЬЕРА В ELITE
          </h1>
          <p className="mb-10 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
            Присоединяйтесь к одной из ведущих кадровых компаний Казахстана. Мы предлагаем стабильность и возможность профессионального роста.
          </p>
          <Link href="#vacancies" className="group inline-flex items-center gap-4">
            <span className="border-b border-transparent font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-widest text-[#26262B] transition-all group-hover:border-[#e61a66]">
              СМОТРЕТЬ ВАКАНСИИ
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
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F5F5F5] px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <h3 className="mb-4 font-[Gilroy,sans-serif] text-[20px] font-bold uppercase tracking-wide text-[#26262B]">
                  {benefit.title}
                </h3>
                <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacancies" className="px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="mb-16 text-center font-[Gilroy,sans-serif] text-[40px] font-bold uppercase text-[#26262B] md:text-[50px]">
            Открытые вакансии
          </h2>

          <div className="space-y-8">
            {vacancies.map((vacancy, i) => (
              <div
                key={i}
                className="group rounded-[30px] border border-transparent bg-[#F5F5F5] p-8 transition-all hover:border-[#e61a66]/20 hover:shadow-xl"
              >
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="mb-2 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">
                      {vacancy.title}
                    </h3>
                    <p className="font-[Gilroy,sans-serif] text-[14px] text-[#26262B] opacity-60">
                      {vacancy.city} • Опыт работы: {vacancy.experience}
                    </p>
                  </div>
                  <Link
                    href="/sendresume"
                    className="flex-shrink-0 rounded-xl bg-[#e61a66] px-8 py-3 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c91659]"
                  >
                    Отправить резюме
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div>
                    <h4 className="mb-4 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
                      Обязанности
                    </h4>
                    <ul className="space-y-2">
                      {vacancy.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-[#e61a66]">•</span>
                          <span className="font-[Gilroy,sans-serif] text-[14px] leading-relaxed text-[#26262B]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
                      Требования
                    </h4>
                    <ul className="space-y-2">
                      {vacancy.requirements.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-[#e61a66]">•</span>
                          <span className="font-[Gilroy,sans-serif] text-[14px] leading-relaxed text-[#26262B]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-4 font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
                      Мы предлагаем
                    </h4>
                    <ul className="space-y-2">
                      {vacancy.offers.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-[#e61a66]">•</span>
                          <span className="font-[Gilroy,sans-serif] text-[14px] leading-relaxed text-[#26262B]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1A1A1A] px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 font-[Gilroy,sans-serif] text-[32px] font-bold text-white md:text-[40px]">
              Не нашли подходящую вакансию?
            </h2>
            <p className="mb-8 max-w-[500px] font-[Gilroy,sans-serif] text-[18px] text-white opacity-60">
              Отправьте нам свое резюме, и мы рассмотрим возможность сотрудничества
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:cv@elite.kz"
                className="font-[Gilroy,sans-serif] text-[20px] font-bold text-[#e61a66] transition-opacity hover:opacity-80"
              >
                cv@elite.kz
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=77017690208"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[Gilroy,sans-serif] text-[18px] text-white opacity-60 transition-opacity hover:opacity-100"
              >
                +7 701 769 02 08 (WhatsApp)
              </a>
              <Link
                href="/sendresume"
                className="mt-4 rounded-xl bg-[#e61a66] px-10 py-4 font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c91659]"
              >
                Отправить резюме
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
