export default function Clients() {
  const partners = [
    './assets/images/clients/1.jpeg',
    './assets/images/clients/2.png',
    './assets/images/clients/3.jpeg',
    './assets/images/clients/4.jpg',
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-10">
        <h2 className="mb-12 text-[36px] font-[300] uppercase leading-tight lg:text-[45px]">
          <span className="gradient-text">НАШИ ПАРТНЕРЫ</span>
        </h2>

        <div className="grid grid-cols-4 items-center gap-6">
          {partners.map((partner) => (
            <img
              key={partner}
              src={partner}
              className="flex h-24 items-center justify-center rounded-lg border border-gray-100 p-4 text-sm font-medium text-elite-grey"
            />

          ))}
        </div>
      </div>
    </section>
  )
}
