'use client'

import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="z-100 fixed top-0 w-full max-w-[100vw] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between gap-4 px-5 2xl:max-w-[1400px]">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/images/Elite_logo_1_1.svg"
              alt="Company"
              width={100}
              height={40}
              className="block h-auto w-[100px]"
            />
          </Link>
        </div>

        <nav className="hidden items-center lg:flex">
          <ul className="m-0 flex list-none items-center p-0">
            <li className="group relative pr-[15px]">
              <Link
                href="#submenu:partner"
                className="flex items-center gap-1 whitespace-nowrap font-[Gilroy,sans-serif] text-[15px] font-medium text-[#26262b] transition-colors group-hover:text-[#e61a66]"
              >
                Партнерам
                <img src="/assets/icons/chevron-down.svg" alt="" className="h-[6px] w-[10px] flex-shrink-0" />
              </Link>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="flex w-[250px] flex-col rounded-md bg-white p-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  <Link
                    href="/aboutus"
                    className={`rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] transition-colors hover:bg-gray-50 hover:text-[#e61a66] ${pathname === '/aboutus' ? 'bg-gray-50 text-[#e61a66]' : 'text-[#26262b]'}`}
                  >
                    О компании
                  </Link>
                  <Link
                    href="/outstaffing"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Аутстаффинг
                  </Link>
                  <Link
                    href="/outsourcing"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Аутсорсинг персонала
                  </Link>
                  <Link
                    href="/podbor-personala"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Подбор персонала
                  </Link>
                  <Link
                    href="/obzor-rynka-truda-i-zarabotanyh-plat"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Обзоры рынка
                  </Link>
                  <Link
                    href="/reviews"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Отзывы
                  </Link>
                </div>
              </div>
            </li>
            <li className="group relative px-[15px]">
              <Link
                href="#submenu:details"
                className="flex items-center gap-1 whitespace-nowrap font-[Gilroy,sans-serif] text-[15px] font-medium text-[#26262b] transition-colors group-hover:text-[#e61a66]"
              >
                Соискателям
                <img src="/assets/icons/chevron-down.svg" alt="" className="h-[6px] w-[10px] flex-shrink-0" />
              </Link>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="flex w-[250px] flex-col rounded-md bg-white p-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  <Link
                    href="/about"
                    className={`rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] transition-colors hover:bg-gray-50 hover:text-[#e61a66] ${pathname === '/about' ? 'bg-gray-50 text-[#e61a66]' : 'text-[#26262b]'}`}
                  >
                    О компании
                  </Link>
                  <Link
                    href="/vacancy"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Все вакансии
                  </Link>
                  <Link
                    href="/sendresume"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Отправить резюме
                  </Link>
                  <Link
                    href="/careercounseling"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Карьерное консультирование
                  </Link>
                  <Link
                    href="/career"
                    className="rounded-md px-3 py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b] transition-colors hover:bg-gray-50 hover:text-[#e61a66]"
                  >
                    Карьера в Elite
                  </Link>
                </div>
              </div>
            </li>
            <li className="px-[15px]">
              <Link
                href="/blog"
                className={`whitespace-nowrap font-[Gilroy,sans-serif] text-[15px] font-medium transition-colors hover:text-[#e61a66] ${
                  pathname === '/blog' ? 'border-b-2 border-[#e61a66] pb-1 text-[#e61a66]' : 'text-[#26262b]'
                }`}
              >
                Блог
              </Link>
            </li>
            <li className="pl-[15px]">
              <Link
                href="/contact"
                className={`whitespace-nowrap font-[Gilroy,sans-serif] text-[15px] font-medium transition-colors hover:text-[#e61a66] ${
                  pathname === '/contact' ? 'border-b-2 border-[#e61a66] pb-1 text-[#e61a66]' : 'text-[#26262b]'
                }`}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right side */}
        <div className="hidden flex-shrink-0 items-center gap-4 lg:flex">
          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/elite.kz"
              target="_blank"
              rel="nofollow noopener"
              aria-label="facebook"
              className="block h-[30px] w-[30px]"
            >
              <svg
                role="presentation"
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z"
                  fill="#e61a66"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/elite_holding/"
              target="_blank"
              rel="nofollow noopener"
              aria-label="instagram"
              className="block h-[30px] w-[30px]"
            >
              <svg
                role="presentation"
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm17.9-67.374c3.838.346 6 2.695 6.474 6.438.332 2.612.626 6.352.626 10.375 0 7.064-.626 11.148-.626 11.148-.588 3.728-2.39 5.752-6.18 6.18-4.235.48-13.76.7-17.992.7-4.38 0-13.237-.184-17.66-.552-3.8-.317-6.394-2.44-6.916-6.218-.38-2.752-.626-6.022-.626-11.222 0-5.788.209-8.238.7-10.853.699-3.732 2.48-5.54 6.548-5.96C36.516 32.221 40.55 32 49.577 32c4.413 0 13.927.228 18.322.626Zm-23.216 9.761v14.374L58.37 49.5l-13.686-7.114Z"
                  fill="#e61a66"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCKRltAJpKX4UUKKzC8zT48w"
              target="_blank"
              rel="nofollow noopener"
              aria-label="youtube"
              className="block h-[30px] w-[30px]"
            >
              <svg
                role="presentation"
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm17.9-67.374c3.838.346 6 2.695 6.474 6.438.332 2.612.626 6.352.626 10.375 0 7.064-.626 11.148-.626 11.148-.588 3.728-2.39 5.752-6.18 6.18-4.235.48-13.76.7-17.992.7-4.38 0-13.237-.184-17.66-.552-3.8-.317-6.394-2.44-6.916-6.218-.38-2.752-.626-6.022-.626-11.222 0-5.788.209-8.238.7-10.853.699-3.732 2.48-5.54 6.548-5.96C36.516 32.221 40.55 32 49.577 32c4.413 0 13.927.228 18.322.626Zm-23.216 9.761v14.374L58.37 49.5l-13.686-7.114Z"
                  fill="#e61a66"
                />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/vacancies_kz"
              target="_blank"
              rel="nofollow noopener"
              aria-label="telegram"
              className="block h-[30px] w-[30px]"
            >
              <svg
                role="presentation"
                width="30"
                height="30"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                  fill="#e61a66"
                />
              </svg>
            </a>
          </div>

          {/* Phone number */}
          <a
            href="tel:+77013555355"
            className="whitespace-nowrap font-[Gilroy,sans-serif] text-[14px] font-medium text-[#26262b] transition-colors hover:text-[#e61a66]"
          >
            +7 701 355 53 55
          </a>

          {/* CTA button */}
          <button
            role="button"
            className="whitespace-nowrap rounded-[5px] bg-[#e61a66] px-5 py-2 font-[Gilroy,sans-serif] text-[14px] font-medium text-white transition-colors hover:bg-[#c91659]"
            onClick={() => window.showPopup('callback')}
          >
            Заказать звонок
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="flex-shrink-0 text-[#e61a66] lg:hidden"
          aria-label="Открыть меню"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="3" fill="currentColor" />
            <rect y="8" width="28" height="3" fill="currentColor" />
            <rect y="16" width="28" height="3" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-[80px] z-50 bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col p-4">
            <div className="mb-4 border-b pb-4">
              <p className="mb-2 font-[Gilroy,sans-serif] text-[14px] font-medium text-[#26262b] opacity-50">
                Партнерам
              </p>
              <Link
                href="/aboutus"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                О компании
              </Link>
              <Link
                href="/outstaffing"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Аутстаффинг
              </Link>
              <Link
                href="/outsourcing"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Аутсорсинг персонала
              </Link>
              <Link
                href="/podbor-personala"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Подбор персонала
              </Link>
              <Link
                href="/obzor-rynka-truda-i-zarabotanyh-plat"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Обзоры рынка
              </Link>
              <Link
                href="/reviews"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Отзывы
              </Link>
            </div>
            <div className="mb-4 border-b pb-4">
              <p className="mb-2 font-[Gilroy,sans-serif] text-[14px] font-medium text-[#26262b] opacity-50">
                Соискателям
              </p>
              <Link
                href="/about"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                О компании
              </Link>
              <Link
                href="/vacancy"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Все вакансии
              </Link>
              <Link
                href="/sendresume"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Отправить резюме
              </Link>
              <Link
                href="/careercounseling"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Карьерное консультирование
              </Link>
              <Link
                href="/career"
                className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Карьера в Elite
              </Link>
            </div>
            <Link
              href="/blog"
              className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Блог
            </Link>
            <Link
              href="/contact"
              className="block py-2 font-[Gilroy,sans-serif] text-[15px] text-[#26262b]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="mt-4 flex flex-col gap-3 border-t pt-4">
              <a href="tel:+77013555355" className="font-[Gilroy,sans-serif] text-[16px] font-medium text-[#e61a66]">
                +7 701 355 53 55
              </a>
              <button
                className="rounded-[5px] bg-[#e61a66] px-5 py-3 font-[Gilroy,sans-serif] text-[14px] font-medium text-white"
                onClick={() => {
                  window.showPopup('callback')
                  setMobileMenuOpen(false)
                }}
              >
                Заказать звонок
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
