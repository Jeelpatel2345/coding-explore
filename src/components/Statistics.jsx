import "./Statistics.css";

import {
    FaUsers,
    FaLaptopCode,
    FaTrophy,
    FaBook,
} from "react-icons/fa";

function Statistics() {
    return (
        <section className="statistics">

            {/* Decorative Code Symbols */}

            <div className="code-symbol symbol1">&lt;/&gt;</div>

            <div className="code-symbol symbol2">{`{ }`}</div>

            <div className="code-symbol symbol3">( )</div>

            <div className="code-symbol symbol4">const</div>

            {/* Background Shapes */}
            <div className="bg-circle circle1"></div>
            <div className="bg-circle circle2"></div>
            <div className="bg-circle circle3"></div>

            <div className="statistics-container">

                <span
                    className="statistics-tag"
                    data-aos="fade-down"
                >
                    📊 Club Statistics
                </span>

                <h2
                    className="statistics-title"
                    data-aos="fade-up"
                >
                    Our Club In <span>Numbers</span>
                </h2>

                <p
                    className="statistics-description"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Our Coding Club continues to grow through innovation,
                    teamwork, coding competitions, workshops and real-world
                    project development.
                </p>

                <div className="statistics-grid">
                    <div
                        className="stat-card"
                        data-aos="zoom-in"
                    >
                        <div className="stat-icon">
                            <FaUsers />
                        </div>

                        <span className="stat-badge">
                            Growing
                        </span>

                        <h3>500+</h3>

                        <h4>Active Members</h4>

                        <p>
                            Passionate students learning and
                            building together.
                        </p>
                    </div>

                    <div
                        className="stat-card"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div className="stat-icon">
                            <FaLaptopCode />
                        </div>

                        <span className="stat-badge">
                            Latest
                        </span>

                        <h3>120+</h3>

                        <h4>Projects</h4>

                        <p>
                            Innovative software solutions
                            created by students.
                        </p>
                    </div>
                    <div
                        className="stat-card"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <div className="stat-icon">
                            <FaTrophy />
                        </div>

                        <span className="stat-badge">
                            Award
                        </span>

                        <h3>40+</h3>

                        <h4>Events</h4>

                        <p>
                            Coding competitions,
                            hackathons and seminars.
                        </p>
                    </div>

                    <div
                        className="stat-card"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <div className="stat-icon">
                            <FaBook />
                        </div>

                        <span className="stat-badge">
                            Monthly
                        </span>

                        <h3>25+</h3>

                        <h4>Workshops</h4>

                        <p>
                            Practical sessions to improve
                            technical skills.
                        </p>
                    </div>

                </div>

            </div>
            {/* Achievement Banner */}

            <div
                className="achievement-banner"
                data-aos="fade-up"
            >

                <div className="achievement-content">

                    <h2>
                        🚀 Become Part of Our Coding Journey
                    </h2>

                    <p>
                        Join a community of passionate developers,
                        innovators and problem solvers. Learn new
                        technologies, build real-world projects and
                        grow your technical career with us.
                    </p>

                    <div className="achievement-list">

                        <div className="achievement-item">
                            ✅ 500+ Active Members
                        </div>

                        <div className="achievement-item">
                            💻 120+ Live Projects
                        </div>

                        <div className="achievement-item">
                            🏆 40+ Technical Events
                        </div>

                        <div className="achievement-item">
                            📚 25+ Workshops
                        </div>

                    </div>

                    <button className="join-btn">
                        🚀 Join Our Club
                    </button>

                </div>

            </div>
            <div
                className="trusted-section"
                data-aos="fade-up"
            >

                ⭐ Trusted by 500+ Students Across Campus ⭐

            </div>
            <div className="section-divider"></div>

        </section>
    );
}

export default Statistics;