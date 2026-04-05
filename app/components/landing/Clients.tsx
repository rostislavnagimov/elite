export default function Clients() {
  const partners = [
    { name: 'WILO CENTER ASIA', industry: 'Инженерное оборудование' },
    { name: 'Торговый-промышленный Банк Китая', industry: 'Банковский сектор' },
    { name: 'НК АСТАНА ЭКСПО-2017', industry: 'Выставочная деятельность' },
    { name: 'РЭЦЦА', industry: 'Экологические проекты' }
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-10">
        <h2 className="mb-12 text-[36px] font-[300] uppercase leading-tight lg:text-[45px]">
          <span className="gradient-text">НАШИ ПАРТНЕРЫ</span>
        </h2>

        <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex h-32 flex-col items-center justify-center rounded-lg border border-gray-100 bg-[#F5F5F5] p-4 text-center transition-all hover:border-[#e61a66]/30 hover:shadow-md"
            >
              <p className="font-[Gilroy,sans-serif] text-[16px] font-bold uppercase text-[#26262B]">
                {partner.name}
              </p>
              <p className="mt-1 font-[Gilroy,sans-serif] text-[12px] uppercase tracking-wider text-[#26262B] opacity-50">
                {partner.industry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
