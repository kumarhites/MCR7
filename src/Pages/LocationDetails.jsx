import React from "react";
import { useData } from "../contexts/DataContext";
import { NavLink, useParams } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const LocationDetails = () => {
  const { continentsData } = useData();
  const { name } = useParams();

  const findDestination = (name) => {
    // Assuming you have access to the `continentsData` object

    const destination = continentsData?.continents
      ?.flatMap((continent) => continent.countries)
      ?.flatMap((country) => country.destinations)
      ?.find((destination) => destination.name === name);

    return destination || null; // Return destination if found, otherwise null
  };

  const destination = findDestination(name);

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="h-32 flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {destination?.name}
        </h1>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <img src={destination?.image} alt="" className="h-96 object-cover" />
        </div>
        <div className="flex flex-col space-y-3 leading-2">
          <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="text-2xl text-sky-500">Description:</span>{" "}
            {destination?.description}
          </p>
          <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="text-2xl text-sky-500">Rating:</span>{" "}
            {destination?.ratings}
          </p>
          <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="text-2xl text-sky-500">Reviews:</span>{" "}
            {destination?.reviews}
          </p>
          <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="text-2xl text-sky-500">Location:</span>{" "}
            {destination?.location}
          </p>
          <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="text-2xl text-sky-500">Opening Hours:</span>{" "}
            {destination?.openingHours}
          </p>
          <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="text-2xl text-sky-500">Ticket Price:</span>{" "}
            {destination?.ticketPrice}
          </p>
          <NavLink
            to={destination?.website}
            className={`mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-3`}
          >
            Website <FiArrowRight color="red"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
