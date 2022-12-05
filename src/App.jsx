import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Singup from "./components/singup";
import SignIn from "./components/singin";
import { Route, Routes } from "react-router-dom";


//  npm i react-router-dom

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
            <Route path="sign-in" element={<SignIn />} />
          </Routes>
        </main>
        <Footer />
      </div> 

    
  );
}

export default App;