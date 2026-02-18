import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source
            src="https://static.tildacdn.com/vide3935-3464-4436-b263-333330323961/video-OP24-720.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" /> {/* Background overlay */}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 lg:px-10">
        <div className="max-w-[900px]">
          <h1 className="mb-8 text-[40px] font-bold uppercase leading-tight text-white lg:text-[65px]">
            ПРОФЕССИОНАЛЬНОЕ <br />
            <span className="gradient-text">УПРАВЛЕНИЕ ПЕРСОНАЛОМ</span>
          </h1>

          <div className="max-w-[700px] text-[18px] leading-relaxed text-white lg:text-[20px]">
            <p className="mb-10 font-light tracking-wide lg:text-[24px]">
              Предоставляем лучшие аутсорсинговые решения, обеспечивая максимальную эффективность вашего бизнеса
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block transform rounded-full bg-[#e61a66] px-12 py-5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105 hover:bg-white hover:text-elite-pink"
            >
              Бесплатная консультация
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
