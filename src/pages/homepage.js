import React from "react";
import "../style.css";

import Header from "../components/header";
import Skill from "../components/skills";
import AboutUs from "../components/aboutUs";
import Products from "../components/products";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <section>
      <Header />
      <Skill />
      <AboutUs />
      <Products />
      <Contact />
      <Footer />
    </section>
  );
};
export default Homepage;
