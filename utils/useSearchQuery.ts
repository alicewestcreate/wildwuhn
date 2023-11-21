import { useEffect, useState } from "react";
import { filterNaturalFeatures } from "./filterNaturalFeatures";
import { fetchMultiplePlacesById } from "./fetchMultiplePlacesById";
import { buildSearchQueryString } from "./buildSearchQueryString";

type FilterObject = {
  [key: string]: string | undefined;
};

export const useSearchQuery = ({ country, county, category }: FilterObject) => {
  const [filteredPlaces, setFilteredPlaces] = useState<PlaceByTextSearch[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSearchQuery = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `api/search?${buildSearchQueryString({ country, county, category })}`
      );
      // const response = await fetch(
      //   `api/search`
      // );wa
      const data = await response.json();
      setFilteredPlaces(data);
      console.log("BY SEARCH", data);
      // const filteredTypes = filterNaturalFeatures(data);
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
  }, [country, county, category]);

  return { filteredPlaces, loading, error, fetchSearchQuery };
};
