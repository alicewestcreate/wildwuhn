import Image from "next/image";
import { usePathname } from "next/navigation";


interface props {
  handleSearchClick: (item: string, active: string) => void;
  setActiveButton: (item: string) => void;
  activeButton: string | null;
}

const SearchBar = ({
  handleSearchClick,
  setActiveButton,
  activeButton,
}: props) => {
  const searchItemsArray = [
    "woods",
    "watersports",
    "lakes",
    "forest",
    "AONB",
    "national_park",
    "wild_swimming",
    "nature_reserve",
    "mountains",
  ];

  const getTitle = (category: string) => {
    return category.split("_").join(" ");
  };

  return (
    <div className="fixed flex w-full justify-center py-8 mt-24 bg-white">
      <ul className="flex gap-5">
        {searchItemsArray.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            <button
              className={`border-2 ${activeButton === `search${index}` ? ` border-slate-950` : `border-red-700`}'`}
              onClick={() => handleSearchClick(item, `search${index}`)}
            >
              <Image
                src={`/icons/icon_${item}.png`}
                width={50}
                height={50}
                alt="icon"
              ></Image>

              <p
              className={`text-xs border-2 ${activeButton === `search${index}` ? ` border-slate-950` : `border-red-700`}'`}>{getTitle(item)}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
