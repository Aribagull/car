import React from 'react'
import HeroSlider from '../Components/HeroSlider'
import ServicesSection from '../Components/ServicesSection'
import CarListing from '../Components/CarListing'
import AboutSection from '../Components/AboutSection'
import MovingBanner from '../Components/MovingBanner'
import ImageGallery from '../Components/ImageGallery'

export default function Home() {
  return (
    <div>
      <HeroSlider/>
      <CarListing/>
      <MovingBanner/>
      <ServicesSection/>
      <ImageGallery/>
      <AboutSection/>

    </div>
  )
}
