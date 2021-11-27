import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';

// Charts
import BarChart from './charts/bar';
import LineChart from './charts/line';
import BarLine from './charts/barLine';
import DoughnutChart from './charts/doughnut';

// Components
import Nav from './components/nav';
import Intro from './components/intro';
import Gap from './components/gap';

function App() {
  // AOS Settings
  useEffect(() => {
    AOS.init({
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

      <section data-aos="fade-up">
        <Gap />
      </section>

      <section style={{height: '100vh'}}>
        <div id="chartsDiv">
          <BarChart />
          <LineChart />
        </div>
        <div id="bothCountries">
          <BarLine />
        </div>
      </section>

      <section className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <DoughnutChart />
      </section>

    </div>
  );
}

export default App;
