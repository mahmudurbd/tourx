import React from 'react';
import './Facility.css';

const Facility = () => {
    return (
        <div className="facility">
            <div className="container">
                <h2>Why Choose TourX</h2>
                <p>We offer most competitive rates and offers for wonderful and beautiful places.</p>
                <div className="row text-center gap-2 py-4">
                    <div className="facility-content col-12 col-md-5 m-auto col-lg-3 border p-4 mt-4">
                        <div>
                            <img alt="" className="fdb-icon" src="https://i.ibb.co/Q8MSjnN/facility-1.png"/>
                            <h3>Unique Destinations</h3>
                            <p>Looking for a unique vacation destination? Then maybe a trip to one of the 10 most unique tourist destinations might.</p>
                        </div>
                    </div>
                    <div className="facility-content col-12 col-md-5 m-auto col-lg-3 border p-4 mt-4">
                        <div>
                            <img alt="" className="fdb-icon" src="https://i.ibb.co/4W69fH3/facility-2.png"/>
                            <h3>Worth of Money</h3>
                            <p>There is not a better way to spend money, than spending money on travel. This is what we say, others and science.</p>
                        </div>
                    </div>
                    <div className="facility-content col-12 col-md-5 m-auto col-lg-3 border p-4 mt-4">
                        <div>
                            <img alt="" className="fdb-icon" src="https://i.ibb.co/qkrNFDJ/facility-3.png"/>
                            <h3>Wonderful Places</h3>
                            <p>We do our best to have you a wonderful experience by taking you to the wonderful and amazing places around the world.</p>
                        </div>
                    </div>
                    <div className="facility-content col-12 col-md-5 m-auto col-lg-3 border mt-4 p-4">
                        <div>
                            <img alt="" className="fdb-icon" src="https://i.ibb.co/GJH9n3v/facility-4.png"/>
                            <h3>Quick Booking</h3>
                            <p>Booking is quick as clicking a few clicks. We take care of all transportation and accommodations during your journey.</p>
                        </div>
                    </div>
                    <div className="facility-content col-12 col-md-5 m-auto col-lg-3 border mt-4 p-3">
                        <div>
                            <img alt="" className="fdb-icon" src="https://i.ibb.co/tXn1FPV/facility-5.png"/>
                            <h3>Backup Team</h3>
                            <p>We have staff to assist in all stages of your holiday, from travel advice & best prices to ground handling & support during your holiday.</p>
                        </div>
                    </div>
                    <div className="facility-content col-12 col-md-5 m-auto col-lg-3 border mt-4 p-4">
                        <div>
                            <img alt="" className="fdb-icon" src="https://i.ibb.co/zQFd94y/facility-6.png"/>
                            <h3>Exciting Travel</h3>
                            <p>We have a wide range of expertise and knowledge in our services. So we can provide you an exciting travel experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;