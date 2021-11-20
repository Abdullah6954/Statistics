import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import React, { useEffect } from 'react';

//charts
// import BarChart from './charts/bar';

function App() {
  // AOS Settings
  useEffect(() => {
    Aos.init({
      duration : 1000
    });
  }, []);
  
  // JSX
  return (
    <div>
      {/* <BarChart /> */}
    </div>
  );
}

export default App;
