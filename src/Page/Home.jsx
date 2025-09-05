import React from 'react'
import HeroSlider from '../Components/HeroSlider'
import ServicesSection from '../Components/ServicesSection'
import CarListing from '../Components/CarListing'
import ContactForm from '../Components/Contact'
import AboutSection from '../Components/AboutSection'
import Testimonials from '../Components/Testimonials'

export default function Home() {
  return (
    <div>
      <HeroSlider/>
      <ServicesSection/>
      <CarListing/>
      <Testimonials/>
      <AboutSection/>
      <ContactForm/>

    </div>
  )
}
