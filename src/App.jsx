import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Singup from "./components/singup";
//  npm i react-router-dom


import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<Singup />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;