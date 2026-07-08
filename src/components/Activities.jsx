import "./Activities.css";

import {
    FaLaptopCode,
    FaMobileAlt,
    FaRobot,
    FaCloud,
    FaShieldAlt,
    FaTrophy,
} from "react-icons/fa";

const activities = [
    {
        icon: <FaLaptopCode />,
        title: "Web Development",
        description:
            "Build responsive websites using HTML, CSS, JavaScript and React.",
    },
    {
        icon: <FaMobileAlt />,
        title: "App Development",
        description:
            "Create Android and cross-platform mobile applications using Flutter.",
    },
    {
        icon: <FaRobot />,
        title: "AI & Machine Learning",
        description:
            "Explore Artificial Intelligence, Machine Learning and Data Science.",
    },
    {
        icon: <FaCloud />,
        title: "Cloud Computing",
        description:
            "Learn cloud platforms, deployment and backend technologies.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Cyber Security",
        description:
            "Understand ethical hacking, networking and security fundamentals.",
    },
    {
        icon: <FaTrophy />,
        title: "Hackathons",
        description:
            "Participate in competitions and build innovative real-world solutions.",
    },
];

function Activities() {
    return (
        <section className="activities">

            <div className="activities-heading">

                <span className="section-tag">
                    Club Activities
                </span>

                <h2>
                    Learn Through
                    <span> Practical Experience</span>
                </h2>

                <p>
                    Our Coding Club provides hands-on opportunities to explore
                    modern technologies through workshops, projects, competitions
                    and collaborative learning.
                </p>

            </div>

            <div className="activities-grid">

                {activities.map((activity, index) => (
                    <div
                        className="activity-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="activity-icon">
                            {activity.icon}
                        </div>

                        <h3>{activity.title}</h3>

                        <p>{activity.description}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Activities;