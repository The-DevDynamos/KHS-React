import React from "react";
import { footerContent } from "./descriptions";

function FooterSection ({title, items}) {
    const item = items.map(function (element) {
        return (
            <li key={items.indexOf(element)}>{element}</li>
        )
    });
    return (
        <div className="footer--section">
            <h3>{title}</h3>
            <ul>
                {item}
            </ul>
        </div>
    )
}

export default function Footer () {
    const footerItem = footerContent.map(function (element) {
        const {key, title, items} = element;
        return <FooterSection key={key} title={title} items={items} />
    })
    return (
        <footer>
            {footerItem}
        </footer>
    );
}