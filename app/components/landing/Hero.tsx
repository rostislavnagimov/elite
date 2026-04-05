import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="./hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" /> {/* Background overlay */}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-5 lg:px-10 2xl:max-w-[1400px]">
        <div className="max-w-[900px]">
          <h1 className="mb-6 text-[28px] font-[300] uppercase leading-tight text-white sm:text-[40px] lg:mb-8 lg:text-[65px]">
            ПРОФЕССИОНАЛЬНОЕ <br className="hidden sm:block" />
            <span className="gradient-text">УПРАВЛЕНИЕ ПЕРСОНАЛОМ</span>
          </h1>

          <div className="max-w-[700px] text-base leading-relaxed text-white sm:text-[18px] lg:text-[20px]">
            <p className="mb-6 font-light tracking-wide sm:mb-10 lg:text-[24px]">
              Предоставляем лучшие аутсорсинговые решения, обеспечивая максимальную эффективность вашего бизнеса
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-block transform rounded-full bg-[#e61a66] px-6 py-4 text-xs font-[300] uppercase tracking-wider text-white transition-all hover:scale-105 hover:bg-white hover:text-[#e61a66] sm:px-12 sm:py-5 sm:text-sm"
            >
              Бесплатная консультация
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
