import './testimonials.scss';
import IITLogo from '../../assets/IITLogo.png';

export default function Testimonials() {

    const data = [

        {
            id: 1,
            icon: "./assets/MyPhoto.jpeg",
            title: "Team Student Relation IITM",
            describ: "Spearheaded a team of 17 coordinators working on the budget of INR 4 lakhs to conduct 15+ events across India.",
            describ1: " Strategized PR campaign targeting 300+ people & online milans targeting 700+ participants across the country",
            img: IITLogo,
            name: 'Strategist Saarang',
        },
        {
            id: 2,
            icon: "./assets/MyPhoto.jpeg",
            title: "Team Developer Operation IITM",
            describ: "Maintained the App for the Biggest Student run Cultural Fest in India Saarang which has the footfall of 70k+ (year-on-year)",
            describ1: "Supported in recreating the Saarang App with Javascript React native which has 10K+ subscribers in Google Play store.",
            img: IITLogo,
            name: 'Coordinator Saarang',
            featured: true
        },
        {
            id: 3,
            icon: "./assets/MyPhoto.jpeg",
            title: "Team Student Relation IITM",
            describ: "Collaborated with 6+ venues to conduct milans across Tamil Nadu that resulted in 125% (year-on-year) increase in participants.",
            describ1: "Organised Imprints 20 & brought in 150+ students from 25+ schools & increased the participation by 75% (year-on-year).",
            img: IITLogo,
            name: 'Coordinator Saarang'
        }
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Position of Responsiblity</h1>
            <div className="container">
                {data.map((p) => (
                    <div className={p.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src={p.img} className="user" alt=""/>
                        </div>
                        <div className="Center">
                            {p.describ}
                        </div>
                        <div className="Center">
                            {p.describ1}
                        </div>
                        <div className="Bottom">
                            <h3>{p.name}</h3>
                            <h4>{p.title}</h4>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
