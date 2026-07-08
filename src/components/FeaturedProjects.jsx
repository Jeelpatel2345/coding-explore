import "./FeaturedProjects.css";
import projects from "../data/projects";

import {
    FaGithub,
    FaExternalLinkAlt,
    FaStar,
} from "react-icons/fa";

function FeaturedProjects() {
    return (
        <section className="featured-projects">

            <div className="projects-header">

                <span className="section-tag">
                    🚀 Featured Projects
                </span>

                <h2>
                    Building
                    <span> Real World Solutions</span>
                </h2>

                <p>
                    Explore innovative software projects developed by our
                    Coding Club members using modern technologies and
                    real-world problem solving.
                </p>

            </div>

            <div className="projects-grid">

                {projects.map((project) => (

                    <div
                        className="project-card"
                        key={project.id}
                        data-aos="fade-up"
                    >

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            {project.featured && (

                                <span className="featured-badge">

                                    <FaStar />

                                    Featured

                                </span>

                            )}

                        </div>

                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <h4>{project.subtitle}</h4>

                            <p>{project.description}</p>

                            <div className="tech-stack">

                                {project.technologies.map((tech, index) => (

                                    <span
                                        key={index}
                                        className="tech-badge"
                                    >
                                        {tech}
                                    </span>

                                ))}

                            </div>
                            <div className="project-features">

                                <h5>Key Features</h5>

                                <ul>

                                    {project.features.map((feature, index) => (

                                        <li key={index}>

                                            ✅ {feature}

                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <div className="project-status">

                                <span>

                                    🟢 {project.status}

                                </span>

                            </div>

                            <div className="project-buttons">

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub />

                                    GitHub

                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaExternalLinkAlt />

                                    Demo

                                </a>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default FeaturedProjects;