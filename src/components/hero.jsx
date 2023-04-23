import React from "react";
import heroImage from "../assets/images/hero_images/realEstate.jpg";


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
                    <button className="btn btn-dark">Get A Free Quote</button>
                    <button className="btn btn-warning">Submit A Claim</button>
                    <button className="btn btn-success">What is a home warranty?</button>
                </div>
            </div>
            <div className="banner">
                <img src={heroImage} alt="Hero Image" className="hero--image" />
            </div>
        </div>
    )
}

