import React from "react";
import { MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <NavLink to={`/countries/${data?.name}`}>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
        <img class="rounded-t-lg" src={data?.image} alt="" className="h-80"/>

        <div class="py-1 px-5 w-full absolute bottom-0 backdrop-blur-sm">
          <p class="mb-3 font-xl text-white dark:text-white flex items-center gap-3">
            <MdLocationOn size={22} color="red" />
            {data?.name}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
