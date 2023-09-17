import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutPage from "./components/about/Aboutpage";
import HomePage from "./components/home/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";
import configureStore from "./Redux/configureStore";
import { Provider as ReactReduxProvider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <ReactReduxProvider store={store}>
      <Router>
        <div className="container-fluid">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </ReactReduxProvider>
  );
}

export default App;
