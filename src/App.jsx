//import './App.css';
import { Routes, Route } from 'react-router-dom';
import SessionsPage from './pages/SessionsPage';
import MySchedulePage from './pages/MySchedulePage';
import FormPage from './pages/FormPage';
import Navbar from './layout/Navbar';

function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<SessionsPage />} />
          <Route path="/my-schedule" element={<MySchedulePage />} />
          <Route path="/register" element={<FormPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
