import {Metadata} from 'next'
import JsonLd from '../components/JsonLd'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'О компании Elite | Кадровый Холдинг в Казахстане',
  description:
    'Кадровый Холдинг Elite — одна из первых кадровых компаний на рынке Республики Казахстан. Более 28 лет опыта в HR-консалтинге и подборе персонала.',
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

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={aboutSchema} />
      
      {/* Hero Section */}
      <section className="px-5 pb-20 pt-[140px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-start">
            <div className="w-full md:w-1/3">
              <h1 className="font-[Gilroy,sans-serif] text-[50px] font-bold uppercase leading-tight text-[#e61a66] md:text-[62px]">
                О КОМПАНИИ
              </h1>
            </div>
            <div className="w-full md:w-2/3 md:pt-4">
              <p className="font-[Gilroy,sans-serif] text-[20px] font-medium leading-tight text-[#26262B] md:text-[24px]">
                Наша компания работает в сфере кадрового консалтинга уже более 28 лет!
              </p>
            </div>
          </div>

          {/* Video Placeholder / Big Image */}
          <div className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[30px]">
            <img
              src="https://optim.tildacdn.com/tild6366-3166-4139-b362-346133346539/-/format/webp/cherrydeck-05gac-Qn0.jpeg.webp"
              alt="Elite Office"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="transition-bg absolute inset-0 flex flex-col items-center justify-center bg-black/20 duration-300 group-hover:bg-black/30">
              <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 md:h-[100px] md:w-[100px]">
                <img
                  src="https://static.tildacdn.com/tild6534-6336-4332-a431-613630383062/play.svg"
                  alt="Play"
                  className="ml-1 h-10 w-10 md:h-12 md:w-12"
                />
              </div>
              <p className="px-4 text-center font-[Gilroy,sans-serif] text-[12px] font-bold uppercase tracking-widest text-white md:text-[14px]">
                ПОСМОТРИТЕ КОРОТКОЕ ВИДЕО О КОМПАНИИ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
            <div className="space-y-8">
              <p className="font-[Gilroy,sans-serif] text-[18px] leading-relaxed text-[#26262B]">
                Компания была основана в 1997 году на базе «Среднеазиатского фонда системных исследований» и в 2004 году
                преобразована в Кадровый холдинг «Elite». Сегодня «Elite» занимает лидирующие позиции на рынке кадровых
                услуг Казахстана.
              </p>
              <p className="font-[Gilroy,sans-serif] text-[18px] leading-relaxed text-[#26262B]">
                За 28 лет успешной работы компания приобрела огромный опыт по реализации сложнейших проектов в области
                HR-консалтинга и подбора персонала высшего и среднего звена.
              </p>
            </div>
            <div className="space-y-8">
              <p className="font-[Gilroy,sans-serif] text-[18px] leading-relaxed text-[#26262B]">
                Мы предлагаем широкий спектр услуг, включая аустаффинг, аутсорсинг персонала, карьерное консультирование
                и обзоры рынка труда. Наша миссия — помогать компаниям находить «своих» людей, а профессионалам — работу
                мечты.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-[#e61a66] px-10 py-4 font-[Gilroy,sans-serif] text-[16px] font-bold text-white transition-all hover:bg-[#c91659] hover:shadow-lg"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F5F5F5] px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {val: '700', label: 'Довольных клиентов'},
              {val: '28', label: 'Лет на рынке рекрутинга'},
              {val: '1000', label: 'Успешных проектов'},
              {val: '216', label: 'Сотрудников в компании'}
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-[30px] bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-4 font-[Gilroy,sans-serif] text-[60px] font-bold leading-none text-[#e61a66] md:text-[72px]">
                  {stat.val}
                </span>
                <p className="font-[Gilroy,sans-serif] text-[16px] font-medium text-[#26262B] opacity-70 md:text-[18px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

          </main>
  )
}
