export default function Advantages() {
  const values = ['Наша миссия', 'Наша цель', 'Яркие решения', 'Надежность', 'Наши сотрудники']

  return (
    <section className="bg-elite-light-grey py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="max-w-[900px]">
          <h2 className="mb-4 text-[18px] font-semibold uppercase tracking-wider text-elite-pink">ЦЕННОСТИ КОМПАНИИ</h2>
          <h3 className="mb-8 text-[36px] font-bold uppercase leading-tight text-elite-black lg:text-[45px]">
            Кадровый Холдинг Elite это
          </h3>
          <div className="mb-8 flex flex-wrap gap-4">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-gray-100 bg-white px-5 py-2 text-sm uppercase tracking-wider text-elite-black-2"
              >
                {value}
              </span>
            ))}
          </div>
          <p className="text-[18px] leading-relaxed text-elite-black-2">
            Обеспечивать эффективные решения найма, предоставления и администрирования персонала, в условиях
            безопасности сторон, содействуя развитию цивилизованных отношений участников рынка. Становиться самым
            профессиональным и удобным звеном нашего клиента. Строить работу компании так, чтобы она была образцом
            качества, технологичности, управляемости и обеспечивала нашим клиентам и кандидатам максимальную
            эффективность на пути к их успеху.
          </p>
        </div>
      </div>
    </section>
  )
}
