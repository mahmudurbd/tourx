import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManagePackage from '../ManagePackage/ManagePackage';


const ManagePackages = () => {
    const [packages,setPackages] = useState([]);
    console.log(packages);
    useEffect(() => {
        fetch('https://agile-wave-25295.herokuapp.com/tourpackages')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[])
    return (
        <div className='container'>
            <h2>Manage Packages</h2>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Package Name</th>
      <th scope="col">Price</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    {
        packages.map(pack => <ManagePackage
        key={pack._id}
        pack={pack}
        ></ManagePackage>)
    }
  </tbody>
</table>
        </div>
    );
};

export default ManagePackages;

/* 
    {packages.map(pack => <ManagePackage
            key={pack._id}
            pack={pack}
            ></ManagePackage>)}
*/