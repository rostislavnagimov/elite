'use client'

import Link from 'next/link'

const leftColumn = [
  {label: 'It/интернет/телеком', href: '/vacancies-it'},
  {label: 'Административный персонал', href: '/administrativnyy-personal'},
  {label: 'Банки/инвестиции/лизинг', href: '/banki-investitsii-lizing'},
  {label: 'Бухгалтерия/финансы/аудит', href: '/bukhgalteriya-finansy-audit'},
  {label: 'Добыча сырья', href: '/dobycha-syrya'},
  {label: 'Логистика/транспорт', href: '/logistika-transport'},
  {label: 'Маркетинг/реклама/pr', href: '/marketing-reklama-pr'},
  {label: 'Медицина, фармацевтика', href: '/meditsina-farmatsevtika'},
  {label: 'Начинающим специалистам', href: '/nachinayushchim-spetsialistam'}
]

const rightColumn = [
  {label: 'Образование', href: '/obrazovaniye'},
  {label: 'Продажи', href: '/prodazhi'},
  {label: 'Производство', href: '/proizvodstvo'},
  {label: 'Строительство', href: '/stroitelstvo'},
  {label: 'Технические', href: '/tekhnicheskiye'},
  {label: 'Топ-менеджмент', href: '/top-management'},
  {label: 'Управление персоналом/hr', href: '/upravleniye-personalom-hr'},
  {label: 'Юриспруденция', href: '/yurisprudentsiya'}
]

const latestJobs = [{title: 'АНАЛИТИК-ТЕСТИРОВЩИК'}, {title: 'JAVA-РАЗРАБОТЧИК'}, {title: 'МЕНЕДЖЕР ПО ПРОДАЖАМ УСЛУГ'}]

export default function Vacancies() {
  return (
    <section className="bg-white">
      {/* ── Верхняя белая часть: заголовок + описание + категории ── */}
      <div className="mx-auto max-w-[1200px] px-5 pt-[25px]">
        {/* Заголовок — не трогаем */}
        <h2 className="mb-4 text-[36px] font-bold uppercase leading-[54px] lg:text-[45px]">
          <span className="gradient-text">ВАКАНСИИ</span>
        </h2>

        {/* Описание */}
        <p
          className="mb-[89px] text-[#1e1e1e]"
          style={{
            fontFamily: "'Gilroy', Arial, sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '25px',
            maxWidth: '690px'
          }}
        >
          Сотрудничество с Elite поможет быстро сориентироваться на рынке труда, как работодателю, который находится в
          поиске профессиональных сотрудников, так и кандидату, который ищет работу для развития своей карьеры.
        </p>

        {/* Категории: 2 колонки */}
        <div className="flex gap-0 pb-20">
          <div className="flex-1">
            {leftColumn.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#1e1e1e] transition-colors hover:text-[#e61a66]"
                  style={{
                    fontFamily: "'Gilroy', Arial, sans-serif",
                    fontSize: '34px',
                    fontWeight: 400,
                    lineHeight: '48px',
                    display: 'inline-block'
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex-1">
            {rightColumn.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#1e1e1e] transition-colors hover:text-[#e61a66]"
                  style={{
                    fontFamily: "'Gilroy', Arial, sans-serif",
                    fontSize: '34px',
                    fontWeight: 400,
                    lineHeight: '48px',
                    display: 'inline-block'
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Полоса с фиксированным фоном: секция скроллится поверх неё ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: '413px',
          backgroundImage:
            "url('https://optim.tildacdn.com/tild6366-3930-4735-b134-386136633364/-/format/webp/pexels-fox-1595391.jpeg.webp')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Бегущая строка у нижнего края фото */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{height: '98px'}}>
          <div
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              animation: 'marqueeVacancies 7s linear infinite',
              fontFamily: "'Gilroy', Arial, sans-serif",
              fontSize: '63px',
              fontWeight: 400,
              lineHeight: '98px',
              color: 'rgba(255,255,255,0.18)'
            }}
          >
            {Array.from({length: 14}).map((_, i) => (
              <span key={i}>
                <strong>ВАКАНСИИ </strong>ВАКАНСИИ{' '}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeVacancies {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* ── Последние вакансии ── */}
      <div className="mx-auto max-w-[1200px] px-5 pb-20 pt-16">
        <h2 className="mb-10 text-[32px] font-bold uppercase">
          <span className="gradient-text">ПОСЛЕДНИЕ ВАКАНСИИ</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {latestJobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl border border-gray-100 p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-elite-black">{job.title}</h3>
              <Link
                href="#"
                className="inline-block rounded-lg bg-[#e61a66] py-3 text-center font-semibold text-white transition-colors hover:bg-[#c91659]"
              >
                Узнать подробнее
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
