import React from "react";
import Footer from "./Footer";
import AdsComponent from "./AdsComponent";

function Container({children}) {
    const style = {backgroundColor:"#0b4769", backgroundImage: "linear-gradient(90deg, #0B4769FF 10%, #80D0C7 95%)"}
    const style2 = {backgroundColor: "rgba(182,207,243,0.1)"}
    return(
        <div style={style} className='overflow-auto h-100'>
            <div style={style2} className='col-md-9 col-s-10 container size p-3 rounded shadow text-dark'>
                {children}
            </div>
            <AdsComponent dataAdSlot='2927338949' />
            <Footer/>
        </div>
    )
}
export default Container