import React from 'react'
import { NavLink } from 'react-router-dom';


const Menu = (props) => {

    return (

        <div id="menu">
            
            <ul>
                <li><NavLink to={"/dialogs/" + props.path}>{props.name}</NavLink></li>
            </ul>
        </div>

    )

}
export default Menu;
