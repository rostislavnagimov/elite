'use client'
import { useState } from "react"

export default function Advantages() {
  const [active, setActive] = useState(0)
  const values = {
    'Наша миссия': 'Обеспечивать эффективные решения найма, предоставления и администрирования персонала, в условиях безопасности сторон, содействуя развитию цивилизованных отношений участников рынка. Становиться самым профессиональным и удобным звеном нашего клиента. Строить работу компании так, чтобы она была образцом качества, технологичности, управляемости и обеспечивала нашим клиентам и кандидатам максимальную эффективность на пути к их успеху.', 
    'Наша цель': 'Объединить потенциал людей и бизнеса, создав условия их эффективного партнерства и привести к успеху, для процветания государства и повышения уровня жизни граждан.', 
    'Яркие решения': 'Наш фокус - оперативный поиск оптимальных решений для стабильного развития наших клиентов.', 
    'Надежность': 'Мы обеспечиваем максимальную открытость и гибкость в работе для того, чтобы быть надежным партнером.', 
    'Наши сотрудники': 'Наш главный актив - наши сотрудники, благодаря профессионализму и вниманию которых, Elite предоставляет услуги качественно и в срок.'
  }

  return (
    <section className="bg-elite-light-grey py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="max-w-[900px]">
          <h2 className="mb-4 text-[18px] font-[300] uppercase tracking-wider text-[#e61a66]">ЦЕННОСТИ КОМПАНИИ</h2>
          <h3 className="mb-8 text-[36px] font-[300] uppercase leading-tight text-elite-black lg:text-[45px]">
            Кадровый Холдинг Elite это
          </h3>
          <div className="mb-8 flex flex-wrap gap-4">
            {Object.keys(values).map((value, index) => (
              <span
                key={value}
                className={`cursor-pointer rounded-full px-5 py-2 text-sm uppercase tracking-wider ${index === active ? 'bg-[#e61a66] text-white' : 'outline outline-gray-100 bg-white text-elite-black-2'}`}
                onClick={() => setActive(index)}
              >
                {value}
              </span>
            ))}
          </div>
          <p className="text-[18px] leading-relaxed text-elite-black-2">
            {Object.values(values)[active]}
          </p>
        </div>
      </div>
    </section>
  )
}
