import React, { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ManagePackage = (props) => {
    const {price,packageName,pack,_id} = props.pack
     const [packages,setPackages] = useState([]);
     useEffect(() => {
         fetch(`https://tourx-server.vercel.app/`)
         .then(res => res.json())
         .then(data => setPackages(data))
     },[])

     console.log(packages);
   const handleDelete = id => {
       const url = `https://tourx-server.vercel.app/${id}`
       fetch(url,{
           method: 'DELETE'
       })
       .then(res => res.json())
       .then(data => {
           console.log(data);
           if(data.deletedCount){
            Swal.fire(
                'Deleted!',
                'You have deleted packages successfully!',
                'success'
              );
            const remaining = packages.filter(pack => pack._id != id);
            setPackages(remaining);
            window.location.reload();
           }
           
       })
   }
    return (
        <tr>
      <td scope="row">{packageName}</td>
      <td>{price}</td>
      <td><button className='btn btn-danger' onClick={() => handleDelete(_id)}>Delete</button></td>
    </tr>
    );
};

export default ManagePackage;