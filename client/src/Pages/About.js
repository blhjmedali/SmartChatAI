import React from "react";
import Footer from "../Component/Footer";
const { Configuration, OpenAIApi } = require("openai");

function About() {
    const style = {backgroundColor:"#053956", backgroundImage: "linear-gradient(135deg, #053956 10%, #80D0C7 95%)"}
    const style2 = {backgroundColor: "rgba(182,207,243,0.1)"}


    return(
        <div style={style} className='overflow-auto h-100'>
            <div style={style2} className='w-50 container size p-3 rounded shadow text-dark'>
                <h2 className='ps-3'>What Sets Us Apart</h2>
                <ol>
                    <li><strong>Advanced AI Technology:</strong> We leverage the latest advancements in natural language processing (NLP) and machine learning to create chatbots that can understand and interpret user intent accurately, ensuring more human-like conversations.</li>
                    <li><strong>Customized Solutions:</strong> We understand that every business is unique. That's why we offer tailor-made chatbot solutions designed to meet the specific requirements and goals of each client. Our team works closely with you to develop a chatbot that aligns with your brand voice and business objectives.</li>
                    <li><strong>Seamless Integration:</strong> Our chatbots seamlessly integrate with various messaging platforms, websites, and mobile apps. Whether it's live chat, social media, or your own website, our chatbot can be deployed across multiple channels, providing a consistent user experience.</li>
                    <li><strong>Data-Driven Insights:</strong> We provide comprehensive analytics and reporting tools that give you valuable insights into user interactions, trends, and performance metrics. This data enables you to make informed decisions and continuously optimize your chatbot's performance.</li>
                </ol>

                <h2 className='ps-3'>Our Team</h2>
                <p className='ps-3'>Behind SmartChatAI is a team of AI enthusiasts, developers, and customer experience experts. We are passionate about harnessing the power of AI to create intelligent chatbot solutions that make a positive impact on businesses and their customers. Our team is dedicated to delivering high-quality, reliable, and scalable chatbot services to help businesses thrive in the digital era.</p>

                <h2 className='ps-3'>Get in Touch</h2>
                <p className='ps-3' >Ready to explore the possibilities of AI-powered chatbots for your business? We would love to hear from you! Contact our team today to discuss your requirements, request a demo, or inquire about our services.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default About