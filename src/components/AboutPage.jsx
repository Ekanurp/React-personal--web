import {MdOutlineEmail} from "react-icons/md";
import {CiFacebook} from "react-icons/ci";
import {BsWhatsapp} from "react-icons/bs"
import React, { useRef } from 'react';
import emailjs from "emailjs-com"

function AboutPage () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yydc02c', 'template_nb42kon', form.current, 'exY9VoZv3UztBupUT');

        e.target.reset();
    };

    return (
        <>
            <section className="about" id="about">
                <div className="main">
                    <div className="about-desc">
                    <article>
                        <h2>About Me</h2>
                        <h4>Mahasiswa<span> Amikom</span></h4>
                        <p>
                        Saya merupakan mahasiswa semester V jurusan D3 Teknik Informatika di Universitas Amikom Yogyakarta. 
                        Saya memiliki ketertarikan denganpada dunia kreatif seperti UI/UX Design dan Graphic Design. 
                        Selain itu saya juga tertarik pada Web Development. Secara pribadi Saya adalah seseorang yang mudah bersosialisasi 
                        dan mudah beradaptasi dengan lingkungan baru.
                        </p>
                    </article>
                    <section className="buthrefn">
                        <a href={"https://www.instagram.com/kkptw_/?hl=id"}>Instagram</a>
                        <a href={"https://github.com/Ekanurp"}>Github</a>
                        <a href={"https://www.linkedin.com/in/eka-nurp-72b8931ba"}>Linkedin</a>
                    </section>
                    </div>
                </div>
            </section>
            <section id="contact">
                <h5 className="sub-judul">Get In Touch</h5>
                <h2 className="judul">Contact Me</h2>

                <div className="container contact_container">
                    <div className="contact_options">
                        <article className="contact_option">
                            <MdOutlineEmail className="contact_option-icon"/>
                            <h4>Email</h4>
                            <h5>nurpratiwie21@gmail.com</h5>
                            <a href="mailto:nurpratiwie21@gmail.com" target="_blank">Send a message</a>
                        </article>
                        <article className="contact_option">
                            <CiFacebook className="contact_option-icon"/>
                            <h4>Facebook</h4>
                            <h5>Ncuk Cukimei</h5>
                            <a href="https://www.facebook.com/profile.php?id=100083040423267" target="_blank">Send a message</a>
                        </article>
                        <article className="contact_option">
                            <BsWhatsapp className="contact_option-icon"/>
                            <h4>WhatsApp</h4>
                            <h5>+6285559652384</h5>
                            <a href="https://wa.me/085559652384" target="_blank">Send a message</a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AboutPage;