import React from "react";
import "./Portofolio.css";
import img1 from "./image/1.png"
import img2 from "./image/2.png"
import img3 from "./image/3.png"
import img4 from "./image/4.png"
import img5 from "./image/5.png"
import img6 from "./image/6.png"

const data = [
    {
        id: 1,
        image: img1,
        title:'Web Design Kasir Online',
        link: 'https://www.figma.com/file/lkKH5NNjUcsZtW73bHFUiy/PWEB?node-id=0%3A1'
    },
    {
        id: 2,
        image: img2,
        title:'Web Design Kesehatan',
        link: 'https://www.figma.com/file/XICrEa46EcFKLKVDx7AVvY/KELOMPOK9'
    },
    {
        id: 3,
        image: img3,
        title:'Web Design Royal Qazeer',
        link: 'https://www.figma.com/file/nF1FYhbIhDcDoHMdiWpgES/Royal-Qazzer'
    },
    {
        id: 4,
        image: img4,
        title:'Web Design Laudry App',
        link: 'https://www.figma.com/file/Z6hOID8ymidZSFyNfN1anC/UTS'
    },
    {
        id: 5,
        image: img5,
        title:'Web Design RPS',
        link: 'https://www.figma.com/file/3r9bbQ6aBBgptDZKeN7DUx/Design-RPS'
    },
    {
        id: 6,
        image: img6,
        title:'Web Design Pet Shop',
        link: 'https://www.figma.com/file/Bq5HjAoHmIVbGk1MyXRojW/Pet-Shop'
    }
]

function Portofolio () {
    return (
        <>
        <section id="portofolio">
            <h5>My Recent Work</h5>
            <h2>Design Portofolio</h2>

            <div className="portofolio_container">
                {
                    data.map (({id, image, title, link}) => {
                        return (
                            <article key={id} className="portofolio_item">
                                <div className="portofolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <a href={link} className="btn" target="_blank">Figma</a>
                            </article>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}

export default Portofolio;