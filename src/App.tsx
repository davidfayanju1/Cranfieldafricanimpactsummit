import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import AdvisoryCommittee from "./pages/advisory";
import Sponsors from "./pages/sponsors";
import Agenda from "./pages/agenda";
import Events from "./pages/events";
import AdvisoryDetails from "./pages/detailsPage/advisory-details";
import ScrollToTop from "./components/common/ScrollToTop";
import TeamMemberDetails from "./pages/detailsPage/team-member-details";
import Blogs from "./pages/blogs";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisory" element={<AdvisoryCommittee />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/advisory-details/:id" element={<AdvisoryDetails />} />
        <Route
          path="/team-member-details/:id"
          element={<TeamMemberDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
