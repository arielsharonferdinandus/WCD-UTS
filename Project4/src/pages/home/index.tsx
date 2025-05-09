import Hero from '../../components/layouts/home/hero'
import About from '../../components/layouts/home/about'
import Work from '../../components/layouts/home/work'
import Contact from '../../components/layouts/home/contact'
import Footer from '../../components/footer/footer'

export default function Homepage() {
  return (
    <>
      <main className='scroll-smooth overflow-y-hidden'>
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}