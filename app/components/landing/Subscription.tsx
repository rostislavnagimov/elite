'use client'
export default function Subscription() {
  return (
    <section className="bg-white" style={{paddingTop: '60px', paddingBottom: '75px'}}>
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Левая часть: заголовок + описание */}
          <div style={{maxWidth: '459px'}}>
            <h2
              className="uppercase text-[#1e1e1e]"
              style={{
                fontFamily: "'Gilroy', Arial, sans-serif",
                fontSize: '45px',
                fontWeight: 700,
                lineHeight: '50px',
                marginBottom: '16px'
              }}
            >
              БУДЬ В КУРСЕ
            </h2>
            <p
              className="text-[#000000]"
              style={{
                fontFamily: "'Gilroy', Arial, sans-serif",
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: '28px'
              }}
            >
              Подпишитесь на последние обновления и узнавайте о новинках и специальных предложениях первыми
            </p>
          </div>

          {/* Правая часть: форма */}
          <div style={{width: '460px', flexShrink: 0}}>
            <form className="flex flex-col gap-0">
              {/* Email инпут */}
              <div style={{marginBottom: '20px'}}>
                <input
                  type="email"
                  placeholder="Ваш e-mail"
                  required
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '60px',
                    padding: '0 15px',
                    fontFamily: "'Gilroy', Arial, sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#828282',
                    backgroundColor: '#f6f6f6',
                    border: '1px solid #ededed',
                    borderRadius: '5px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Кнопка */}
              <button
                type="submit"
                style={{
                  display: 'block',
                  width: '220px',
                  height: '60px',
                  fontFamily: "'Gilroy', Arial, sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#ffffff',
                  backgroundColor: '#e61a66',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  padding: '0 15px',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c91659')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e61a66')}
              >
                Подписаться
              </button>

              {/* Дисклеймер с иконкой */}
              <div className="mt-3 flex items-start gap-2" style={{maxWidth: '221px', marginLeft: 'auto'}}>
                <img
                  src="https://static.tildacdn.com/tild6132-3135-4736-b265-393730343233/email_2_1.svg"
                  alt=""
                  width={19}
                  height={19}
                  style={{flexShrink: 0, marginTop: '1px'}}
                />
                <p
                  className="text-[#828282]"
                  style={{
                    fontFamily: "'Gilroy', Arial, sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '18px'
                  }}
                >
                  Нажимая кнопку "Подписаться", вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
