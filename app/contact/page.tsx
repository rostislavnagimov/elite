'use client'

import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-[140px] pb-12 px-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-12">
            <div className="max-w-xl">
              <p className="font-[Gilroy,sans-serif] text-[18px] text-[#26262b] opacity-60 mb-4">
                Дайте знать, если у вас возникли вопросы.
              </p>
              <h1 className="font-[Gilroy,sans-serif] text-[40px] md:text-[60px] font-bold leading-tight text-[#e61a66] uppercase">
                СВЯЖИТЕСЬ С НАМИ
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 px-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">

            {/* Left Column: Address and Hours */}
            <div className="space-y-12">
              <div>
                <h3 className="font-[Gilroy,sans-serif] text-[18px] text-[#26262b] opacity-60 mb-4">
                  Приезжайте к нам в офис:
                </h3>
                <p className="font-[Gilroy,sans-serif] text-[24px] md:text-[32px] font-bold text-[#26262b] leading-tight">
                  г. Алматы, ул. Кабанбай батыра, 109/51
                </p>
              </div>

              <div>
                <p className="font-[Gilroy,sans-serif] text-[18px] text-[#26262b] opacity-60">
                  Пн-Пт: с 9.00 до 18.00
                </p>
                <p className="font-[Gilroy,sans-serif] text-[18px] text-[#26262b] opacity-60">
                  Сб-Вс: выходной
                </p>
              </div>
            </div>

            {/* Right Column: Phones and Email */}
            <div className="space-y-12">
              <div className="space-y-4">
                <a
                  href="tel:+77013555355"
                  className="block font-[Gilroy,sans-serif] text-[24px] md:text-[32px] font-bold text-[#e61a66] hover:opacity-80 transition-opacity"
                >
                  +7 (701) 355-53-55
                </a>
                <div className="space-y-1">
                  <p className="font-[Gilroy,sans-serif] text-[14px] text-[#26262b] opacity-60">
                    Отдел контроля качества:
                  </p>
                  <a
                    href="tel:+77010317586"
                    className="block font-[Gilroy,sans-serif] text-[18px] font-medium text-[#26262b] hover:text-[#e61a66] transition-colors"
                  >
                    +7 (701) 031-75-86
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="mailto:sales@elite.kz"
                  className="font-[Gilroy,sans-serif] text-[24px] md:text-[32px] font-bold text-[#e61a66] border-b-2 border-[#e61a66] pb-1 hover:opacity-80 transition-opacity"
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
                  className="font-[Gilroy,sans-serif] text-[16px] font-semibold text-[#26262b] hover:text-[#e61a66] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/elite.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[Gilroy,sans-serif] text-[16px] font-semibold text-[#26262b] hover:text-[#e61a66] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section (Placeholder style to match design vibe) */}
      <section className="mt-12 w-full h-[450px] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7760462057!2d76.9388!3d43.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb81b0a6e6b%3A0xc3f2cc83c3479a0!2zMTA5LzUxLCDRg9C7LiDQmtCw0LHQsNC90LHQsNC5INCx0LDRgtGL0YDQsCwgQWxtYXR5IDBcMCwwMDA!5e0!3m2!1sen!2skz!4v1710000000000!5m2!1sen!2skz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </main>
  )
}
