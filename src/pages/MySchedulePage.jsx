import { useEffect, useState } from "react";
import { SESSIONS } from "../api";
import { useSchedule } from "../context/ScheduleContext";
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
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">My Schedule</h2>
                <p className="text-sm">You have {userSessions.length} sessions scheduled.</p>
            </div>
            <div id="shedule-list" className="w-full flex flex-wrap gap-4">
                {userSessions.map(s =>
                    <SessionCard key={s.id} session={s} />
                )}
            </div>
        </section>
    )
};

export default MySchedulePage;