import React, {useState} from "react";
import s from './pages/menu.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    let [change, setShange] = useState<boolean>(false)
    const arrowHover = () => {
        setShange(true)
    }
    const arrowUnHover = () => {
        setShange(false)
    }
    return (<div>
            <div className={s.arrow}>
                <img onMouseOver={arrowHover} onMouseOut={arrowUnHover} src={require('./img/arrow.png')}/>
            </div>
            <div onMouseOver={arrowHover} onMouseOut={arrowUnHover}  className={change?s.menu:s.menuHide}>
                <ul>
                    <li><NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink></li>
                    <li><NavLink to={PATH.Junior}>Junior</NavLink></li>
                    <li><NavLink to={PATH.SuperJunior}>Junior++</NavLink></li>
                </ul>
            </div>

        </div>

    );
}

export default Header;
