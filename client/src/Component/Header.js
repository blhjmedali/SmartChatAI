import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";






const Header = () =>{

    function Handler() {

    }

    return(
        <nav className='navbar navbar-expand-md sticky-top  navbar-dark bg-dark  navbar-fixed'>
            <div className="m-2">
                <Link to='/' className="navbar-brand p-3" >SmartChatAI</Link>
            </div>

            <div className=" navbar-collapse justify-content-between ">

                <div className='navbar-nav '>
                    <Link onClick= {Handler} to='/Chat' className='nav-link '>Chat  </Link>
                    <Link onClick= {Handler} to='/contact'  className='nav-link ' >Contact</Link>
                    <Link onClick= {Handler} to='/Privacy_policy' className='nav-link '>Privacy policy</Link>
                    <Link onClick= {Handler} to='/About' className='nav-link ' >About</Link>
                </div>

            </div>





        </nav>
    )
}



export default Header
