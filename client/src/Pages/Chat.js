import React, {useState} from "react";
import axios from "axios";
import Message from "../Component/Message";
import Footer from "../Component/Footer";
import AdsComponent from "../Component/AdsComponent";

function Chat() {
    const [inputValue , setInputValue]  = useState('')
    const [msg , setMsg]= useState([])

    const SERVER_URL ='https://fair-teal-moose-veil.cyclic.app//open'
    const LOCAL_SERVER_URL = "http://localhost:3030/open"

    const handleInputChange =  (event) => {
        setInputValue(event.target.value)
    };

    async function submit(e) {
        e.preventDefault()

        if(inputValue!=''){
            setMsg((prev)=>[...prev,{type : "msg" , value : inputValue}])
            setInputValue( '')

            axios.post( SERVER_URL,{"question":inputValue}).then((res)=>{
                setMsg((prev)=>[...prev,{type : "rep" , value : res.data}])
                console.log(`Q : ${inputValue}    | A : ${res.data}`)
            })
                .then((res)=>{
                console.log(res)
            })
                .catch((e)=>console.log(e.value))
        }
    }
    const style1 = {backgroundColor: "rgba(13,110,252,0.5)"}
//            <AdsComponent dataAdSlot='2927338949' />
    const style = {backgroundColor:"#053956", backgroundImage: "linear-gradient(135deg, #053956 20%, #80D0C7 95%)"}
    return(
        <div style={style} className=' vh-100 p-3 ' >
            <div style={style1} className='  bg-dark col-md-5 col-s-10    container rounded p-3 h-100 '>
                <h2 className='text-primary'>Chat Bot</h2>

                <div className='bg-dark border border-secondary rounded overflow-auto modal-dialog-scrollable container pt-2  h-75'>
                    <small className='text-light-emphasis d-flex justify-content-center pb-3'>Ask whatever you want !</small>

                    {
                        msg.map((value, index)=>{
                            return <Message key={index} type ={value.type} data={value.value}/>
                        })
                    }


                </div>
                <form  onSubmit={submit} >
                    <h5 className='text-primary ' >Message</h5>
                    <div  className='d-flex justify-content-around '>
                        <input className='input-group-text col-9'
                               placeholder={'Send a message '} value={inputValue} onChange={handleInputChange}  />
                        <button className='btn btn-primary col-2' onClick={submit}>Send</button>

                    </div>
                </form>


            </div>
            <AdsComponent dataAdSlot='2927338949' />
        </div>
    )
}


export default Chat