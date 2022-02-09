import React from 'react';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <section class="testimonial py-5">
            <div class="container">
                <h2>Kind words from our Customers</h2>
                <p>We offer most competitive rates and offers for wonderful and beautiful places.</p>
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-6">
                    <div className='border content'>
                        <p class="mb-4">"We love California Adventure, but it would have been nice if they had longer hours when we were there. Loved all of the Christmas food, Santa visit and the rides as always."</p>
                        <p>
                            <img alt="" height="50" class="rounded-circle" src="https://i.ibb.co/R35fpNj/testi-1.png"/>
                            <strong class="ml-3">Jason Santa</strong>
                        </p>
                    </div>
                </div>
                    <div class="col-md-6">
                    <div className='border content content-right'>
                        <p class="mb-4">"Catalina Island was a perfect day trip. Zip lining with two fun guides was definitely the highlight! Eating at a seaside restaurant was so relaxing afterward."</p>
                        <p>
                            <img alt="" height="50" class="rounded-circle" src="https://i.ibb.co/9HcvjFm/testi-2.png"/>
                            <strong class="ml-3">Marcus Webster</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Testimonial;