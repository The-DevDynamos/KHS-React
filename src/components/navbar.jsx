import React from "react";


export default function NavBar () {
    function toogleSideBar () {
        setTimeout (function () {
            document.querySelector('.side-bar').classList.toggle('visible-item');
            document.querySelector('.side-bar').classList.toggle('hidden-item');
        }, 500);
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand text-info" href="#"><b>KHW</b></a>
                <button className="navbar-toggler" onClick={toogleSideBar} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Our Plans</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" title="financial statements">Get a Quote</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}




