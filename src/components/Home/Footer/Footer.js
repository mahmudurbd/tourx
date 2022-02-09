import React from 'react';
import './Footer.css';
import logo from '../../../images/white-loog.png';
const Footer = () => {
    return (
<div class="py-4 footer">
  <footer
          class="text-center text-lg-start"
          >
    <div class="container p-4 pb-0">
      
      <section class="">
       
        <div class="row">
          
          <div class="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
            <img src={logo} alt="" />
            <p className='mt-3'>
            TourX is a fast growing Tours & Travel Planner in Dhaka Bangladesh.We don’t just offer tours and travel services but also provide reliable and hassle free travel planning facilities.
            </p>
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

         
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href='/' class="text-color">MDBootstrap</a>
            </p>
            <p>
              <a href='/' class="text-color">MDWordPress</a>
            </p>
            <p>
              <a href='/' class="text-color">BrandFlow</a>
            </p>
            <p>
              <a href='/' class="text-color">Bootstrap Angular</a>
            </p>
          </div>
          

          <hr class="w-100 clearfix d-md-none" />

          
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a href='/' class="text-color">Your Account</a>
            </p>
            <p>
              <a href='/' class="text-color">Become an Affiliate</a>
            </p>
            <p>
              <a href='/' class="text-color">Shipping Rates</a>
            </p>
            <p>
              <a href='/' class="text-color">Help</a>
            </p>
          </div>

          
          <hr class="w-100 clearfix d-md-none" />

         
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
         
        </div>
        
      </section>
      

      <hr class="my-3"/>

      
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            
            <div class="p-3">
            © Copyright 2022
               <a class="ms-1 text-white text-decoration-none" href="/"
                 >TourX</a
                > - All Right Reserved
            </div>
            
          </div>
          

        
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end social-link">
            
            <a href='/'
               class="btn btn-outline-light btn-floating m-1"
               
               role="button"
               ><i class="fab fa-facebook-f"></i
              ></a>

           
            <a href='/'
               class="btn btn-outline-light btn-floating m-1"
               
               role="button"
               ><i class="fab fa-twitter"></i
              ></a>

           
            <a href='/'
               class="btn btn-outline-light btn-floating m-1"
               
               role="button"
               ><i class="fab fa-google"></i
              ></a>

           
            <a href='/'
               class="btn btn-outline-light btn-floating m-1"
               
               role="button"
               ><i class="fab fa-instagram"></i
              ></a>
          </div>
          
        </div>
      </section>
      
    </div>
    
  </footer>
  
</div>
    );
};

export default Footer;