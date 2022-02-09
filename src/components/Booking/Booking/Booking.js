import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {packageId} = useParams();
    const [pack,setPack] = useState({});
    const {user} = useAuth();
     console.log(pack);

    useEffect(() => {
        fetch(`https://agile-wave-25295.herokuapp.com/tourpackages/${packageId}`)
        .then(res =>res.json())
        .then(data => setPack(data));
    },[]);

    return (
        <section class="booking py-5">
  <div class="container">
    <div class="row pt-4">
      <div class="col-12 col-md-6">
      <div class="card booking-card shadow-lg">
                    <img src={pack.img} class="card-img-top" alt="Hollywood Sign on The Hill"/>
                    <div class="card-body">
                        <h5 class="card-title">{pack.packageName}</h5>
                        <Rating className='test'
                        emptySymbol="far fa-star gray"
                        fullSymbol="far fa-star orange"
                        initialRating={pack.rating}
                        />
                        <p class="card-text my-3">{pack.description}</p>
                        <div>
                            <div className="time">
                                <h1 className='common-fonts text-center'>${pack.price}</h1>
                            </div> 
                        </div>
                    </div>
                </div>
      </div>

      <div class="col-12 col-md-6 pt-5 pt-md-0">
        <form className='shadow p-5'>
        <h3>Please Fill Up Form</h3>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder={user.displayName}/>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <input type="email" class="form-control" placeholder={user.email}/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <textarea class="form-control" name="message" rows="2" placeholder="Address"></textarea>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input type="number" class="form-control" placeholder="Phone Number"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
                <input type="submit" class="form-control btn regular-btn" value="Place Order"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    );
};

export default Booking;