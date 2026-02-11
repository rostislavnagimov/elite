export default function Advantages() {
    const values = ['Наша миссия', 'Наша цель', 'Яркие решения', 'Надежность', 'Наши сотрудники'];

    return (
        <section className="py-20 bg-elite-light-grey">
            <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
                <div className="max-w-[900px]">
                    <h2 className="text-elite-pink text-[18px] font-semibold uppercase tracking-wider mb-4">
                        ЦЕННОСТИ КОМПАНИИ
                    </h2>
                    <h3 className="text-elite-black text-[36px] lg:text-[45px] font-bold leading-tight uppercase mb-8">
                        Кадровый Холдинг Elite это
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-8">
                        {values.map((value) => (
                            <span
                                key={value}
                                className="px-5 py-2 bg-white text-elite-black-2 text-sm uppercase tracking-wider rounded-full border border-gray-100"
                            >
                                {value}
                            </span>
                        ))}
                    </div>
                    <p className="text-elite-black-2 text-[18px] leading-relaxed">
                        Обеспечивать эффективные решения найма, предоставления и администрирования персонала, в условиях
                        безопасности сторон, содействуя развитию цивилизованных отношений участников рынка. Становиться
                        самым профессиональным и удобным звеном нашего клиента. Строить работу компании так, чтобы она
                        была образцом качества, технологичности, управляемости и обеспечивала нашим клиентам и
                        кандидатам максимальную эффективность на пути к их успеху.
                    </p>
                </div>
            </div>
        </section>
    );
}
