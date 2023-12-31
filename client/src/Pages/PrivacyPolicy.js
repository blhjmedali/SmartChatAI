import React from "react";
import Footer from "../Component/Footer";

function PrivacyPolicy() {
    const style = {backgroundColor:"#053956", backgroundImage: "linear-gradient(90deg, #053956 00%, #80D0C7 95%)"}
    const style2 = {backgroundColor: "rgba(182,207,243,0.1)"}

    return(
        <div style={style} className='overflow-auto h-100'>
            <div style={style2} className='w-50 container size p-3 rounded shadow text-dark'>
                <h1>Privacy Policy</h1>

                <small className='float-start text-muted  '>Last Updated: 07/03/2023</small><br/>

                <p>Welcome to SmartChatAI! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and AI chatbot services powered by OpenAI API.</p>

                <h2>Information We Collect</h2>

                <p>We may collect personal information and non-personal information when you interact with our website or use our chatbot services. The types of information we may collect include:</p>

                <ul>
                    <li>Personal Information:
                        <ul>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Contact information</li>
                        </ul>
                    </li>
                    <li>Non-Personal Information:
                        <ul>
                            <li>Usage data and analytics</li>
                            <li>IP address</li>
                            <li>Cookies and similar technologies</li>
                        </ul>
                    </li>
                </ul>

                <h2>How We Use Your Information</h2>

                <p>We use the collected information to:</p>

                <ul>
                    <li>Provide and personalize our chatbot services</li>
                    <li>Improve our website and chatbot performance</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                    <li>Analyze usage patterns and trends</li>
                </ul>

                <h2>OpenAI API Usage</h2>

                <p>Our chatbot services utilize the OpenAI API to generate responses. When you interact with our chatbot, your input and the responses generated by the OpenAI API may be logged and stored for the purpose of improving the chatbot's performance and enhancing user experience. Please note that we do not share your personal information with OpenAI or any third parties without your consent.</p>

                <h2>Information Sharing and Disclosure</h2>

                <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>

                <ul>
                    <li>With your consent or as necessary to provide our services</li>
                    <li>With trusted third-party service providers who assist us in operating our website and services</li>
                    <li>In response to a legal request or to comply with applicable laws and regulations</li>
                    <li>To protect our rights, property, or safety, and that of our users</li>
                </ul>

                <h2>Security</h2>

                <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>

                <h2>Your Choices</h2>

                <p>You have the right to:</p>

                <ul>
                    <li>Update or correct your personal information</li>
                    <li>Opt-out of receiving promotional materials</li>
                    <li>Request access, deletion, or restriction of your personal information</li>
                </ul>

                <h2>Third-Party Links</h2>

                <p>Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies.</p>

                <h2>Children's Privacy</h2>

                <p>Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us to have it removed.</p>

                <h2>Changes to this Privacy Policy</h2>

                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.</p>

                <h2>Contact Us</h2>

                <p>If you have any questions or concerns about our Privacy Policy or practices, please contact us at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>

            </div>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy