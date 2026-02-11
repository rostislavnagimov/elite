import Link from 'next/link';

const specializations = [
    { title: 'Юриспруденция', href: 'https://elite.kz/yurisprudentsiya' },
    { title: 'Начинающим специалистам', href: 'https://elite.kz/nachinayushchim-spetsialistam' },
    { title: 'Бухгалтерия и финансы', href: '#' },
    { title: 'Продажи', href: '#' },
    { title: 'Маркетинг', href: '#' },
    { title: 'IT и технологии', href: '#' },
];

export default function Specializations() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
                <h2 className="text-[45px] font-bold leading-[54px] uppercase mb-12">
                    <span className="gradient-text">Направления подбора</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specializations.map((spec, index) => (
                        <Link
                            key={index}
                            href={spec.href}
                            className="group border border-gray-100 p-8 rounded-lg hover:border-elite-pink transition-all duration-300 flex items-center justify-between"
                        >
                            <span className="text-[24px] font-semibold text-elite-black group-hover:text-elite-pink transition-colors">
                                {spec.title}
                            </span>
                            <span className="text-elite-pink opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
