import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import React, { useEffect } from 'react';

// Charts
import BarChart from './charts/bar';

// Components
import Nav from './components/nav';
import Intro from './components/intro';
import LineChart from './charts/line';
import BarLine from './charts/barLine';
import Gap from './components/gap';

function App() {
  // AOS Settings
  useEffect(() => {
    Aos.init({
      duration : 1000
    });
  }, []);
  
  // JSX
  return (
    <div id="App">
      <section>
        <Nav />
        <Intro />
      </section>
      <section>
        <Gap />
      </section>
      <section>
        <div id="chartsDiv">
          <BarChart />
          <LineChart />
        </div>
        <div id="bothCountries">
          <BarLine />
        </div>
      </section>
    </div>
  );
}

export default App;
