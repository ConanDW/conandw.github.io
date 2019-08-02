import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Info from './components/info'
import Skills from './components/skills'
import Work from './components/work'

const App = () => (
  <div className="bg-light appDiv">
    <Header />
    <Info />
    <Work />
    <Skills />
    <Footer />
  </div>
)

export default App
