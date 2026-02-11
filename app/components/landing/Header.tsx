import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-white transition-all duration-300 shadow-sm">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10 h-[90px] flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image
                            src="/assets/images/Elite_logo_1_1.svg"
                            alt="Elite Logo"
                            width={100}
                            height={40}
                            className="w-[100px] h-auto"
                        />
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="#partner" className="text-elite-black hover:text-elite-pink transition-colors text-[16px] font-normal">
                        Партнерам
                    </Link>
                    <Link href="#applicants" className="text-elite-black hover:text-elite-pink transition-colors text-[16px] font-normal">
                        Соискателям
                    </Link>
                    <Link href="/blog" className="text-elite-black hover:text-elite-pink transition-colors text-[16px] font-normal">
                        Блог
                    </Link>
                    <Link href="/contact" className="text-elite-black hover:text-elite-pink transition-colors text-[16px] font-normal">
                        Контакты
                    </Link>
                </nav>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/elite.kz" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center">
                            <Image src="/assets/facebook-logo.svg" alt="Facebook" width={30} height={30} />
                        </a>
                        <a href="https://www.instagram.com/elite_holding/" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center">
                            <Image src="/assets/instagram-logo.svg" alt="Instagram" width={30} height={30} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCKRltAJpKX4UUKKzC8zT48w" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center">
                            <Image src="/assets/youtube-logo.svg" alt="Youtube" width={30} height={30} />
                        </a>
                        <a href="https://t.me/vacancies_kz" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] flex items-center justify-center">
                            <Image src="/assets/telegram-logo.svg" alt="Telegram" width={30} height={30} />
                        </a>
                    </div>

                    <button className="bg-elite-pink text-white px-5 py-2 rounded-md font-medium text-[14px] hover:bg-[#c91659] transition-colors whitespace-nowrap">
                        Заказать звонок
                    </button>
                </div>

                <button className="lg:hidden text-elite-pink">
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="3" fill="currentColor" />
                        <rect y="8" width="28" height="3" fill="currentColor" />
                        <rect y="16" width="28" height="3" fill="currentColor" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
