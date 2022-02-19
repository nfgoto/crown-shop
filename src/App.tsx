import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.page";
import { FC } from "react";

const Hats: FC = () => <div>HATS</div>;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
