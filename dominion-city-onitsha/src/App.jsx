import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sermons from "./Pages/Sermons";
import Events from "./Pages/Events";
import Give from "./Pages/Give";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
        <Link to="/sermons" style={{ marginRight: "10px" }}>Sermons</Link>
        <Link to="/events" style={{ marginRight: "10px" }}>Events</Link>
        <Link to="/give" style={{ marginRight: "10px" }}>Give</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
