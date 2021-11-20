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
        <BarChart />
      </section>
    </div>
  );
}

export default App;
