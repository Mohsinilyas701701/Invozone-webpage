import React from "react";
import "./Hero.css";
import hero from "../../Images/Hero.svg";
import HeroButton from "../Button/HeroButton/HeroButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-7 hero-left">
            <h1 className="title">
              Custom Web Application <span> Development Services</span>
            </h1>

            <p className="pt-3">
              We are a leading custom web app development company that creates
              scalable web applications, web portals and solutions with
              high-quality standards. Thoroughly examining your preferences,
              requirements and expectations, our community of 500+ developers
              deliver top-notch web app development services to enhance your
              customer retention and boost brand equity. Have a look at our
              customer-centric services:
            </p>

            <ul className="row p-0 ">
              <div className="row pb-2 ">
                <div className="col-1 ps-5">
                  <i class="fa-solid fa-circle"></i>
                </div>
                <div className="col-11 ps-4">
                  Latest web technologies like Elixir, ReactJS, Laravel, Node.js
                  and many more
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-1 ps-5">
                  <i class="fa-solid fa-circle"></i>
                </div>
                <div className="col-11 ps-4">
                  Wallet-friendly engagement models to hire developers
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-1 ps-5">
                  <i class="fa-solid fa-circle"></i>
                </div>
                <div className="col-11 ps-4">
                  Daily collaborative meetings with product managers
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-1 ps-5">
                  <i class="fa-solid fa-circle"></i>
                </div>
                <div className="col-11 ps-4">
                  Free full-cycle quality assurance
                </div>
              </div>
            </ul>

            <HeroButton />
          </div>
          <div className="col-5">
            <img src="Hero" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
