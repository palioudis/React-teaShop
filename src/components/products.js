import React from "react";
import About from "../img/tea1.jpg";
import About1 from "../img/tea4.png";
import blackTea from "../img/black.png";
import green from "../img/green.png";
import red from "../img/red.png";

const Products = () => {
  return (
    <div className="products">
      <div className="section-center clearfix">
        <div className="products-info">
          <div>
            <h3 class="section-subtitle">check out</h3>
            <h2 class="section-title1 ">our products</h2>
          </div>
          <p className="products-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, dolores.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corrupti, dolores.
          </p>
          <a href="products.html" className="main-btn">
            inventory
          </a>
        </div>

        <div className="products-inventory clearfix">
          <div class="product">
            <img src={blackTea} alt="tea" className="products-img" />
            <h3 className="products-title ">Black Dragon</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>

          <div class="product">
            <img src={green} alt="tea" className="products-img" />
            <h3 className="products-title">Matcha</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>

          <div class="product">
            <img src={red} alt="tea" className="products-img" />
            <h3 className="products-title">Rosy dream</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
