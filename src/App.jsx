import { Route, Routes } from "react-router-dom";
import "./App.css";
import Continents from "./Pages/Continents";
import Countries from "./Pages/Countries";
import Destination from "./Pages/Destination";
import LocationDetails from "./Pages/LocationDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Continents />} />
      <Route path="/countries/:name" element={<Countries />} />
      <Route path="/destinations/:name" element={<Destination />} />
      <Route path="/locationDeatils/:name" element={<LocationDetails />} />
    </Routes>
  );
}

export default App;
