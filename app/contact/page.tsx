'use client'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-5 pb-12 pt-[140px]">
        <div className="mx-auto max-w-[1200px] 2xl:max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 border-b border-gray-100 pb-12 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="mb-4 font-[Gilroy,sans-serif] text-[18px] text-[#26262b] opacity-60">
                Дайте знать, если у вас возникли вопросы.
              </p>
              <h1 className="font-[Gilroy,sans-serif] text-[40px] font-bold uppercase leading-tight text-[#e61a66] md:text-[60px]">
                СВЯЖИТЕСЬ С НАМИ
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-[1200px] 2xl:max-w-[1400px]">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2">
            {/* Left Column: Address and Hours */}
            <div className="space-y-12">
              <div>
                <h3 className="mb-4 font-[Gilroy,sans-serif] text-[18px] text-[#26262b] opacity-60">
                  Приезжайте к нам в офис:
                </h3>
                <p className="font-[Gilroy,sans-serif] text-[24px] font-bold leading-tight text-[#26262b] md:text-[32px]">
                  г. Алматы, ул. Кабанбай батыра, 109/51
                </p>
              </div>

              <div>
                <p className="font-[Gilroy,sans-serif] text-[18px] text-[#26262b] opacity-60">Пн-Пт: с 9.00 до 18.00</p>
                <p className="font-[Gilroy,sans-serif] text-[18px] text-[#26262b] opacity-60">Сб-Вс: выходной</p>
              </div>
            </div>

            {/* Right Column: Phones and Email */}
            <div className="space-y-12">
              <div className="space-y-4">
                <a
                  href="tel:+77013555355"
                  className="block font-[Gilroy,sans-serif] text-[24px] font-bold text-[#e61a66] transition-opacity hover:opacity-80 md:text-[32px]"
                >
                  +7 (701) 355-53-55
                </a>
                <div className="space-y-1">
                  <p className="font-[Gilroy,sans-serif] text-[14px] text-[#26262b] opacity-60">
                    Отдел контроля качества:
                  </p>
                  <a
                    href="tel:+77010317586"
                    className="block font-[Gilroy,sans-serif] text-[18px] font-medium text-[#26262b] transition-colors hover:text-[#e61a66]"
                  >
                    +7 (701) 031-75-86
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="mailto:sales@elite.kz"
                  className="border-b-2 border-[#e61a66] pb-1 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#e61a66] transition-opacity hover:opacity-80 md:text-[32px]"
                >
                  sales@elite.kz
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-4">
                <a
                  href="https://www.instagram.com/elite_holding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[Gilroy,sans-serif] text-[16px] font-semibold text-[#26262b] transition-colors hover:text-[#e61a66]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/elite.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[Gilroy,sans-serif] text-[16px] font-semibold text-[#26262b] transition-colors hover:text-[#e61a66]"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder style to match design vibe) */}
      <section className="mt-12 h-[450px] w-full bg-gray-100 grayscale transition-all duration-700 hover:grayscale-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7760462057!2d76.9388!3d43.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb81b0a6e6b%3A0xc3f2cc83c3479a0!2zMTA5LzUxLCDRg9C7LiDQmtCw0LHQsNC90LHQsNC5INCx0LDRgtGL0YDQsCwgQWxtYXR5IDBcMCwwMDA!5e0!3m2!1sen!2skz!4v1710000000000!5m2!1sen!2skz"
          width="100%"
          height="100%"
          style={{border: 0}}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  )
}
