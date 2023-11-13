import React from "react";
import {
  countiesInEngland,
  countiesInScotland,
  countiesInWales,
} from "@/const";

const DestinationBar = () => {
  const countries = ["England", "Scotland", "Wales"];

  const renderPlaceNames = (placeNames: string[]) => {
    return placeNames.map((place, i) => <li key={i} className="whitespace-nowrap">{place}</li>);
  };

  return (
    <div className="fixed flex w-full flex-col py-8 px-10 gap-3 bg-white">
      <ul className="flex w-screen justify-center">
        {countries.map((item, index) => (
          <li key={index} className="pl-4">
            {" "}
            <button>{item}</button>
          </li>
        ))}
      </ul>

      <ul className="flex flex-no-wrap text-sm overflow-scroll gap-4 ">
      {renderPlaceNames(countiesInEngland)}
      </ul>
    </div>
  );
};

export default DestinationBar;
