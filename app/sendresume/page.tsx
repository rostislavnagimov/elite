'use client'

import {useState} from 'react'

export default function SendResumePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    message: ''
  })
  const [file, setFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', {formData, file})
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white">
        <section className="flex min-h-[80vh] items-center justify-center px-5 pt-[140px]">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e61a66]/10">
                <img src="/assets/icons/check.svg" alt="" className="h-10 w-10 text-[#e61a66]" />
              </div>
            </div>
            <h1 className="mb-4 font-[Gilroy,sans-serif] text-[32px] font-bold text-[#26262B]">Спасибо!</h1>
            <p className="font-[Gilroy,sans-serif] text-[18px] text-[#26262B] opacity-60">
              Ваше резюме успешно отправлено. Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-12 pt-[140px]">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <span className="mb-4 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
            Для соискателей
          </span>
          <h1 className="mb-6 font-[Gilroy,sans-serif] text-[50px] font-bold uppercase leading-[1.1] text-[#26262B] md:text-[62px]">
            ОТПРАВИТЬ РЕЗЮМЕ
          </h1>
          <p className="mb-10 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
            Заполните форму ниже или прикрепите готовое резюме. Наши специалисты рассмотрят вашу кандидатуру и свяжутся
            с вами.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#F5F5F5] px-5 py-20">
        <div className="mx-auto max-w-[800px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="mb-2 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B]">
                ФИО *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Иванов Иван Иванович"
                className="w-full rounded-xl border border-gray-200 bg-white px-6 py-4 font-[Gilroy,sans-serif] text-[16px] text-[#26262B] outline-none transition-all focus:border-[#e61a66]"
              />
            </div>

            {/* Phone and Email */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B]">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-xl border border-gray-200 bg-white px-6 py-4 font-[Gilroy,sans-serif] text-[16px] text-[#26262B] outline-none transition-all focus:border-[#e61a66]"
                />
              </div>
              <div>
                <label className="mb-2 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B]">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-6 py-4 font-[Gilroy,sans-serif] text-[16px] text-[#26262B] outline-none transition-all focus:border-[#e61a66]"
                />
              </div>
            </div>

            {/* Position */}
            <div>
              <label className="mb-2 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B]">
                Желаемая должность
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Например: Менеджер по продажам"
                className="w-full rounded-xl border border-gray-200 bg-white px-6 py-4 font-[Gilroy,sans-serif] text-[16px] text-[#26262B] outline-none transition-all focus:border-[#e61a66]"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="mb-2 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B]">
                Прикрепить резюме
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-file"
                />
                <label
                  htmlFor="resume-file"
                  className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-gray-300 bg-white px-6 py-8 transition-all hover:border-[#e61a66]"
                >
                  <svg className="h-8 w-8 text-[#e61a66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                  <div>
                    <p className="font-[Gilroy,sans-serif] text-[16px] font-medium text-[#26262B]">
                      {file ? file.name : 'Нажмите чтобы выбрать файл'}
                    </p>
                    <p className="font-[Gilroy,sans-serif] text-[14px] text-[#26262B] opacity-50">
                      PDF, DOC, DOCX до 10 МБ
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#26262B]">
                Сопроводительное письмо
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о себе, своем опыте и почему хотите работать с нами..."
                className="w-full rounded-xl border border-gray-200 bg-white px-6 py-4 font-[Gilroy,sans-serif] text-[16px] text-[#26262B] outline-none transition-all focus:border-[#e61a66]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-xl bg-[#e61a66] py-5 font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c91659] md:w-auto md:px-16"
              >
                Отправить резюме
              </button>
              <p className="mt-4 font-[Gilroy,sans-serif] text-[14px] text-[#26262B] opacity-50">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="mb-2 font-[Gilroy,sans-serif] text-[14px] uppercase tracking-wider text-[#26262B] opacity-50">
                Телефон
              </p>
              <a href="tel:+77013555355" className="font-[Gilroy,sans-serif] text-[20px] font-bold text-[#e61a66]">
                +7 (701) 355-53-55
              </a>
            </div>
            <div className="text-center">
              <p className="mb-2 font-[Gilroy,sans-serif] text-[14px] uppercase tracking-wider text-[#26262B] opacity-50">
                Email
              </p>
              <a href="mailto:cv@elite.kz" className="font-[Gilroy,sans-serif] text-[20px] font-bold text-[#e61a66]">
                cv@elite.kz
              </a>
            </div>
            <div className="text-center">
              <p className="mb-2 font-[Gilroy,sans-serif] text-[14px] uppercase tracking-wider text-[#26262B] opacity-50">
                WhatsApp
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=77017690208"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[Gilroy,sans-serif] text-[20px] font-bold text-[#e61a66]"
              >
                +7 701 769 02 08
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
