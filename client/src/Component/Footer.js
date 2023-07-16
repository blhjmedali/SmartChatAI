import React from "react";
import {Link} from "react-router-dom";


const Footer = ()=>{
    return(
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <Link to='/Chat' className="nav-link nav-item px-2 text-muted" >Home</Link>
                    <Link to='/Privacy_policy' className="nav-link nav-item px-2 text-muted">Privacy policy</Link>
                    <Link to='/contact' className="nav-link nav-item px-2 text-muted">Contact us</Link>
                    <Link to='/TermOfUse' className="nav-link nav-item px-2 text-muted">Term of use</Link>
                    <Link to='/About' className="nav-link nav-item px-2 text-muted">About</Link>
                </ul>
                <p className="text-center text-muted" >© 2023  </p>
            </footer>
        </div>
    )
}
export default Footer 