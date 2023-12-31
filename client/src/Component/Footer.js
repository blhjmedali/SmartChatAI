import React from "react";


const Footer = ()=>{
    return(
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="client/src#" className="nav-link px-2 text-muted" >Home</a></li>
                    <li className="nav-item"><a href="client/src#" className="nav-link px-2 text-muted">Privacy policy</a></li>
                    <li className="nav-item"><a href="client/src#" className="nav-link px-2 text-muted">Contact us</a></li>
                    <li className="nav-item"><a href="client/src#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted" >© 2023 WE SL3A </p>
            </footer>
        </div>
    )
}
export default Footer