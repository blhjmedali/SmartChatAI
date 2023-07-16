import React from "react";
function Message(prop) {
    const style1 = {backgroundColor: "rgba(13,110,252,0.2)"}
    const style2 = {backgroundColor: "rgba(182,207,243,0.2)"}
    let myStyle ,float
    if(prop.type==='msg'){
        float= 'float-end'
        myStyle = style1
    }else {
        float = 'float-start'
        myStyle = style2
    }
    return(
        <div style={myStyle} className={`rounded pt-2 ps-3 mt-2 w-75 d-flex align-content-center flex-wrap m-1 ${float}`}>
            <p className=' text-white'>{prop.data}</p>
        </div>
    )
}
export default Message