import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import AdvisoryCommittee from "./pages/advisory";
import Sponsors from "./pages/sponsors";
import Agenda from "./pages/agenda";
import Events from "./pages/events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisory" element={<AdvisoryCommittee />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
