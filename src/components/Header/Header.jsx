import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <div id="header">
                    <div id="topnav">
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/profile">Profile</NavLink></li>
                            <li><NavLink to="/dialogs">Dialogs</NavLink></li>
                            <li><NavLink to="/news">News</NavLink></li>
                            <li><NavLink to="/music">Music</NavLink></li>
                            <li><NavLink to="/settings">Settings</NavLink></li>
                            <li></li>
                        </ul>
                    </div>
                    <div id="welcome">
                        <h2> <a href="#">Welcome To My Social Network <span id="dot">Тумба</span>Юмба</a></h2>
                    </div>
                </div>
  )

}

export default Header;