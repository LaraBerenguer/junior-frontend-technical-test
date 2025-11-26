import { useSchedule } from "../context/ScheduleContext";

const SessionCard = ({ session }) => {

    const { add, remove, sessionIds } = useSchedule();
    const isScheduled = sessionIds.includes(session.id);
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
                <button className={`${isScheduled ? 'bg-red-600' : 'bg-purple-900'} text-white px-2 py-1 rounded-lg hover:bg-black hover:cursor-pointer`}
                    onClick={isScheduled ? () => remove(session.id) : () => add(session.id)}
                >
                    {isScheduled ? "Remove from schedule" : "Add to Schedule"}
                </button>
            </div>
        </div>
    )
};

export default SessionCard;