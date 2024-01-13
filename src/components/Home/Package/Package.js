import React from 'react';
import './Package.css';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const {_id,packageName,description,price,rating,img} = props.pack
    return (
        <div class="col package">
                    <div class="card h-100">
                    <img src={img} class="card-img-top" alt="Hollywood Sign on The Hill"/>
                    <div class="card-body">
                        <h5 class="card-title">{packageName}</h5>
                        <Rating className='test'
                        emptySymbol="far fa-star gray"
                        fullSymbol="far fa-star orange"
                        initialRating={rating}
                        />
                        <p class="card-text my-3">{description}</p>
                        <div className="d-flex justify-content-between">
                            <div className="time d-flex">
                                <h1 className='common-fonts'>${price}</h1>
                            </div>
                            <Link className='text-decoration-none' to={`/booking/${_id}`}>
                                <a className="text-decoration-none common-btn"href="/">Book Now</a>
                            </Link>
                            
                        </div>
                    </div>
                    </div>
                </div>
    );
};

export default Package;