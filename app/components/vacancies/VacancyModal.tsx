'use client'

import React, {useEffect, useState} from 'react'

interface VacancyModalProps {
  vacancy: {
    Название: string
    описание: string
  } | null
  onClose: () => void
}

export const VacancyModal: React.FC<VacancyModalProps> = ({vacancy, onClose}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    if (vacancy) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [vacancy])

  if (!isMounted || !vacancy) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-[800px] flex-col overflow-hidden rounded-lg bg-[#fbfbf9] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-gray-500 transition-colors hover:bg-white hover:text-gray-800"
          aria-label="Close modal"
        >
          <img src="/assets/icons/close.svg" alt="" className="h-6 w-6" />
        </button>

        <div className="no-scrollbar flex-1 overflow-y-auto p-6 md:p-10">
          <h2 className="mb-6 font-[Gilroy,sans-serif] text-2xl font-bold text-elite-black">{vacancy.Название}</h2>
          <div
            className="prose prose-sm md:prose-base max-w-none font-sans text-gray-700 [&>strong]:font-bold [&>strong]:text-black [&>ul>li]:mb-1 [&>ul]:list-disc [&>ul]:pl-5"
            dangerouslySetInnerHTML={{__html: vacancy.описание}}
          />
          <div className="mb-4 mt-8">
            <button
              onClick={() => {
                onClose()
                // Call existing global standard popup mechanism if needed, or redirect
                if (typeof window !== 'undefined' && (window as any).showPopup) {
                  ;(window as any).showPopup('callback')
                }
              }}
              className="w-auto rounded-[5px] bg-[#e61a66] px-8 py-4 font-sans text-base font-semibold text-white transition-all hover:bg-[#c91659] hover:shadow-md"
            >
              Отправить резюме
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
