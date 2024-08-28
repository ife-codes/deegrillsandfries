import React from 'react'
import Landing from './Landing'
import MenuSection from './MenuSection'
import Brief from './Brief'
import Services from './Services'
import Reviews from './Reviews'

const Home = () => {
  return (
    <main>
      <Landing />
      <MenuSection />
      <Brief />
      <Services />
      <Reviews />
    </main>
  )
}

export default Home