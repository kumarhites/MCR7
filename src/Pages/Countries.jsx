import React from "react";
import { useData } from "../contexts/DataContext";
import { useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";

const Countries = () => {
  const { continentsData } = useData();
  const { name } = useParams();

  const continent = continentsData?.continents?.find(
    (continent) => continent.name === name
  );

  // const continentName = continent ? continent.name : "";
  // console.log(continentName);

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="h-32 flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Countries in {name} for your next holiday
        </h1>
      </div>
      <div className="grid grid-cols-3">
        {continent?.countries?.map((country, id) => (
          <CountryCard data={country} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
