import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

// Charts
import BarChart from "./charts/bar";
import LineChart from "./charts/line";
import BarLine from "./charts/barLine";
import DoughnutChart from "./charts/doughnut";
import Food from "./charts/food";

// Components
import Nav from "./components/nav";
import Intro from "./components/intro";
import Gap from "./components/gap";
import Calories from "./components/calories";
import Diseases from "./components/diseases";

function App() {
  // AOS Settings
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // JSX
  return (
    <div id="App">
      <section id="home">
        <Nav />
        <Intro />
      </section>

      <section>
        <Gap />
      </section>

      <section id="countries" style={{ height: "100vh" }}>
        <div id="chartsDiv">
          <BarChart />
          <LineChart />
        </div>
        <div id="bothCountries">
          <BarLine />
        </div>
      </section>

      <section
        id="world"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <DoughnutChart />
      </section>

      <section id="fastFood">
        <Calories />
      </section>

      <section className="vh-100 w-100">
        <Food />
      </section>

      <section id="diseases">
        <Diseases />
      </section>
    </div>
  );
}

export default App;
