import { useState } from "react";
import { Link } from "react-router-dom";
import "./Page.css";

function HomePage() {
    const [nama] = useState ("Eka");

    return (
        <>
            <section className="home" id="home">
                <div className="home-text">
                    <h1>Hai.. I'm <span>{nama}</span> Nur Pratiwi</h1>
                    <h3>I am a student from Amikom University Yogyakarta,
                        Majoring in a three years Diploma Informatics Engineering.
                    </h3>
                    <Link to={"/about"}>Contact Me</Link>
                </div>

                <div>
                    <img src="tiwi.jpg" className="image"/>
                </div>
            </section>  
        </>
    )
}

export default HomePage;