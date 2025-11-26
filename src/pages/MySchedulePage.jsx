import { useEffect, useState } from "react";
import { SESSIONS } from "../api";
import { useSchedule } from "../context/ScheduleContext";
import { Link } from "react-router-dom";
import SessionCard from "../components/SessionCard";

const MySchedulePage = () => {
    const { sessionIds, remove } = useSchedule();
    const [userSessions, setUserSessions] = useState([]);

    useEffect(() => {
        const currentSessions = SESSIONS.filter(s =>
            sessionIds.includes(s.id)
        );
        setUserSessions(currentSessions);
    }, [sessionIds]);

    return (
        <section id="shedule-page">
            <h2>My Schedule</h2>
            <p className="text-sm">You have {userSessions.length} sessions scheduled.</p>
            <div id="shedule-list">
                {userSessions.map(s =>
                    <SessionCard key={s.id} session={s} />
                )}
            </div>
            <Link to={"/"}>Go to sessions</Link>
        </section>
    )
};

export default MySchedulePage;