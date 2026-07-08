import "./AboutClub.css";
import clubImage from "../assets/coding-club.jpg";

function AboutClub() {

    return (

        <section className="about">

            <div
                className="about-image"
                data-aos="fade-right"
            >

                <img src={clubImage} alt="Coding Club" />

            </div>

            <div
                className="about-content"
                data-aos="fade-left"
            >

                <h2>About Our Coding Club</h2>

                <p>

                    Our Coding Club is a community of students who are
                    passionate about technology, programming and innovation.

                </p>

                <p>

                    We organize coding competitions, workshops,
                    hackathons and collaborative projects to help students
                    improve their practical skills.

                </p>

                <ul>

                    <li>✔ Learn Modern Technologies</li>

                    <li>✔ Build Real Projects</li>

                    <li>✔ Team Collaboration</li>

                    <li>✔ Weekly Workshops</li>

                </ul>

                <button>

                    Join Our Club

                </button>

            </div>

        </section>

    )

}

export default AboutClub;

