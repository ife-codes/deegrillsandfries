import React from 'react'
import Landing from './Landing'
import MenuSection from './MenuSection'
import Brief from './Brief'
import Services from './Services'
import Reviews from './Reviews'
import Popcorn from './Popcorn'

const Home = () => {
  return (
    <main>
      <Landing />
      <MenuSection />
      <Brief />
      <Popcorn />
      <Services />
      <Reviews />
    </main>
  )
}

export default Home