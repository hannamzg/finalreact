import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Singup from "./components/singup";
import SignIn from "./components/singin";
import { Route, Routes } from "react-router-dom";
import SignUpBiz from "./components/singupBiz";
import MyCard from "./components/MyCard";
import ProtectedRoute from "./components/common/protectedRoute";
import CreateCard from "./components/createCard";
import DeleteCard from "./components/deleteCard";
import EditCard from "./components/editCard";

//npm  i react-toastify
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";

//  npm i react-router-dom




function App() {
  return (

      <div className="app d-flex flex-column min-vh-100">
        <header>
          <Navbar />
        </header>
        <ToastContainer/>
        <main className="flex-fill container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="sign-up" element={<Singup />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up-biz" element={<SignUpBiz />} />
            <Route
            path="/my-cards/edit/:id" element={ <ProtectedRoute onlyBiz> <EditCard /></ProtectedRoute> }/>
            <Route path="/my-cards/delete/:id"element={<ProtectedRoute onlyBiz> <DeleteCard /></ProtectedRoute> }/>
            <Route path="create-card" element={<ProtectedRoute onlyBiz> <CreateCard /></ProtectedRoute>} />
            <Route path="my-cards" element={<ProtectedRoute onlyBiz> <MyCard /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div> 

    
  );
}

export default App;