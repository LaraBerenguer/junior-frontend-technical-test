import { useSchedule } from "../context/ScheduleContext";
import { formatIsoToReadable } from "../utils/isoToReadable";

const SessionCard = ({ session }) => {

    const { add, remove, sessionIds } = useSchedule();
    const isScheduled = sessionIds.includes(session.id);

    return (
        <div id="session-card" className="border border-gray-800 rounded-lg p-4 w-80 my-2 flex flex-col gap-2 shadow-sm">
            <div className="flex justify-between gap-1">
                <h3 className="font-semibold text-gray-900">{session.title}</h3>
                <span className="text-sm text-primary self-start py-1 px-2 rounded-lg font-medium bg-gray-100">{session.track}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm text-gray-600">
                <p><span className="font-medium">Speaker:</span> {session.speaker}</p>
                <p><span className="font-medium">Date:</span> {formatIsoToReadable(session.startsAt)}</p>
                <p><span className="font-medium">Duration:</span> {session.durationMins} mins</p>
            </div>
            <div className="session-button">
                <button
                    style={{ backgroundColor: isScheduled ? '#dc2626' : 'var(--color-primary)' }}
                    className="text-white px-4 py-2 rounded-lg hover:bg-black hover:cursor-pointer transition-color"
                    onClick={isScheduled ? () => remove(session.id) : () => add(session.id)}
                >
                    {isScheduled ? "Remove from schedule" : "Add to Schedule"}
                </button>
            </div>
        </div>
    )
};

export default SessionCard;