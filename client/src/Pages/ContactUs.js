import React from "react";
import Container from "../Component/Container";
import {toast, ToastContainer} from "react-toastify";
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
    const onSubmit = (e) => {
        e.preventDefault()


        const { name, email, message } = e.target.elements
        let conFom = { user_name: name.value,  user_email: email.value, message: message.value,}
        emailjs.send("service_npadg59","template_24kmgj2",conFom,"S7gkplJkgCgDKXqUv").then((result) => {
            toast.success("Send successfully")
            window.location.reload();
        }, (error) => {
            console.log(error.text);
        })
    }
    return(
        <Container>
            <div className="container mt-5 col-md-10">
                <h2 className="mb-3">Contact us</h2>
                <form id={'form'}  onSubmit={onSubmit}>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="user_name" id="name" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"> Email</label>
                        <input className="form-control"  type="email" name="user_email" id="email" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" required />
                    </div>

                    <button className="btn btn-danger" type="submit">send</button>

                </form>

                <ToastContainer />
            </div>
        </Container>
    )
}

export default ContactUs