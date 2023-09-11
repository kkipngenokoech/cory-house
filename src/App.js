import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutPage from "./components/about/Aboutpage";
import HomePage from "./components/home/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
