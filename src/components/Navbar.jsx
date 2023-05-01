import React from "react";
import "../App.css"




function Navbar(){
    return(
        <div className='navbar'>
            <div className='header'>
                <h1><a href="/">BANHATRED</a></h1>
            </div>
            <div className='nav-list'>
                <ul>
                    <li><a href='/products'>PRODUCTS</a></li>
                    <li><a href='#'>LOG IN</a></li>
                    <li><a href='#'>SOCIALS</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;