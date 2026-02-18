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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ServicesTabs />
      <Advantages />
      <Vacancies />
      <Reviews />
      <Clients />
      <News />
      <Subscription />
      <Footer />
    </main>
  )
}
