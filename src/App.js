import { Route, Routes } from "react-router-dom";
import SiginIn from "./SiginIn&Signup/SiginIn";
import SignUp from "./SiginIn&Signup/SignUp";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/signin" element={<SiginIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Hero />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
      ;
    </div>
  );
}
