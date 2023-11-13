import React, { useEffect, useState, createContext} from "react";
import SearchNavigation from "@/app/search/_components/SearchNavigation";
import { useSearchQuery } from "@/utils/useSearchQuery";
import PlaceCards from "@/app/search/_components/PlaceCards"


interface QuerySearchContextType {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setCounty: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  countryValue: string,
  countyValue: string,
  categoryValue: string
}

export const QuerySearchContext = createContext<QuerySearchContextType | undefined>(undefined);

const SearchResultsContainer = () => {
  const [countryValue, setCountry] = useState("");
  const [countyValue, setCounty] = useState("");
  const [categoryValue, setCategory] = useState("");



    const { filteredPlaces, loading, error, fetchSearchQuery } = useSearchQuery(
      countryValue,
      countyValue,
      categoryValue
    );
  
    useEffect(() => {
      fetchSearchQuery();
    }, [countryValue, countyValue, categoryValue]);



  return (
    <QuerySearchContext.Provider value={{ setCountry, setCounty, setCategory, countryValue, countyValue, categoryValue  }}>
         <SearchNavigation />
    <div className="pt-12">
      {/* {loading && <p>loading</p>}
      {error && <p>big fat error</p>} */}
      {filteredPlaces && <PlaceCards places={filteredPlaces} />}
      
    </div>
    </QuerySearchContext.Provider>
  );
};

export default SearchResultsContainer;
