import React from "react";
import Illustration from "../assets/images/logo.jpg";

export default function Whyus () { // why us
    return (
        <div className="why-us-section">
            <h2 >Why Kenya <span className="text-danger">Home</span> Warranty?</h2>
            <img src={Illustration} alt="illustration" width= {'100px'} />
            <ul>
                <li>Convenience - We are here to save you the hassle of dealing with expensive contractors who don’t care about the customers</li>
                <li>Expertise - We have industry expertise in resolving home system glitches that often cause homeowners pain</li>
                <li>Availability - We have partnered with a pool of reliable contractors who are ready to resolve system issues on the go</li>
                <li>Customer-centricity - We care about our customers, we want them to have peace of mind, save their time and financial resources</li>
            </ul>
        </div>
    );
}