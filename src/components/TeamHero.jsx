import "./TeamHero.css";
import teamHero from "../assets/team/team-hero.png";
import { FaUsers, FaArrowRight } from "react-icons/fa";

function TeamHero() {
    return (
        <section className="team-hero">

            <div className="team-hero-left" data-aos="fade-right">

                <span className="team-tag">
                    <FaUsers />
                    Our Team
                </span>

                <h1>
                    Meet The People
                    <span> Behind Our Coding Club</span>
                </h1>

                <p>
                    Our Coding Club is powered by passionate students,
                    creative developers, and dedicated mentors who work
                    together to organize events, build innovative projects,
                    and create opportunities for learning and collaboration.
                </p>

                <div className="team-buttons">

                    <button className="primary-btn">
                        Join Our Team
                        <FaArrowRight />
                    </button>

                    <button className="secondary-btn">
                        Contact Us
                    </button>

                </div>

            </div>

            <div className="team-hero-right" data-aos="fade-left">

                <img
                    src={teamHero}
                    alt="Coding Club Team"
                />

            </div>

        </section>
    );
}

export default TeamHero;