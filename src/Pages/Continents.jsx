import React, { useState } from "react";
import { data } from "../data/Data";
import Card from "../components/Card";

const Continents = () => {
  const [continentsData, setContinentsData] = useState(data);
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="h-32 flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome to Trip Advisor
        </h1>
        <h3 className="mb-2 text-xl font-bold tracking-tight text-sky-800 dark:text-sky-500">
          Top Continents for your next holiday
        </h3>
      </div>
      <div className="grid grid-cols-3">
        <Card />
      </div>
    </div>
  );
};

export default Continents;
