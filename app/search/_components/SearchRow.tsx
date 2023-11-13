import Image from "next/image";
import React from "react";

interface props {
  searchItems: string[];
  setState?: (state: string) => void;
  state?: string;
  withIcons?: boolean;
}

const SearchRow = ({ searchItems, setState, state, withIcons }: props) => {
  const handleClick = (item: string) => {
    if (setState) {
      setState(item);
    }
  };

  return (
    <div className="flex w-full py-3 justify-center bg-white">
      <ul className="flex gap-5 overflow-scroll">
        {searchItems.map((item, index) => (
          <li key={index} className="flex w-full">
            <button className="flex flex-col items-center whitespace-nowrap"
            onClick={() => handleClick(item)}>
              {withIcons && (
                <Image
                  src={`/icons/icon_${item}.png`}
                  width={50}
                  height={50}
                  alt="icon"
                ></Image>
              )}
              <p className={`${item === state ? "text-pink-500" : "text-base hover:text-pink-500 transition duration-300 ease-in-out"}`}>
                {item}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchRow;
