export default function Clients() {
    const partners = [
        'ТОО WILO CENTER ASIA',
        'АО "Торговый-промышленный Банк Китая"',
        'АО "НК АСТАНА ЭКСПО-2017"',
        'Региональный экологический центр Центральной Азии',
        'Elite Business Group',
        'TОО «Рекрутинговая компания Elite»'
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10 text-center">
                <h2 className="text-[36px] lg:text-[45px] font-bold leading-tight uppercase mb-12">
                    <span className="gradient-text">НАШИ ПАРТНЕРЫ</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
                    {partners.map((partner) => (
                        <div
                            key={partner}
                            className="flex items-center justify-center p-4 border border-gray-100 rounded-lg text-sm font-medium text-elite-grey h-24"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
