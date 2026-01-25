import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Info from './components/info';
import Skills from './components/skills';
import Work from './components/work';
import Corner from './components/corner';
import Projects from './components/projects';

const App = () => (
  <div className="bg-light appDiv">
    <Header />
    <Info />
    <Corner />
    <Projects />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
//


// WEBPACK FOOTER //
// ./src/App.js