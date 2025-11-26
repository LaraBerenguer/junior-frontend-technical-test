import { useEffect, useState } from "react";
import { searchSessions } from "../api";
import SessionCard from "../components/SessionCard";

const SessionsPage = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [sessions, setSessions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ error: false, msg: "" });

    //initial sessions without search term
    useEffect(() => {
        const getSessions = async () => {
            try {
                setIsLoading(true);
                const response = await searchSessions("");
                setSessions(response);
            } catch (error) {
                setError({ error: true, msg: "Error loading session" });
            }
            setIsLoading(false);
        };
        getSessions();
    }, []);

    //with search term
    useEffect(() => {
        const handleSearch = async () => {
            try {
                setIsLoading(true);
                setError({ error: false, msg: "" });
                const response = await searchSessions(searchTerm);
                setSessions(response);
            } catch (error) {
                setError({ error: true, msg: "Error searching session" });
            }
            setIsLoading(false);
        };
        handleSearch();
    }, [searchTerm]);

    return (
        <section id="session-page">
            <div id="search-bar">
                <input
                    type="text"
                    placeholder="Search by title, track or speaker..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-gray-400"
                />
            </div>
            {error.error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error.msg}</div>}
            <div id="session-list">
                {isLoading ?
                    (<div className="text-gray-500">Loading...</div>)
                    :
                    (
                        sessions.map(s => (
                            <SessionCard key={s.id} session={s} />
                        ))
                    )
                }
                {!isLoading && sessions.length === 0 && searchTerm &&
                    <div className="text-gray-500">
                        No sessions found for {searchTerm}.
                    </div>
                }
            </div>
        </section>
    )
};

export default SessionsPage;