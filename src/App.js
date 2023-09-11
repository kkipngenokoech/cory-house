import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutPage from "./components/about/Aboutpage";
import HomePage from "./components/home/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
