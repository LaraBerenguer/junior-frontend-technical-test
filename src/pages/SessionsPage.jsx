import { Link } from "react-router-dom";
import { SESSIONS } from "../api";
import SessionCard from "../components/SessionCard";

const SessionsPage = () => {
    return (
        <section id="session-page">
            <div id="search-bar">
                Aqui va el searchbar
            </div>
            <div id="session-list">
                {SESSIONS.map(s =>
                    <SessionCard key={s.id} session={s} />
                )}
            </div>
            <Link to={"/my-schedule"}>Go to my schedule</Link>
        </section>
    )
};

export default SessionsPage;