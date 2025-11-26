//import './App.css';
import { Routes, Route } from 'react-router-dom';
import SessionsPage from './pages/SessionsPage';
import MySchedulePage from './pages/MySchedulePage';
import FormPage from './pages/FormPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<SessionsPage />} />
      <Route path="/my-schedule" element={<MySchedulePage />} />
      <Route path="/register" element={<FormPage />} />
    </Routes>
  )
}

export default App;
