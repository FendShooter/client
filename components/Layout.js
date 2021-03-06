import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
export default function Layout({ children }) {
  return (
    <div className="h- mx-auto flex flex-col">
      <Header />
      <Hero />
      <section className="flex-auto">{children}</section>

      <Footer />
    </div>
  )
}
