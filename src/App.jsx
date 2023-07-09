import { Route, Routes } from "react-router-dom";
import "./App.css";
import Continents from "./Pages/Continents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Continents />} />
    </Routes>
  );
}

export default App;
