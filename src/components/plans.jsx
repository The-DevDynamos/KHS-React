import React from "react";
import Logo from "../assets/images/logo.jpg";




function PlanningCard () {
    return (
        <div style={{display: "flex", flexWrap : "wrap", justifyContent: "center", alignItems : "center"}}>
            <div className="plan--card">
                <div className="plan--icons">
                    <img src={Logo} alt = "logo" />
                </div>
                <div className="card--header">
                    <h1 className="text-center">Home Owners Plans</h1>
                </div>
                <div className="plan--stats">
                    <p className="text-secondary text-center">Basic Plan<br/>Sh. 600 p.m</p>
                    <p className="text-dark text-center">Premium Plan<br/>Sh. 1500 p.m</p>
                    <p className="text-success text-center">Gold<br />Sh. 3000 p.m</p>
                </div>
                <div>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>


            <div className="plan--card">
                <div className="plan--icons">
                    <img src={Logo} alt = "logo" />
                </div>
                <div className="card--header">
                    <h1 className="text-center">Business Plans</h1>
                </div>
                <div className="plan--stats">
                    <p className="text-secondary text-center">Basic Plan<br/>Sh. 600 p.m</p>
                    <p className="text-dark text-center">Premium Plan<br/>Sh. 1500 p.m</p>
                    <p className="text-success text-center">Gold<br />Sh. 3000 p.m</p>
                </div>
                <div>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </div>
    )
}



export default function ChooseAPlan ()  {
    return (
        <div className="choose-a-plan">
            <h1 className="text-center text-light">Choose a plan today</h1>
            <div>
                <PlanningCard />
            </div>
        </div>
    )
}


