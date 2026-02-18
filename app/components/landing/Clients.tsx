export default function Clients() {
  const partners = [
    'ТОО WILO CENTER ASIA',
    'АО "Торговый-промышленный Банк Китая"',
    'АО "НК АСТАНА ЭКСПО-2017"',
    'Региональный экологический центр Центральной Азии',
    'Elite Business Group',
    'TОО «Рекрутинговая компания Elite»'
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-10">
        <h2 className="mb-12 text-[36px] font-bold uppercase leading-tight lg:text-[45px]">
          <span className="gradient-text">НАШИ ПАРТНЕРЫ</span>
        </h2>

        <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-24 items-center justify-center rounded-lg border border-gray-100 p-4 text-sm font-medium text-elite-grey"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
