import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Заказать услуги аутстаффинга персонала в Алматы | Elite',
  description:
    'Оптимизация бизнеса путем аутстаффинга компании. Предоставление персонала для быстрого решения задач. 25 лет на рынке рекрутинга.',
  alternates: {
    canonical: 'https://elite.kz/outstaffing'
  }
}

export default function OutstaffingLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
