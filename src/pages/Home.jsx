import Hero from "../components/Hero";
import AboutClub from "../components/AboutClub";
import WhyJoin from "../components/WhyJoin";
import Activities from "../components/Activities";
import Statistics from "../components/Statistics";
import FeaturedProjects from "../components/FeaturedProjects";

function Home() {
    return (
        <>
            <Hero />

            <AboutClub />

            <WhyJoin />

            <Activities />

            <Statistics />

            <FeaturedProjects />
        </>
    );
}

export default Home;