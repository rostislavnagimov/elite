import Link from 'next/link';

const categories = [
    'Административный персонал',
    'Добыча сырья',
    'Медицина, фармацевтика',
    'Образование',
    'Продажи',
    'Производство',
    'Строительство',
    'Технические',
    'Топ-менеджмент',
    'Юриспруденция',
    'Начинающим специалистам'
];

const latestJobs = [
    {
        title: 'АНАЛИТИК-ТЕСТИРОВЩИК'
    },
    {
        title: 'JAVA-РАЗРАБОТЧИК'
    },
    {
        title: 'МЕНЕДЖЕР ПО ПРОДАЖАМ УСЛУГ'
    }
];


export default function Vacancies() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
                <div className="mb-14">
                    <h2 className="text-[36px] lg:text-[45px] font-bold leading-[54px] uppercase mb-4">
                        <span className="gradient-text">ВАКАНСИИ</span>
                    </h2>
                    <p className="text-elite-black-2 text-[18px] leading-relaxed max-w-[900px]">
                        Сотрудничество с Elite поможет быстро сориентироваться на рынке труда, как работодателю, который
                        находится в поиске профессиональных сотрудников, так и кандидату, который ищет работу для
                        развития своей карьеры.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                    {categories.map((cat, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="text-elite-black hover:text-elite-pink transition-colors py-2 border-b border-gray-50 flex items-center justify-between group"
                        >
                            <span className="text-sm md:text-base">{cat}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </Link>
                    ))}
                </div>

                <h2 className="text-[32px] font-bold uppercase mb-10">
                    <span className="gradient-text">ПОСЛЕДНИЕ ВАКАНСИИ</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestJobs.map((job, index) => (
                        <div key={index} className="border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-elite-black">{job.title}</h3>
                            <Link
                                href="#"
                                className="inline-block bg-elite-pink text-white text-center py-3 rounded-lg font-semibold hover:bg-[#c91659] transition-colors"
                            >
                                Узнать подробнее
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
