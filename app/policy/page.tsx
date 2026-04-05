import {Metadata} from 'next'
import JsonLd from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Elite',
  description:
    'Политика конфиденциальности кадрового агентства Elite. Узнайте, как мы обрабатываем персональные данные.',
  alternates: {
    canonical: 'https://elite.kz/policy'
  }
}

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={{'@context': 'https://schema.org', '@type': 'WebPage', name: 'Политика конфиденциальности'}} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-12 pt-[140px]">
        <div className="relative z-10 mx-auto max-w-[1240px]">
          <h1 className="mb-6 font-[Gilroy,sans-serif] text-[40px] font-bold uppercase leading-[1.1] text-[#26262B] md:text-[52px]">
            Политика конфиденциальности
          </h1>
          <p className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B] opacity-60">
            Последнее обновление: {new Date().toLocaleDateString('ru-KZ')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F5F5] px-5 py-16">
        <div className="mx-auto max-w-[900px]">
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="mb-4 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">1. Общие положения</h2>
              <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-80">
                Настоящая Политика конфиденциальности персональных данных (далее — Политика конфиденциальности)
                действует в отношении всей информации, которую кадровый холдинг «Elite», расположенный по адресу г.
                Алматы, ул. Кабанбай батыра, 109/51, может получить о Пользователе во время использования сайта,
                программ и продуктов сайта elite.kz.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mb-4 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">
                2. Какие данные мы собираем
              </h2>
              <ul className="space-y-3">
                {[
                  'ФИО, контактные данные (email, телефон)',
                  'Данные об активности на сайте (страницы, время посещения, IP-адрес)',
                  'Любые данные, которые вы добровольно предоставляете через формы на сайте',
                  'Резюме и сопроводительные письма при отклике на вакансии'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#e61a66]">•</span>
                    <span className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B] opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mb-4 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">
                3. Цели обработки данных
              </h2>
              <ul className="space-y-3">
                {[
                  'Предоставления услуг и обратной связи',
                  'Отправки информационных и рекламных рассылок (с вашего согласия)',
                  'Анализа и улучшения качества сервиса',
                  'Соблюдения требований законодательства Республики Казахстан'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#e61a66]">•</span>
                    <span className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B] opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mb-4 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">
                4. Правовые основания
              </h2>
              <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-80">
                Мы обрабатываем персональные данные на основании:
              </p>
              <ul className="mt-3 space-y-3">
                {[
                  'Согласия пользователя',
                  'Договорных отношений',
                  'Требований законодательства Республики Казахстан о персональных данных'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#e61a66]">•</span>
                    <span className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B] opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mb-4 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">
                5. Передача данных третьим лицам
              </h2>
              <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-80">
                Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением случаев:
              </p>
              <ul className="mt-3 space-y-3">
                {[
                  'Когда это необходимо для исполнения договора или требований закона',
                  'При использовании сторонних сервисов (email-рассылки, аналитика) с обеспечением конфиденциальности'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#e61a66]">•</span>
                    <span className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B] opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="mb-4 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">6. Ваши права</h2>
              <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-80">
                Вы имеете право:
              </p>
              <ul className="mt-3 space-y-3">
                {[
                  'Получить информацию о своих персональных данных, которые мы обрабатываем',
                  'Запросить исправление или удаление своих данных',
                  'Отозвать свое согласие на обработку данных в любой момент',
                  'Отказаться от получения рассылок'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#e61a66]">•</span>
                    <span className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B] opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="mb-4 font-[Gilroy,sans-serif] text-[24px] font-bold text-[#26262B]">7. Контакты</h2>
              <p className="font-[Gilroy,sans-serif] text-[16px] leading-relaxed text-[#26262B] opacity-80">
                По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами:
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B]">
                  <span className="opacity-60">Телефон:</span>{' '}
                  <a href="tel:+77013555355" className="text-[#e61a66] hover:underline">
                    +7 (701) 355-53-55
                  </a>
                </p>
                <p className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B]">
                  <span className="opacity-60">Email:</span>{' '}
                  <a href="mailto:sales@elite.kz" className="text-[#e61a66] hover:underline">
                    sales@elite.kz
                  </a>
                </p>
                <p className="font-[Gilroy,sans-serif] text-[16px] text-[#26262B]">
                  <span className="opacity-60">Адрес:</span> г. Алматы, ул. Кабанбай батыра, 109/51
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
