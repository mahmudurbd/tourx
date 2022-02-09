import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';
const Packages = () => {
    const [packages,setPackages] = useState([]);

    useEffect(() => {
        fetch('https://agile-wave-25295.herokuapp.com/tourpackages')
        .then(res =>res.json())
        .then(data => setPackages(data))
    },[])
    return (
    <div className='packages py-5'>
        <div className='container'>
            <h2>Featured Packages</h2>
            <p className='packages-text'>Our Featured Packages allow you to get away from routine, spend time with family and friends.</p>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                packages.map(pack => <Package
                key={pack.id}
                pack={pack}
                ></Package>)
            } 
            </div>
        </div>
    </div>    
    );
};

export default Packages;
