import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import What from './components/what';
import Performance from './components/performance';
import Why from './components/why';
import Who from './components/Who';
import Operation from './components/operation';
import Faqs from './components/Faqs';
import Consulting from './components/consulting';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App App2">
      <Header />
      
      {/* Container for HeroSection */}
      <div className="container-fx">
        <HeroSection />
      </div>

      {/* Container for About */}
      <div className="container-fx">
        <About />
      </div>

      {/* Blue Background Section */}
      <div className="blue-background">
        <div className="container-fx">
          <What />
          <Performance />
          <Operation />
          <Consulting />
        </div>
      </div>

      {/* No Padding Section */}
      <section className="no-padding">
        <Why />
      </section>

      {/* Other Sections */}
      <div className="container-fx">
        <Who />
        <Faqs />
        
        {/* Gắn id cho phần Form */}
        <div id="formSection">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
