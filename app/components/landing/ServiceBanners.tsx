import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Аутсорсинг персонала',
    description:
      'Позволяет не только перераспределить вспомогательные бизнес-процессы, но и снизить юридические и финансовые риски найма персонала на короткий срок.',
    link: '/outsourcing',
    image: '/assets/__.jpeg', // Reusing hero image for now or finding another
    color: 'bg-elite-light-grey'
  },
  {
    title: 'Аутстаффинг',
    description:
      'Отработанная технология введения персонала за штат. Полная ответственность за кадровое и налоговое сопровождение выведенного персонала.',
    link: '/outstaffing',
    image: '/assets/about2.png.webp',
    color: 'bg-white'
  },
  {
    title: 'Подбор персонала',
    description:
      'Профессиональный поиск и отбор специалистов любого уровня: от линейного персонала до топ-менеджмента.',
    link: '/recruitment',
    image: '/assets/k1.jpeg',
    color: 'bg-elite-light-grey'
  }
]

export default function ServiceBanners() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <h2 className="mb-2 text-[18px] font-semibold uppercase tracking-wider text-elite-pink">Наши услуги</h2>
        <h3 className="mb-12 text-[36px] font-bold uppercase leading-tight text-elite-black lg:text-[45px]">
          РЕШЕНИЯ В ОБЛАСТИ АУТСОРСИНГА И УПРАВЛЕНИЯ ПЕРСОНАЛОМ
        </h3>

        <div className="flex flex-col gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-8 lg:flex-row ${service.color} rounded-2xl border border-gray-100 p-8 shadow-sm transition-transform duration-300 hover:scale-[1.01] lg:p-12`}
            >
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gray-200 shadow-inner">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
              </div>
              <div className="flex w-full flex-col gap-6 lg:w-1/2">
                <h4 className="text-[32px] font-bold leading-tight text-elite-black">{service.title}</h4>
                <p className="text-[18px] leading-relaxed text-elite-black-2">{service.description}</p>
                <div>
                  <Link
                    href={service.link}
                    className="inline-block rounded-full bg-[#e61a66] px-8 py-3 font-semibold text-white transition-all hover:bg-[#c91659] hover:shadow-lg active:scale-95"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
