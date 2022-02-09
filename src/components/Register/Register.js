import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const {googleSignIn} = useAuth();
    return (
        <section class="register py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-center">
        <div class="p-5 shadow register-form">
        <form>
          <div class="row">
            <div class="col">
              <h1>Register</h1>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input type="text" class="form-control" placeholder="Name"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input type="email" class="form-control" placeholder="Email"/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input type="password" class="form-control mb-1" placeholder="Password"/>
              <p class="text-right"><Link className='text-dark' to="/login">Already have account?</Link></p>
            </div>
          </div>
          <div class="row my-4">
            <div class="col">
              <input type="submit" value='Register' class="btn btn-light"/>
            </div>
          </div>
        </form>
        OR
          <div class="row mt-2">
            <div class="col">
              <button onClick={googleSignIn} class="btn btn-light">Login with <i class="fab fa-google"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Register;