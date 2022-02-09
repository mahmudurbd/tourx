import React from 'react';
import './Slide.css';
import img from '../../../images/slider-1.jpg';
import img2 from '../../../images/slider-2.jpg';
import img3 from '../../../images/slider-3.jpg';
const Slide = () => {
    return (
           <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={img} className="d-block w-100" alt="" />
                <div className="carousel-caption">
                  <p>White Sand Beaches of</p>
                  <h1>Magical Maldives</h1>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={img2} className="d-block w-100" alt="" />
                <div className="carousel-caption">
                  <p>Destination of Distinction</p>
                  <h1>Fabulous Dubai</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="" />
                <div className="carousel-caption">
                  <p>Opera House in</p>
                  <h1>Modern Sydney</h1>  
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div> 
    );
};

export default Slide;