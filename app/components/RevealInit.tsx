'use client'

import {useEffect} from 'react'

export default function RevealInit() {
  useEffect(() => {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote')

    elements.forEach((el) => el.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {threshold: 0.15}
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
