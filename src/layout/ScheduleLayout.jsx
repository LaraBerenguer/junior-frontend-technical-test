import { Outlet } from 'react-router-dom';
import { ScheduleProvider } from '../context/ScheduleContext';

const ScheduleLayout = () => {
    return (
        <ScheduleProvider>
            <Outlet />
        </ScheduleProvider>
    );
};

export default ScheduleLayout;