import React from "react";
import serviceRequest from "../assets/images/repair_process/request-service.png";
import { repairProcess } from "./descriptions";



function Process ({title, icon, decsription}) {
    return (
        <div className="process">
            <div className="process--header">
                <figcaption className="text-center">{title}</figcaption>
                <img src={icon} alt="repairs.jpeg" />
            </div>
            <div className="process--description">
                <p>{decsription}</p>
            </div>
        </div>
    )
}

export default function RepairProcess () {
    const process_cards = repairProcess.map(function (element) {
        const {key, title, icon, decsription} = element;
        return (
            <Process key={key} title={title} icon={icon} decsription={decsription} />
        );
    });
    return (
     <div className="repair-process-section">
        <h6><b>WHAT IS<br /><span className="text-danger">OUR REPAIR</span><br />PROCESS?</b></h6>
        <div className="processes">
            {process_cards}
        </div>
    </div>

    );
}