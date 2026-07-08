import TeamHero from "../components/TeamHero";
import Leadership from "../components/Leadership";
import Members from "../components/Members";
import JoinTeam from "../components/JoinTeam";

function Team() {
    return (
        <>
            {/* Hero Section */}
            <TeamHero />

            {/* Team Section (Coming Next) */}
            <section className="team-container">

            </section>

            {/* Leadership Section */}
            <Leadership />

            {/* Members Section */}
            <Members />

            {/* Join Team Section */}   
            <JoinTeam />


        </>
    );
}

export default Team;