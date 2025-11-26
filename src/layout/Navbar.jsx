import { Link, useLocation } from "react-router-dom";
import { useSchedule } from "../context/ScheduleContext";

const Navbar = () => {
    const location = useLocation();
    const { sessionIds } = useSchedule();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const sessionCount = sessionIds.length;

    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center font-medium text-gray-700">
                    Session Finder
                </div>
                <div className="flex space-x-6">
                    <Link to="/" className={`px-3 py-2 rounded-lg font-medium ${isActive('/') ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary hover:bg-purple-50'}`}
                    >Search</Link>
                    <Link to="/my-schedule" className={`px-3 py-2 rounded-lg font-medium ${isActive('/my-schedule') ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary hover:bg-purple-50'}`}
                    >My Shedule {`(${sessionCount})`}</Link>
                    <Link to="/register" className={`px-3 py-2 rounded-lg font-medium ${isActive('/register') ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary hover:bg-purple-50'}`}
                    >Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;