import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Отправить резюме | Elite',
  description: 'Отправьте свое резюме в кадровое агентство Elite. Мы поможем найти работу мечты.',
  alternates: {
    canonical: 'https://elite.kz/sendresume'
  }
}

export default function SendResumeLayout({children}: {children: React.ReactNode}) {
  return children
}
