import "./index.css";

import Header from "../header";
import AboutUs from "../aboutUs";
import Priority from "../priority";
import Brands from "../brands";
import OurWork from "../ourWork";
import OurService from "../ourServices";
import Discussion from "../discussion";
import Contact from "../contact";
import Footer from "../footer";
//

import { useState } from "react";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <AboutUs />
      <Priority />
      <Brands />
      <OurWork />
      <OurService />
      <Discussion isSubmitted={isSubmitted} onSubmit={onSubmit} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
