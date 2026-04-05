'use client'
import {useState} from 'react'

export default function Advantages() {
  const [active, setActive] = useState(0)
  const values = {
    'Наша миссия':
      'Обеспечивать эффективные решения найма, предоставления и администрирования персонала, в условиях безопасности сторон, содействуя развитию цивилизованных отношений участников рынка. Становиться самым профессиональным и удобным звеном нашего клиента. Строить работу компании так, чтобы она была образцом качества, технологичности, управляемости и обеспечивала нашим клиентам и кандидатам максимальную эффективность на пути к их успеху.',
    'Наша цель':
      'Объединить потенциал людей и бизнеса, создав условия их эффективного партнерства и привести к успеху, для процветания государства и повышения уровня жизни граждан.',
    'Яркие решения': 'Наш фокус - оперативный поиск оптимальных решений для стабильного развития наших клиентов.',
    Надежность: 'Мы обеспечиваем максимальную открытость и гибкость в работе для того, чтобы быть надежным партнером.',
    'Наши сотрудники':
      'Наш главный актив - наши сотрудники, благодаря профессионализму и вниманию которых, Elite предоставляет услуги качественно и в срок.'
  }

  const keys = Object.keys(values)
  const activeKey = keys[active]
  const activeValue = values[activeKey as keyof typeof values]

  return (
    <section className="bg-elite-light-grey py-20">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10 2xl:max-w-[1400px]">
        <div className="w-full">
          <h2 className="mb-4 text-[18px] font-[300] uppercase tracking-wider text-[#e61a66]">ЦЕННОСТИ КОМПАНИИ</h2>
          <h3 className="mb-12 text-[36px] font-[300] uppercase leading-tight text-elite-black lg:text-[45px]">
            Кадровый Холдинг Elite это
          </h3>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-20">
            {/* Links Column */}
            <div className="w-full flex-shrink-0 md:w-[220px] lg:w-[300px]">
              <div className="mb-5 h-[2px] w-[100px] bg-[#1e1e1e]"></div>
              <div className="flex flex-col gap-3">
                {keys.map((value, index) => (
                  <button
                    key={value}
                    onClick={() => setActive(index)}
                    className={`text-left text-[22px] font-semibold leading-[34px] transition-colors duration-300 ${
                      index === active ? 'text-black' : 'text-[#828282] hover:text-[#555]'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full max-w-[660px] flex-1">
              <div className="mb-9 h-[2px] w-full max-w-[630px] bg-[#828282]"></div>
              <div className="text-[20px] leading-[1.25] text-black">
                <b>{activeKey}</b>
                <br />
                {activeValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
