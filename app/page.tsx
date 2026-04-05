'use client'
import Header from './components/landing/Header'
import Hero from './components/landing/Hero'
import About from './components/landing/About'
import ServicesTabs from './components/landing/ServicesTabs'
import Advantages from './components/landing/Advantages'
import Vacancies from './components/landing/Vacancies'
import Clients from './components/landing/Clients'
import Reviews from './components/landing/Reviews'
import News from './components/landing/News'
import Subscription from './components/landing/Subscription'
import Footer from './components/landing/Footer'
import JsonLd from './components/JsonLd'

import {useState, useEffect} from 'react'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Кадровое агентство Elite',
  image: '/assets/images/Elite_logo_1_1.svg',
  '@id': 'https://elite.kz',
  url: 'https://elite.kz',
  telephone: '+7-727-272-22-22',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Желтоксан, 115',
    addressLocality: 'Алматы',
    postalCode: '050000',
    addressCountry: 'KZ'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.2551,
    longitude: 76.9419
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4">
      <JsonLd data={localBusinessSchema} />
      <Hero />
      <About />
      <ServicesTabs />
      <Advantages />
      <Vacancies />
      <Reviews />
      <News />
      <Clients />
      <Subscription />
    </main>
  )
}
