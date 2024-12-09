import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookApp from '../../assets/facebook-icon.png';
import Insta from '../../assets/instagram.png';
import Linkdin from '../../assets/linkdin.png';
import Github from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_7082dq6',
                'template_vk6w3it',
                form.current,
                'dIinMesAkgirD5kX_'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again later.');
                }
            );
    };

    return (
        <section id="contactPages">
            <div id="clients">
                <h1 className="contactPageTitle">My Client</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include:
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Facebook} alt="Facebook" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunity:</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your name" name="your_name" required />
                    <input type="email" className="email" placeholder="Your email" name="your_email" required />
                    <textarea className="msg" name="message" rows="5" placeholder="Your message" required></textarea>
                    <button type="submit" className="submitBtn">Submit</button>
                </form>
                <div className="links">
                    <a href="https://www.facebook.com/profile.php?id=100028540513015" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookApp} alt="Facebook" className="link" />
                    </a>
                    <a href="https://www.instagram.com/sumitjaiswal_0001/" target="_blank" rel="noopener noreferrer">
                        <img src={Insta} alt="Instagram" className="link" />
                    </a>
                    <a href="in/sumit-kumar-jaiswal-533a81270
" target="_blank" rel="noopener noreferrer">
                        <img src={Linkdin} alt="LinkedIn" className="link" />
                    </a>
                    <a href="https://github.com/Sumitjaiswal0001" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="GitHub" className="link" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
