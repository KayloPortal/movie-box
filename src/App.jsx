import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import Movies from "./components/Pages/Movies/Movies";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import Header from "./components/Global/Header/Header";
import Footer from "./components/Global/Footer/Footer";
import TokenProvider from "./contexts/tokenContext"

function App() {
  return (
    <TokenProvider>
      <Routes>
        <Route path="/" element={<Header displaySearch={true} bgTransparent={true} />} />
        <Route path="/:page" element={<Header displaySearch={false} bgTransparent={false} />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </TokenProvider>
  );
}

export default App;
