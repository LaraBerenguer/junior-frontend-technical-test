import { useSchedule } from "../context/ScheduleContext";

const SessionCard = ({ session }) => {

    const { add, sessionIds } = useSchedule();
    console.log("sesiones: ", sessionIds);

    return (
        <div id="session-card" className="border border-black rounded-lg p-4 max-w-80 my-2 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                {session.title}
                {session.track}
            </div>
            <div className="flex flex-col">
                {session.speaker}
                {session.startsAt}
                {session.duration}
            </div>
            <div className="session-button">
                <button className="bg-purple-900 text-white px-2 py-1 rounded-lg hover:bg-black hover:cursor-pointer" onClick={() => add(session.id)}>
                    Add to Schedule
                </button>
            </div>
        </div>
    )
};

export default SessionCard;