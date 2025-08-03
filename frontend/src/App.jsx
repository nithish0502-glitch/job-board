import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import JobDetail from "./pages/JobDetail";
import './App.css'; // 👈 Import the CSS

function App() {
  return (
    <Router>
      <header className="app-header">
        <div className="header-container">
          <Link to="/" className="header-title">Job Board</Link>
          <Link to="/add" className="header-link">Post Job</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddJob />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
