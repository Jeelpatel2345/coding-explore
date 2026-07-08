import "./WhyJoin.css";

import {
    FaLaptopCode,
    FaUsers,
    FaBullseye,
    FaRocket,
} from "react-icons/fa";

const cards = [
    {
        icon: <FaLaptopCode />,
        title: "Skill Development",
        front: "Learn modern programming skills.",
        back:
            "Master React, JavaScript, Python, Flutter and many more technologies through practical learning."
    },

    {
        icon: <FaUsers />,
        title: "Teamwork",
        front: "Collaborate with talented students.",
        back:
            "Develop communication, leadership and teamwork by building projects together."
    },

    {
        icon: <FaBullseye />,
        title: "Workshops",
        front: "Attend technical workshops.",
        back:
            "Participate in coding workshops, seminars, webinars and hackathons conducted regularly."
    },

    {
        icon: <FaRocket />,
        title: "Career Growth",
        front: "Prepare for your future.",
        back:
            "Build your portfolio, strengthen your resume and prepare for internships and placements."
    }
];

function WhyJoin() {
    return (
        <section className="why-join">

            <div className="section-heading">

                <span className="section-tag">
                    Why Join Us
                </span>

                <h2>
                    Why Students Choose Our
                    <span> Coding Club</span>
                </h2>

                <p>
                    We provide students with opportunities to learn,
                    collaborate, innovate and grow through practical
                    experience and community support.
                </p>

            </div>

            <div className="cards-grid">

                {cards.map((card, index) => (

                    <div
                        className="flip-card"
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 150}
                    >

                        <div className="flip-card-inner">

                            <div className="flip-card-front">

                                <div className="icon">

                                    {card.icon}

                                </div>

                                <h3>{card.title}</h3>

                                <p>{card.front}</p>

                            </div>

                            <div className="flip-card-back">

                                <h3>{card.title}</h3>

                                <p>{card.back}</p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default WhyJoin;