import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Аутсорсинг персонала в Алматы | Кадровый аутсорсинг - Elite',
  description:
    'Услуги аутсорсинга рабочего персонала в Алматы. Аренда персонала, сотрудников для различных сфер. Заказать аутсорсинг персонала от компании Elite.',
  alternates: {
    canonical: 'https://elite.kz/outsourcing'
  }
}

export default function OutsourcingLayout({children}: {children: React.ReactNode}) {
  return children
}
