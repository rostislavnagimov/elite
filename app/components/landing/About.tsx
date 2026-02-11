import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="lg:w-1/3">
                        <h2 className="text-elite-pink text-[18px] font-semibold uppercase tracking-wider mb-4">
                            О КОМПАНИИ
                        </h2>
                        <h3 className="text-elite-black text-[36px] lg:text-[45px] font-bold leading-tight uppercase">
                            <span className="gradient-text">КАДРОВЫЙ ХОЛДИНГ ELITE</span>
                        </h3>
                        <Link
                            href="/aboutus"
                            className="inline-block mt-8 bg-elite-pink text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#c91659] transition-colors"
                        >
                            Подробнее
                        </Link>
                    </div>

                    <div className="lg:w-2/3 flex flex-col gap-6 text-elite-black-2 text-[18px] leading-relaxed relative">
                        <div className="relative mb-8 group cursor-pointer">
                            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[16/9] relative">
                                <Image
                                    src="/assets/__.jpeg"
                                    alt="About Elite"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-32 h-32 flex items-center justify-center">
                                        {/* Circular Text (SVG placeholder) */}
                                        <div className="absolute inset-0 animate-spin-slow">
                                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                                <text className="text-[8px] uppercase tracking-widest font-bold fill-white">
                                                    <textPath xlinkHref="#circlePath">
                                                        КОРОТКОЕ ВИДЕО О КОМПАНИИ • ПОСМОТРИТЕ НАМ •
                                                    </textPath>
                                                </text>
                                            </svg>
                                        </div>
                                        {/* Play Triangle */}
                                        <div className="w-16 h-16 bg-elite-pink rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            На сегодняшний день Elite предлагает широкий спектр услуг в области кадрового консалтинга.
                            Мы имеем широкую Партнерскую сеть во многих регионах Казахстана и за рубежом.
                        </p>
                        <p>
                            Нашими консультантами реализуются проекты для крупнейших казахстанских и международных
                            компаний в различных отраслях экономики.
                        </p>
                        <p className="font-bold text-elite-black text-[22px] leading-snug">
                            ОДНА ИЗ ПЕРВЫХ КАДРОВЫХ КОМПАНИЙ НА РЫНКЕ РЕСПУБЛИКИ КАЗАХСТАН
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
