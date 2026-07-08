import "./Hero.css";
import heroImage from "../assets/hero-image.png";


function Hero() {
    return (
        <section className="hero">

            {/* Background Decorations */}
            <div className="hero-circle hero-circle-1"></div>
            <div className="hero-circle hero-circle-2"></div>

            {/* Left Side */}
            <div className="hero-left" data-aos="fade-right">

                <span className="hero-tag">
                    🚀 Welcome to Coding Club
                </span>

                <h1>
                    Learn.
                    <span> Build.</span>
                    <br />
                    Innovate Together.
                </h1>

                <p>
                    Join a vibrant community of passionate developers where students
                    collaborate on innovative projects, participate in hackathons,
                    attend technical workshops, and develop the skills needed for
                    successful careers in technology.
                </p>

                <div className="hero-buttons">


                    <button className="secondary-btn">
                        Learn More
                    </button>

                </div>


            </div>

            {/* Right Side */}
            <div className="hero-right" data-aos="zoom-in">

                <img
                    src={heroImage}
                    alt="Coding Club"
                />

            </div>

            {/* Scroll Indicator */}
            <div className="scroll-down">

                <span>Scroll Down</span>



            </div>

        </section>
    );
}

export default Hero;