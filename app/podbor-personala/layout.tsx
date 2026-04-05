import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Подбор персонала в Алматы | Кадровое агентство Elite',
  description:
    'Специалисты по подбору персонала в Казахстане сделают отбор сотрудников для работ и выполнения задач любой сложности. Кадровое агентство Elite имеет более 25 лет опыта.',
  alternates: {
    canonical: 'https://elite.kz/podbor-personala'
  }
}

export default function RecruitmentLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
