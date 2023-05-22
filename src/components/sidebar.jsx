import { navItems } from "./descriptions";
import closeIcon from "../assets/images/icons/close.png";

export default function SideBar () {
    const li = navItems.map(item => <li key={navItems.indexOf(item)}><a href="#">{item}</a></li>);
    function toogleSideBar () {
        setTimeout (function () {
            document.querySelector('.side-bar').classList.toggle('hidden-item');
            document.querySelector('.side-bar').classList.toggle('visible-item');
        }, 500);
    }
    return (
        <div className="side-bar" onMouseLeave={toogleSideBar}>
            <img src={closeIcon} alt="Close icon" onClick={toogleSideBar} />
            <ul>
                {li}
            </ul>
        </div>
    )
}

