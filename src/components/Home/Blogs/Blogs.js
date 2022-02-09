import React from 'react';
import './Blogs.css';
/* 
    
    
*/
const Blogs = () => {
    return (
        <div className='blogs py-5'>
        <div className='container'>
            <h2>Recent From Blogs</h2>
            <p className='blogs-text'>Find out our latest news, promotions and professional tips.</p>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
                <div class="col">
                    <div class="card h-100">
                    <img src="https://i.ibb.co/fCbWSNS/blog-1.jpg" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                    <div class="card-body">
                        <h5 class="card-title">Try Living A Simple Life</h5>
                        <div className="d-flex justify-content-between my-3">
                            <div className="time d-flex">
                                <i class="mt-1 far fa-calendar-check common-fonts"></i>
                                <span className='ms-2 common-fonts'>December 11, 2019</span>
                            </div>
                            <div className="category d-flex">
                                <i class="mt-1 far fa-folder-open common-fonts"></i>
                                <span className='ms-2 common-fonts'>Improve Life</span>
                            </div>
                        </div>
                        <p class="card-text my-3">
                        Many people want a simple life away from all the...
                        </p>
                        <div className="d-flex justify-content-between">
                            <div className="time d-flex">
                                <i class="mt-1 far fa-user"></i>
                                <span className='ms-2 common-fonts'>Jhon Doe</span>
                            </div>
                            <a class="common-btn" href="/">More</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://i.ibb.co/tKh0PBL/blog-2.jpg" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                    <div class="card-body">
                        <h5 class="card-title">Start Writing A Journal</h5>
                        <div className="d-flex justify-content-between my-3">
                            <div className="time d-flex">
                                <i class="mt-1 far fa-calendar-check common-fonts"></i>
                                <span className='ms-2 common-fonts'>January 11, 2020</span>
                            </div>
                            <div className="category d-flex">
                                <i class="mt-1 far fa-folder-open common-fonts"></i>
                                <span className='ms-2 common-fonts'>Improve Life</span>
                            </div>
                        </div>
                        <p class="card-text my-3">
                        An ideal time to write, comfortable digs, a great...
                        </p>
                        <div className="d-flex justify-content-between">
                            <div className="time d-flex">
                                <i class="mt-1 far fa-user"></i>
                                <span className='ms-2 common-fonts'>Yen Lee</span>
                            </div>
                            <a class="common-btn" href="/">More</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://i.ibb.co/0BvWrZ6/blog-3.jpg" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                    <div class="card-body">
                        <h5 class="card-title">Make Running A Part of Life</h5>
                        <div className="d-flex justify-content-between my-3">
                            <div className="time d-flex">
                                <i class="mt-1 far fa-calendar-check common-fonts"></i>
                                <span className='ms-2 common-fonts'>October 25, 2021</span>
                            </div>
                            <div className="category d-flex">
                                <i class="mt-1 far fa-folder-open common-fonts"></i>
                                <span className='ms-2 common-fonts'>Improve Life</span>
                            </div>
                        </div>
                        <p class="card-text my-3">
                        Running improves your cardiovascular strength, lowers bad cholesterol and...
                        </p>
                        <div className="d-flex justify-content-between">
                            <div className="time d-flex">
                                <i class="mt-1 far fa-user"></i>
                                <span className='ms-2 common-fonts'>Robert Smith</span>
                            </div>
                            <a class="common-btn" href="/">More</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    );
};

export default Blogs;