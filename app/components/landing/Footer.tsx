import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-16 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* Column 1: Logo & Socials */}
        <div className="flex flex-col gap-8">
          <Link href="/">
            <Image
              src="/assets/Elite_logo-light.svg"
              alt="Elite Logo"
              width={120}
              height={45}
              className="h-auto w-[120px]"
            />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/elite.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#e61a66]"
            >
              <Image
                src="/assets/facebook-logo.svg"
                alt="Facebook"
                width={18}
                height={18}
                className="brightness-0 invert"
              />
            </a>
            <a
              href="https://www.instagram.com/elite_holding/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#e61a66]"
            >
              <Image
                src="/assets/instagram-logo.svg"
                alt="Instagram"
                width={18}
                height={18}
                className="brightness-0 invert"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCKRltAJpKX4UUKKzC8zT48w"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#e61a66]"
            >
              <Image
                src="/assets/youtube-logo.svg"
                alt="Youtube"
                width={18}
                height={18}
                className="brightness-0 invert"
              />
            </a>
            <a
              href="https://t.me/vacancies_kz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#e61a66]"
            >
              <Image
                src="/assets/telegram-logo.svg"
                alt="Telegram"
                width={18}
                height={18}
                className="brightness-0 invert"
              />
            </a>
          </div>

          <div className="text-sm leading-relaxed text-white/50">
            © Компания Elite 1997 — 2025. <br />
            Все права защищены.
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="mb-6 text-lg font-bold uppercase tracking-wider">Навигация</h3>
          <ul className="flex flex-col gap-4 text-white/70">
            <li>
              <Link href="/" className="transition-colors hover:text-elite-pink">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="transition-colors hover:text-elite-pink">
                О компании
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="transition-colors hover:text-elite-pink">
                Отзывы
              </Link>
            </li>
            <li>
              <Link href="/vacancy" className="transition-colors hover:text-elite-pink">
                Вакансии
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-elite-pink">
                Блог
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-elite-pink">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contacts */}
        <div>
          <h3 className="mb-6 text-lg font-bold uppercase tracking-wider">Контакты</h3>
          <div className="flex flex-col gap-6 text-white/70">
            <div>
              <p className="mb-1 text-xs uppercase text-white/40">Адрес</p>
              <p>г. Алматы, улица Кабанбай батыра, 109</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase text-white/40">Телефон</p>
              <a
                href="tel:+77013555355"
                className="text-lg font-semibold text-white transition-colors hover:text-elite-pink"
              >
                +7 (701) 355-53-55
              </a>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase text-white/40">Контроль качества</p>
              <a href="tel:+77010317586" className="transition-colors hover:text-elite-pink">
                +7 (701) 031-75-86
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: Feedback/Questions */}
        <div>
          <h3 className="mb-6 text-lg font-bold uppercase tracking-wider">Остались вопросы?</h3>
          <p className="mb-6 text-white/70">Направьте свой запрос, наш специалист перезвонит в ближайшее время!</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors placeholder:text-white/40 focus:border-elite-pink focus:outline-none"
            />
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white transition-colors placeholder:text-white/40 focus:border-elite-pink focus:outline-none"
            />
            <button className="mt-2 w-full rounded-md bg-[#e61a66] py-3 font-bold text-white transition-colors hover:bg-[#e61a66]/90">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
