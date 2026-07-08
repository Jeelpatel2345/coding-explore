import "./JoinTeam.css";

import {
    FaLaptopCode,
    FaUsers,
    FaTrophy,
    FaArrowRight,
} from "react-icons/fa";

function JoinTeam() {

    return (

        <section className="join-team">

            <div className="join-container">

                <span className="join-tag">

                    🚀 Join Our Coding Club

                </span>

                <h2>

                    Build.
                    Learn.
                    <span> Grow Together.</span>

                </h2>

                <p>

                    Become part of a passionate community where students
                    learn modern technologies, build innovative projects,
                    participate in hackathons, workshops and competitions,
                    and prepare for successful careers in technology.

                </p>

                <div className="join-features">

                    <div>

                        <FaLaptopCode />

                        <span>Real Projects</span>

                    </div>

                    <div>

                        <FaUsers />

                        <span>Team Collaboration</span>

                    </div>

                    <div>

                        <FaTrophy />

                        <span>Hackathons & Events</span>

                    </div>

                </div>

                <button className="join-now-btn">

                    Join Our Club

                    <FaArrowRight />

                </button>

            </div>

        </section>

    );

}

export default JoinTeam;