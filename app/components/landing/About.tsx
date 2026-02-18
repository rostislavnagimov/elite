import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="mt-[72px] overflow-hidden bg-white pb-[30px] pt-0">
      <h2 className="gradient-text ml-[10%]">О КОМПАНИИ</h2>
      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="relative z-10 pt-[47px]">
          <h2 className="gradient-text text-[45px] uppercase">КАДРОВЫЙ ХОЛДИНГ ELITE</h2>

          <div className="max-w-[50%] text-[40px] uppercase tracking-tighter text-[#1e1e1e]">
            ОДНА ИЗ ПЕРВЫХ КАДРОВЫХ КОМПАНИЙ НА РЫНКЕ РЕСПУБЛИКИ КАЗАХСТАН
          </div>

          <div
            className="text-[#1e1e1e]"
            style={{
              fontFamily: "'Gilroy', Arial, sans-serif",
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.55,
              maxWidth: '418px'
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
                src="https://optim.tildacdn.com/tild6265-3161-4666-a162-326263356339/-/format/webp/1.png.webp"
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
          className="absolute right-[-30%] top-[110px] z-0 hidden lg:block"
          style={{
            width: '1070px',
            height: '550px',
            borderRadius: '500px',
            overflow: 'hidden'
          }}
        >
          <Image
            src="https://optim.tildacdn.com/tild6163-6431-4137-a466-323639336162/-/format/webp/pexels-christina-mor.jpeg.webp"
            alt=""
            fill
            className="object-cover object-top"
            unoptimized
          />

          {/* Video button — rotating circle + play, positioned inside the image area */}
          <div className="absolute" style={{top: '245px', left: '160px'}}>
            <Link
              href="#popup:youtubevideo"
              role="button"
              aria-haspopup="dialog"
              className="group relative block h-[170px] w-[170px]"
            >
              {/* Rotating circle text */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s'}}>
                <Image
                  src="https://optim.tildacdn.com/tild3830-3765-4731-b133-356134643237/-/resize/340x/-/format/webp/about2.png.webp"
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              {/* Play icon centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://static.tildacdn.com/tild6534-6336-4332-a431-613630383062/play.svg"
                  alt=""
                  width={60}
                  height={60}
                  className="transition-transform group-hover:scale-105"
                  unoptimized
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile image */}
        <div
          className="mx-auto mt-8 lg:hidden"
          style={{
            width: '100%',
            maxWidth: '452px',
            height: '239px',
            borderRadius: '100px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Image
            src="https://optim.tildacdn.com/tild6163-6431-4137-a466-323639336162/-/format/webp/pexels-christina-mor.jpeg.webp"
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
