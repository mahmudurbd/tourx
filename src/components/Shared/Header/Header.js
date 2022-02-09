import React from 'react';
import phone from '../../../images/phone.png';
import logo from '../../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const{user,logOut} = useAuth();
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="/"><img src={logo} alt="" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="menu navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/tour">Tours</Link>
                </li>
                { user.email &&
                <li class="nav-item dropdown dashboard">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="user" href="/"><span><small>{user.displayName}</small></span></a></li>
            <li><Link class="nav-link dropdown-item" to="/addpackage">Add Package</Link></li>
            <li><Link class="dropdown-item" to="/">My Order</Link></li>
            <li><Link class="dropdown-item" to="/managepackages">Manage Packages</Link></li>
          </ul>
        </li>}
        
                
                { !user.email ?
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
                  : <button onClick={logOut} class="log-out-btn">Logout</button>
                }
              </ul>
              <div>
                  <img className='ms-3 mb-2' src={phone} alt="" />
                  <a className='text-decoration-none fs-4 ms-2 text-dark fw-light' href="tel:890 234 5678"><span style={{fontFamily: 'Rubik',fontWeight: 400}}>890 234 5678</span></a>
              </div>
            </div>
          </div>
      </nav>
    );
};

export default Header;