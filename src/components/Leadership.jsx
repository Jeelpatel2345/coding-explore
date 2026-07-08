import "./Leadership.css";

import faculty1 from "../assets/team/faculty1.png";
import faculty2 from "../assets/team/faculty2.png";
import student1 from "../assets/team/student1.png";
import student2 from "../assets/team/student2.png";

import {
    FaEnvelope,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

const leaders = [
    {
        image: faculty1,
        name: "Prof. Ankit Vaghela",
        role: "Faculty Coordinator",
        description:
            "Guides the Coding Club, mentors projects and supports technical activities.",
        email: "amvaghela.it@vsitr.ac.in",
        linkedin: "https://www.linkedin.com/in/ankit-vaghela-9b08ab6a/"
    },
    {
        image: faculty2,
        name: "Prof. Devraj Riddhish",
        role: "Faculty Co-Coordinator",
        description:
            "Supports workshops, hackathons and club management.",
        email: "rmdevraj.ce@vsitr.ac.in",
        linkedin: "https://www.linkedin.com/in/devraj-riddhish-787452171/"
    },
    {
        image: student1,
        name: "Devang Patel",
        role: "Student Coordinator",
        description:
            "Leads the student committee and coordinates club events.",
        github: "https://github.com/patelxdevil",
        linkedin: "https://www.linkedin.com/in/devang-patel-a31b44284/"
    },
    {
        image: student2,
        name: "Jeel Vekariya",
        role: "Student Co-Coordinator",
        description:
            "Manages communication, projects and member engagement.",
        github: "https://github.com/Jeelpatel2345",
        linkedin: "https://www.linkedin.com/in/jeel-vekariya-9106b03a5/"
    }
];

function Leadership() {
    return (
        <section className="leadership">

            <div className="leadership-container">

                <span className="section-tag">
                    👨‍💼 Leadership Team
                </span>

                <h2>
                    Meet Our
                    <span> Leadership</span>
                </h2>

                <p>
                    The Coding Club is guided by dedicated faculty members and
                    passionate student leaders who inspire innovation,
                    collaboration and technical excellence.
                </p>

                <div className="leadership-grid">

                    {leaders.map((leader, index) => (

                        <div
                            className="leader-card"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            <img
                                src={leader.image}
                                alt={leader.name}
                            />

                            <h3>{leader.name}</h3>

                            <h4>{leader.role}</h4>

                            <p>{leader.description}</p>

                            <div className="leader-social">

                                {leader.email && (
                                    <a href={leader.email}>
                                        <FaEnvelope />
                                    </a>
                                )}

                                {leader.github && (
                                    <a href={leader.github}>
                                        <FaGithub />
                                    </a>
                                )}

                                <a href={leader.linkedin}>
                                    <FaLinkedin />
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Leadership;