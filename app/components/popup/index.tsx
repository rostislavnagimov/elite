'use client'

import {useState} from 'react'

const CallbackPopup = ({onClose}: {onClose: () => void}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', {name, phone})
    onClose()
  }

  return (
    <div
      className="relative w-full max-w-[560px] rounded-lg bg-white p-10 shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-gray-400 transition-colors hover:text-gray-600"
        aria-label="Close"
      >
        <img src="/assets/icons/close.svg" alt="" className="h-5 w-5" />
      </button>

      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-elite-black md:text-3xl">Закажите обратный звонок</h2>
        <p className="text-sm text-gray-500">Менеджер перезвонит вам в ближайшее время</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-[60px] w-full rounded-[5px] border border-[#ededed] bg-[#f6f6f6] px-[15px] font-sans text-[15px] text-[#1e1e1e] outline-none transition-all focus:border-elite-pink/50"
          />
          <input
            type="tel"
            placeholder="+7(000) 000-00-00"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="h-[60px] w-full rounded-[5px] border border-[#ededed] bg-[#f6f6f6] px-[15px] font-sans text-[15px] text-[#1e1e1e] outline-none transition-all focus:border-elite-pink/50"
          />
        </div>

        <button
          type="submit"
          className="mt-2 h-[60px] w-full cursor-pointer rounded-[5px] bg-[#c91659] font-sans text-base font-semibold text-white transition-all hover:scale-105"
        >
          Заказать звонок
        </button>

        <p className="text-center text-[12px] leading-tight text-gray-400">
          Нажимая кнопку "Заказать звонок", вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </div>
  )
}

const VideoPopup = ({onClose, videoId}: {onClose: () => void; videoId?: string}) => {
  const id = videoId || 'dhFplZKHnHM'
  return (
    <div
      className="relative flex aspect-video w-full max-w-[900px] items-center justify-center bg-black shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <button
        onClick={onClose}
        className="absolute -top-10 right-0 z-10 flex h-8 w-8 items-center justify-center text-white transition-colors hover:text-gray-300 md:-right-10 md:top-0"
        aria-label="Close"
      >
        <img src="/assets/icons/close.svg" alt="" className="h-6 w-6" />
      </button>
    </div>
  )
}

export const Popup = ({type, data}: {type: string; data?: any}) => {
  const handleClose = () => {
    window.showPopup()
  }

  return (
    <section
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
      onClick={handleClose}
    >
      {type === 'video' ? (
        <VideoPopup onClose={handleClose} videoId={data?.videoId} />
      ) : (
        <CallbackPopup onClose={handleClose} />
      )}
    </section>
  )
}
