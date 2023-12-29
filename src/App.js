import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import React from 'react';

const App = () => {
  return (
    <div className="app-container">
      <div className="section1">
        <Navbar />
        <Landing />
      </div>
      <div className="section2">
        <Sponsors />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
};

export default App;