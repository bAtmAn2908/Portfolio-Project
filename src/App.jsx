import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero/>
      <section className='min-h-screen'></section>
      <section className='min-h-screen'></section><section className='min-h-screen'></section><section className='min-h-screen'></section>
    </div>
  )
}

export default App