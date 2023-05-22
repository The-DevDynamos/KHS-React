import React from "react";
import heroImage from "../assets/images/hero_images/realEstate.jpg";
import { Link } from "react-router-dom";


export default function Hero () {
    return (
        <div className="hero">
            <div className="hero--text container">
                <div>
                    <h1>Kenya <span className="text-info"><i><b>Home</b></i></span> Warranty</h1>
                    <p>KHS's home warranty plans protect major systems and appliances, saving you time and money. Covered issues are promptly addressed with fast and reliable service.</p>
                    <p>Customize your plan for the needed coverage and rest easy knowing your home is protected.</p>
                </div>
                <div className="btn-group">
                    <button className="btn btn-dark"><Link className ="link-white" to="/authuser">Get A Free Quote</Link></button>
                    <button className="btn btn-warning"><Link className ="link-white" to="/authuser">Submit A Claim</Link></button>
                    <button className="btn btn-success"><Link className ="link-white" to="/authuser">What is a home warranty?</Link></button>
                </div>
            </div>
            <div className="banner">
                <img src={heroImage} alt="Hero Image" className="hero--image" />
            </div>
        </div>
    )
}

