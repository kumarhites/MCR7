import React from "react";
import { useData } from "../contexts/DataContext";
import { useParams } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";

const Destination = () => {
  const { continentsData } = useData();
  const { name } = useParams();
  
  const country = continentsData?.continents
    ?.flatMap((continent) => continent.countries)
    ?.find((country) => country.name === "India");

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="h-32 flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Top Destinations in {name} for your next holiday
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {country?.destinations?.map((destination, id) => (
          <DestinationCard data={destination} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Destination;
