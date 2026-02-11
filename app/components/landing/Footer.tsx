import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-white py-16">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Column 1: Logo & Socials */}
                <div className="flex flex-col gap-8">
                    <Link href="/">
                        <Image
                            src="/assets/Elite_logo-light.svg"
                            alt="Elite Logo"
                            width={120}
                            height={45}
                            className="w-[120px] h-auto"
                        />
                    </Link>

                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/elite.kz" target="_blank" rel="noopener noreferrer" className="w-[35px] h-[35px] flex items-center justify-center bg-white/10 rounded-full hover:bg-elite-pink transition-colors">
                            <Image src="/assets/facebook-logo.svg" alt="Facebook" width={18} height={18} className="brightness-0 invert" />
                        </a>
                        <a href="https://www.instagram.com/elite_holding/" target="_blank" rel="noopener noreferrer" className="w-[35px] h-[35px] flex items-center justify-center bg-white/10 rounded-full hover:bg-elite-pink transition-colors">
                            <Image src="/assets/instagram-logo.svg" alt="Instagram" width={18} height={18} className="brightness-0 invert" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCKRltAJpKX4UUKKzC8zT48w" target="_blank" rel="noopener noreferrer" className="w-[35px] h-[35px] flex items-center justify-center bg-white/10 rounded-full hover:bg-elite-pink transition-colors">
                            <Image src="/assets/youtube-logo.svg" alt="Youtube" width={18} height={18} className="brightness-0 invert" />
                        </a>
                        <a href="https://t.me/vacancies_kz" target="_blank" rel="noopener noreferrer" className="w-[35px] h-[35px] flex items-center justify-center bg-white/10 rounded-full hover:bg-elite-pink transition-colors">
                            <Image src="/assets/telegram-logo.svg" alt="Telegram" width={18} height={18} className="brightness-0 invert" />
                        </a>
                    </div>

                    <div className="text-white/50 text-sm leading-relaxed">
                        © Компания Elite 1997 — 2025. <br />
                        Все права защищены.
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Навигация</h3>
                    <ul className="flex flex-col gap-4 text-white/70">
                        <li><Link href="/" className="hover:text-elite-pink transition-colors">Главная</Link></li>
                        <li><Link href="/aboutus" className="hover:text-elite-pink transition-colors">О компании</Link></li>
                        <li><Link href="/reviews" className="hover:text-elite-pink transition-colors">Отзывы</Link></li>
                        <li><Link href="/vacancy" className="hover:text-elite-pink transition-colors">Вакансии</Link></li>
                        <li><Link href="/blog" className="hover:text-elite-pink transition-colors">Блог</Link></li>
                        <li><Link href="/contact" className="hover:text-elite-pink transition-colors">Контакты</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contacts */}
                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Контакты</h3>
                    <div className="flex flex-col gap-6 text-white/70">
                        <div>
                            <p className="text-xs uppercase text-white/40 mb-1">Адрес</p>
                            <p>г. Алматы, улица Кабанбай батыра, 109</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase text-white/40 mb-1">Телефон</p>
                            <a href="tel:+77013555355" className="text-lg font-semibold text-white hover:text-elite-pink transition-colors">+7 (701) 355-53-55</a>
                        </div>
                        <div>
                            <p className="text-xs uppercase text-white/40 mb-1">Контроль качества</p>
                            <a href="tel:+77010317586" className="hover:text-elite-pink transition-colors">+7 (701) 031-75-86</a>
                        </div>
                    </div>
                </div>

                {/* Column 4: Feedback/Questions */}
                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Остались вопросы?</h3>
                    <p className="text-white/70 mb-6">
                        Направьте свой запрос, наш специалист перезвонит в ближайшее время!
                    </p>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-elite-pink transition-colors"
                        />
                        <input
                            type="tel"
                            placeholder="+7 (___) ___-__-__"
                            className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-elite-pink transition-colors"
                        />
                        <button className="w-full bg-elite-pink hover:bg-elite-pink/90 text-white py-3 rounded-md font-bold transition-colors mt-2">
                            Отправить заявку
                        </button>
                    </form>
                </div>

            </div>
        </footer>
    );
}
