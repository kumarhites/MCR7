import React from "react";
import { MdLocationOn } from "react-icons/md";

const Card = () => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
      <img
        class="rounded-t-lg"
        src="https://i.postimg.cc/bvQdGJGV/asia.jpg"
        alt=""
      />

      <div class="py-1 px-5 w-full absolute bottom-0 backdrop-blur-sm">
        <p class="mb-3 font-xl text-white dark:text-white flex items-center gap-3">
          <MdLocationOn size={22} color="red" />
          Asia
        </p>
      </div>
    </div>
  );
};

export default Card;
