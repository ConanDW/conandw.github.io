import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Info from './components/info'
import Skills from './components/skills'
import Work from './components/work'
import Corner from './components/corner'

const App = () => (
  <div className="bg-light appDiv">
    <Header />
    <Info />
    <Corner />
    <Work />
    <Skills />
    <Footer />
  </div>
)

export default App
//


// WEBPACK FOOTER //
// ./src/App.js