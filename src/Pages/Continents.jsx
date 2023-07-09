import React from "react";
import ContinentCard from "../components/ContinentCard";
import { useData } from "../contexts/DataContext";

const Continents = () => {
  const { continentsData } = useData();

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
      <div className="grid grid-cols-3 place-items-center">
        {continentsData?.continents?.map((continent, id) => (
          <ContinentCard data={continent} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Continents;
