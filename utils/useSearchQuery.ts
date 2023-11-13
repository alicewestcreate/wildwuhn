import { useEffect, useState } from "react";
import { filterNaturalFeatures } from "./filterNaturalFeatures";
import { fetchMultiplePlacesById } from "./fetchMultiplePlacesById";

export const useSearchQuery = (
  search: string,
  country: string,
  county: string
) => {
  const [filteredPlaces, setFilteredPlaces] = useState<PlaceByTextSearch[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSearchQuery = async () => {
    try {
      setLoading(true);
      const response = await fetch(`api/search/${search}/${country}/${county}`);
      const data = await response.json();
      const filteredTypes = filterNaturalFeatures(data);
      setFilteredPlaces(data);
      console.log("BY SEARCH", data);
      //   const placeById = await fetchMultiplePlacesById(data);
      //   console.log("BY PLACE", placeById);
    } catch (error) {
      setError(`Error in fetchSearchQuery useEffect:${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchQuery();
  }, [search, country, county]);

  return { filteredPlaces, loading, error, fetchSearchQuery };
};
