import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Replay from "./pages/Replay/Replay";
import { Routes, Route } from "react-router-dom";
// require('dotenv').config()

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/replay" element={<Replay />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>

  );
}

export default App;
