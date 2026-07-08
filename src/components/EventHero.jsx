import "./EventHero.css";

import heroImage from "../assets/events/hero.png";

import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

function EventHero() {

    return (

        <section className="event-hero">

            <div className="event-overlay"></div>

            <div className="event-container">

                <div className="event-left">

                    <span className="event-tag">

                        🎉 Coding Club Events

                    </span>

                    <h1>

                        Learn,
                        <span> Build</span>
                        &
                        <span> Compete</span>

                    </h1>

                    <p>

                        Participate in exciting hackathons, technical workshops,
                        coding competitions, seminars and community events
                        designed to help you grow as a developer.

                    </p>

                    <div className="event-buttons">

                        <button className="primary-btn">

                            Register Now

                            <FaArrowRight />

                        </button>

                        <button className="secondary-btn">

                            <FaCalendarAlt />

                            Upcoming Events

                        </button>

                    </div>

                </div>

                <div className="event-right">

                    <img
                        src={heroImage}
                        alt="Coding Club Events"
                    />

                </div>

            </div>

        </section>

    );

}

export default EventHero;