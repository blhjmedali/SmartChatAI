import React, {useEffect} from "react";
import Chat from "./Pages/Chat";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import About from "./Pages/About";
import TermOfUse from "./Pages/TermOfUse";
import AdsComponent from "./Component/AdsComponent";



function App() {

    useEffect(()=>{
        const userAgent = window.navigator.userAgent;
        const browserName = window.navigator.appName;
        const browserVersion = window.navigator.appVersion;
        const userLanguage = window.navigator.language;



    },[])


    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Chat/>} />
                    <Route path='/Chat' element={<Chat/>} />
                    <Route path='/contact' element={<ContactUs/>} />
                    <Route path='/Privacy_policy' element={<PrivacyPolicy/>} />
                    <Route path='/TermOfUse' element={<TermOfUse/>} />
                    <Route path='/About' element={<About/>} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}
export default App