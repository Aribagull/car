import React from 'react'
import HeroSlider from '../Components/HeroSlider'
import ServicesSection from '../Components/ServicesSection'
import CarListing from '../Components/CarListing'
import MovingBanner from '../Components/MovingBanner'

export default function Home() {
  return (
    <div>
      <HeroSlider/>
      <CarListing/>
      <MovingBanner/>
      <ServicesSection/>

    </div>
  )
}
