import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Countdown from "./components/Countdown";
import About from "./components/About";
// import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="app-container">
      <div className="section1">
        <Navbar />
        <Landing />
        <Countdown />
      </div>

      <About />
      {/* <FAQ /> */}
      <Sponsors />
      <Contact />
    </div>
  );
};

export default App;