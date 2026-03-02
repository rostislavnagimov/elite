'use client'

import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-[140px] pb-20 px-5">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-start gap-8 mb-16">
            <div className="w-full md:w-1/3">
              <h1 className="font-[Gilroy,sans-serif] text-[50px] md:text-[62px] font-bold uppercase leading-tight text-[#e61a66]">
                О КОМПАНИИ
              </h1>
            </div>
            <div className="w-full md:w-2/3 md:pt-4">
              <p className="font-[Gilroy,sans-serif] text-[20px] md:text-[24px] font-medium text-[#26262B] leading-tight">
                Наша компания работает в сфере кадрового консалтинга уже более 28 лет!
              </p>
            </div>
          </div>

          {/* Video Placeholder / Big Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[30px] group cursor-pointer">
            <img
              src="https://optim.tildacdn.com/tild6366-3166-4139-b362-346133346539/-/format/webp/cherrydeck-05gac-Qn0.jpeg.webp"
              alt="Elite Office"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 transition-bg duration-300 group-hover:bg-black/30">
              <div className="mb-6 h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-110">
                <img
                  src="https://static.tildacdn.com/tild6534-6336-4332-a431-613630383062/play.svg"
                  alt="Play"
                  className="w-10 h-10 md:w-12 md:h-12 ml-1"
                />
              </div>
              <p className="font-[Gilroy,sans-serif] text-[12px] md:text-[14px] font-bold text-white uppercase tracking-widest text-center px-4">
                ПОСМОТРИТЕ КОРОТКОЕ ВИДЕО О КОМПАНИИ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="pb-24 px-5">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <p className="font-[Gilroy,sans-serif] text-[18px] leading-relaxed text-[#26262B]">
                Компания была основана в 1997 году на базе «Среднеазиатского фонда системных исследований» и в 2004 году преобразована в Кадровый холдинг «Elite». Сегодня «Elite» занимает лидирующие позиции на рынке кадровых услуг Казахстана.
              </p>
              <p className="font-[Gilroy,sans-serif] text-[18px] leading-relaxed text-[#26262B]">
                За 28 лет успешной работы компания приобрела огромный опыт по реализации сложнейших проектов в области HR-консалтинга и подбора персонала высшего и среднего звена.
              </p>
            </div>
            <div className="space-y-8">
              <p className="font-[Gilroy,sans-serif] text-[18px] leading-relaxed text-[#26262B]">
                Мы предлагаем широкий спектр услуг, включая аустаффинг, аутсорсинг персонала, карьерное консультирование и обзоры рынка труда. Наша миссия — помогать компаниям находить «своих» людей, а профессионалам — работу мечты.
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
      <section className="bg-[#F5F5F5] py-24 px-5">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: '700', label: 'Довольных клиентов' },
              { val: '28', label: 'Лет на рынке рекрутинга' },
              { val: '1000', label: 'Успешных проектов' },
              { val: '216', label: 'Сотрудников в компании' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-[30px] shadow-sm hover:shadow-md transition-shadow">
                <span className="font-[Gilroy,sans-serif] text-[60px] md:text-[72px] font-bold text-[#e61a66] leading-none mb-4">
                  {stat.val}
                </span>
                <p className="font-[Gilroy,sans-serif] text-[16px] md:text-[18px] font-medium text-[#26262B] opacity-70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
