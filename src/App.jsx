import Portofolio from "./components/portofolio/Portofolio";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpenet, setMenueOpen] = useState;

  return (
    <>
      <div className="app">
        <Topbar menuOpenet={menuOpenet} setMenueOpen={setMenueOpen} />
        <div className="sections">
          <Intro />
          <Portofolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
