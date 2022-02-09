import React from 'react';
import Blogs from './Blogs/Blogs';
import ExploreTours from './ExploreTours/ExploreTours';
import Facility from './Facility/Facility';
import Packages from './Packages/Packages';
import Slide from './Slide/Slide';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Slide></Slide>
            <Facility></Facility>
            <Packages></Packages>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <ExploreTours></ExploreTours>
        </div>
    );
};

export default Home;