import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'Тренды рекрутинга 2026: как меняется рынок найма и к чему готовиться компаниям',
    description:
      'Мы собрали наш профессиональный взгляд на ключевые изменения на рынке найма в 2026 году — на основе практики, аналитики и работы с компаниями в условиях кадрового дефицита.',
    image: 'https://static.tildacdn.com/tild6333-3362-4566-b733-663737653132/team_29.png',
    link: 'https://elite.kz/tpost/ek6otu2tp1-trendi-rekrutinga-2026-kak-menyaetsya-ri'
  },
  {
    title: 'Академия Elite: развиваем навыки, которые важны для работы и жизни',
    description:
      'В нашей компании развитие сотрудников — не формальность, а часть корпоративной культуры. Мы искренне верим, что сильная команда строится там, где людям дают возможности расти, учиться новому и чувствовать себя уверенно в любой ситуации.',
    image: 'https://static.tildacdn.com/tild3038-6131-4461-b834-633630383965/_WhatsApp_2025-11-17.jpg',
    link: 'https://elite.kz/tpost/8zasfi1571-akademiya-elite-razvivaem-naviki-kotorie'
  },
  {
    title: 'С Днём бухгалтера и аудитора, коллеги!',
    description:
      'Сегодня, 10 ноября, мы поздравляем тех, кто умеет превращать цифры в порядок, хаос — в баланс, а отчёты — в искусство!',
    image: 'https://static.tildacdn.com/tild6335-3630-4136-b234-383533663165/111111111.jpg',
    link: 'https://elite.kz/tpost/rfcig50951-s-dnyom-buhgaltera-i-auditora-kollegi'
  }
]

export default function News() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="mb-12">
          <h2 className="mb-4 text-[18px] font-semibold uppercase tracking-wider text-elite-pink">НОВОСТИ</h2>
          <h3 className="text-[36px] font-bold uppercase leading-tight text-elite-black lg:text-[45px]">
            ПОСЛЕДНИЕ ПУБЛИКАЦИИ
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.link}
              className="group flex flex-col overflow-hidden rounded-[30px] bg-[#fafafa]"
            >
              <div className="relative aspect-[1.3] w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h4 className="text-[18px] font-bold leading-snug text-elite-black">{post.title}</h4>
                <p className="text-[14px] leading-relaxed text-elite-black-2">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
