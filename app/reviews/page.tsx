import {Metadata} from 'next'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Отзывы о компании Elite | Кадровое агентство',
  description:
    'Отзывы партнеров и клиентов о кадровом агентстве Elite. Узнайте, что говорят о нас компании, с которыми мы сотрудничаем.',
  alternates: {
    canonical: 'https://elite.kz/reviews'
  }
}

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'Elite',
    url: 'https://elite.kz'
  }
}

const allReviews = [
  {
    author: 'ТОО WILO CENTER ASIA',
    role: 'Наш партнер',
    text: 'За шесть лет партнерства с ТОО «Рекрутинговая компания Elite», сотрудники зарекомендовали себя исключительно с положительной стороны. Результаты их работы всегда отвечали требованиям заказчика и соответствовали профессиональному уровню. Особенно хочется отметить ответственность и оперативность этой компании в решении любых вопросов.'
  },
  {
    author: 'АО "Торговый-промышленный Банк Китая"',
    role: 'Наш партнер',
    text: 'АО «Торговый-промышленный Банк Китая в г. Алматы» сотрудничает с кадровым холдингом «Elite» c 2015 года. За это время с помощью данного холдинга мы подобрали сотрудников на ключевые позиции. По всем кандидатам предоставленным на рассмотрение кадровым холдингом «Elite» мы получили полную предварительную информацию, резюме соответствовали нашим требованиям. Мы благодарим данный холдинг за сотрудничество и хотим выразить благодарность сотрудникам за оперативность и точность в закрытии позиций нашего Банка.'
  },
  {
    author: 'АО "НК АСТАНА ЭКСПО-2017"',
    role: 'Наш партнер',
    text: 'Благодарность «ТОО Elite Business Group» за значительный вклад в организацию и проведение международной специализированной выставки ЭКСПО-2017 в городе Астана!'
  },
  {
    author: 'Региональный экологический центр Центральной Азии',
    role: 'Наш партнер',
    text: 'Настоящим письмом Региональный экологический центр Центральной Азии (РЭЦЦА) в городе Алматы выражает благодарность кадровому холдингу «Elite» за активное и плодотворное сотрудничество, а именно, за оказание качественных и своевременных услуг по подбору персонала для нашей организации. Холдинг отличается учетом индивидуальных особенностей и пожеланий при подборе специалистов и оперативностью реагирования на запросы. Отдельно хотим отметить гибкость, уважительное и внимательное отношение сотрудников по подбору персонала данного холдинга. Рекомендуем кадровый холдинг «Elite», как верного партнера и поставщика. Надеемся на дальнейшее сотрудничество и желаем вам процветания и успехов.'
  }
]

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={reviewsSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-12 pt-[140px]">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <span className="mb-4 block font-[Gilroy,sans-serif] text-[14px] font-bold uppercase tracking-wider text-[#e61a66]">
            О нас говорят
          </span>
          <h1 className="mb-6 font-[Gilroy,sans-serif] text-[50px] font-bold uppercase leading-[1.1] text-[#26262B] md:text-[62px]">
            ОТЗЫВЫ
          </h1>
          <p className="mb-10 max-w-[600px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] md:text-[20px]">
            Узнайте, что говорят о нашей работе компании, с которыми мы сотрудничаем более 28 лет.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-[#F5F5F5] px-5 py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {allReviews.map((review, i) => (
              <div
                key={i}
                className="flex h-full flex-col rounded-[30px] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex-grow">
                  <svg
                    className="mb-4 h-8 w-8 text-[#e61a66] opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] italic">
                    {review.text}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-[Gilroy,sans-serif] text-[18px] font-bold text-[#26262B]">
                    {review.author}
                  </p>
                  <p className="font-[Gilroy,sans-serif] text-[14px] uppercase tracking-wider text-[#e61a66]">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 font-[Gilroy,sans-serif] text-[32px] font-bold text-[#26262B] md:text-[40px]">
              Хотите стать нашим партнером?
            </h2>
            <p className="mb-8 max-w-[500px] font-[Gilroy,sans-serif] text-[18px] text-[#26262B] opacity-60">
              Свяжитесь с нами, и мы обсудим, как можем помочь вашему бизнесу
            </p>
            <a
              href="tel:+77013555355"
              className="rounded-xl bg-[#e61a66] px-10 py-4 font-[Gilroy,sans-serif] text-[16px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c91659]"
            >
              +7 (701) 355-53-55
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
