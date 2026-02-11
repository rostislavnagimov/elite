import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        title: 'Аутсорсинг персонала',
        description: 'Позволяет не только перераспределить вспомогательные бизнес-процессы, но и снизить юридические и финансовые риски найма персонала на короткий срок.',
        link: '/outsourcing',
        image: '/assets/__.jpeg', // Reusing hero image for now or finding another
        color: 'bg-elite-light-grey'
    },
    {
        title: 'Аутстаффинг',
        description: 'Отработанная технология введения персонала за штат. Полная ответственность за кадровое и налоговое сопровождение выведенного персонала.',
        link: '/outstaffing',
        image: '/assets/about2.png.webp',
        color: 'bg-white'
    },
    {
        title: 'Подбор персонала',
        description: 'Профессиональный поиск и отбор специалистов любого уровня: от линейного персонала до топ-менеджмента.',
        link: '/recruitment',
        image: '/assets/k1.jpeg',
        color: 'bg-elite-light-grey'
    }
];

export default function ServiceBanners() {
    return (
        <section className="py-20 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
                <h2 className="text-elite-pink text-[18px] font-semibold uppercase tracking-wider mb-2">
                    Наши услуги
                </h2>
                <h3 className="text-elite-black text-[36px] lg:text-[45px] font-bold leading-tight uppercase mb-12">
                    РЕШЕНИЯ В ОБЛАСТИ АУТСОРСИНГА И УПРАВЛЕНИЯ ПЕРСОНАЛОМ
                </h3>

                <div className="flex flex-col gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row gap-8 items-center ${service.color} p-8 lg:p-12 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.01] duration-300`}
                        >
                            <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                                <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-inner bg-gray-200">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                <h4 className="text-[32px] font-bold text-elite-black leading-tight">
                                    {service.title}
                                </h4>
                                <p className="text-elite-black-2 text-[18px] leading-relaxed">
                                    {service.description}
                                </p>
                                <div>
                                    <Link
                                        href={service.link}
                                        className="inline-block bg-elite-pink text-white px-8 py-3 rounded-full font-semibold transition-all hover:bg-[#c91659] hover:shadow-lg active:scale-95"
                                    >
                                        Подробнее
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
