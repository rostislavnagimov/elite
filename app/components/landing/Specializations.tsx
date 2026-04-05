import Link from 'next/link'

const specializations = [
  {title: 'Юриспруденция', href: 'https://elite.kz/yurisprudentsiya'},
  {title: 'Начинающим специалистам', href: 'https://elite.kz/nachinayushchim-spetsialistam'},
  {title: 'Бухгалтерия и финансы', href: '#'},
  {title: 'Продажи', href: '#'},
  {title: 'Маркетинг', href: '#'},
  {title: 'IT и технологии', href: '#'}
]

export default function Specializations() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10 2xl:max-w-[1400px]">
        <h2 className="mb-12 text-[45px] font-[300] uppercase leading-[54px]">
          <span className="gradient-text">Направления подбора</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializations.map((spec, index) => (
            <Link
              key={index}
              href={spec.href}
              className="group flex items-center justify-between rounded-lg border border-gray-100 p-8 transition-all duration-300 hover:border-elite-pink"
            >
              <span className="text-[24px] font-[300] text-elite-black transition-colors group-hover:text-[#e61a66]">
                {spec.title}
              </span>
              <span className="text-[#e61a66] opacity-0 transition-opacity group-hover:opacity-100">
                <img src="/assets/icons/arrow-right.svg" alt="" className="h-6 w-6" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
