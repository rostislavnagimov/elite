'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="mt-[72px] overflow-hidden bg-white pb-[30px] pt-0">
      <h2 className="gradient-text ml-[10%]">О КОМПАНИИ</h2>
      <div className="relative mx-auto max-w-[1200px] px-5 2xl:max-w-[1400px]">
        <div className="relative z-10 pt-[47px]">
          <h2 className="gradient-text text-3xl uppercase sm:text-[45px]">КАДРОВЫЙ ХОЛДИНГ ELITE</h2>

          <div className="max-w-full text-2xl uppercase tracking-tighter text-[#1e1e1e] sm:text-3xl lg:max-w-[50%] lg:text-[40px]">
            ОДНА ИЗ ПЕРВЫХ КАДРОВЫХ КОМПАНИЙ НА РЫНКЕ РЕСПУБЛИКИ КАЗАХСТАН
          </div>

          <div
            className="max-w-full text-[#1e1e1e] lg:max-w-[418px]"
            style={{
              fontFamily: "'Gilroy', Arial, sans-serif",
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.55
            }}
          >
            На сегодняшний день Elite предлагает широкий спектр услуг в области кадрового консалтинга. Мы имеем широкую
            Партнерскую сеть во многих регионах Казахстана и за рубежом.
            <br />
            <br />
            Нашими консультантами реализуются проекты для крупнейших казахстанских и международных компаний в различных
            отраслях экономики.
            <br />
            <br />В перечень услуг компании Elite входит: подбор персонала, аутстаффинг и аутсорсинг персонала,
            аутстаффинг компании, обзоры рынка труда и заработных плат, управление персоналом, проверка тайным
            покупателем, также множество других направлений в области кадрового консалтинга.
          </div>

          {/* "ПОДРОБНЕЕ" button — circle border + arrow */}
          <div className="mt-[40px] flex items-center gap-[30px]">
            {/* Circle border button */}
            <Link
              href="/aboutus"
              className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full border border-[#e61a66] transition-transform hover:scale-110"
              aria-label="Подробнее"
            >
              {/* Arrow icon from original */}
              <Image
                src="/assets/external/arrow-down.webp"
                alt=""
                width={17}
                height={15}
                unoptimized
              />
            </Link>

            {/* "ПОДРОБНЕЕ" text */}
            <Link
              href="/aboutus"
              className="text-[#26262b] transition-colors hover:text-[#e61a66]"
              style={{
                fontFamily: "'Gilroy', Arial, sans-serif",
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: 1.55
              }}
            >
              ПОДРОБНЕЕ
            </Link>
          </div>
        </div>

        {/* Right image — large, pill shape, absolutely positioned */}
        <div
          className="absolute right-[-30%] top-[110px] hidden lg:block"
          style={{
            width: '1070px',
            height: '550px',
            borderRadius: '500px',
            overflow: 'hidden'
          }}
        >
          <Image
            src="/assets/external/about-mobile.webp"
            alt=""
            fill
            className="object-cover object-top"
            unoptimized
          />

          {/* Video button — rotating circle + play, positioned inside the image area */}
          <div className="absolute" style={{top: '245px', left: '160px'}}>
            <button
              onClick={() => window.showPopup('video')}
              role="button"
              aria-haspopup="dialog"
              className="group relative z-[50] block h-[170px] w-[170px] cursor-pointer"
            >
              {/* Rotating circle text */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s'}}>
                <Image
                  src="/assets/external/about-video-bg.webp"
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              {/* Play icon centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/assets/external/play.svg"
                  alt=""
                  width={60}
                  height={60}
                  className="transition-transform group-hover:scale-105"
                  unoptimized
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className="relative mx-auto mt-8 h-[200px] w-full max-w-[452px] overflow-hidden rounded-[100px] lg:hidden sm:h-[239px]"
        >
          <Image
            src="/assets/external/about-mobile.webp"
            alt=""
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
