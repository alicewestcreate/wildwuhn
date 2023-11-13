export const fetchMultiplePlacesById = async (places: PlaceByTextSearch[]) => {
  try {
    const placeIDs = places.map((place) => place.place_id);

    const promises = placeIDs.map(async (id) => {
      const response = await fetch(`api/${id}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      return null;
    });

    const PlacesByIdArray = await Promise.all(promises);
    return PlacesByIdArray;
  } catch (error) {
    console.error("Error ()=> fetchMultiplePlacesById:", error);
  }
};

// useEffect(() => {
//   const fetchPlaceById = async () => {
//     try {
//       const placeIds = filteredPlaces.map((place) => place.place_id);
//       const promises = placeIds.map(async (id) => {
//         const response = await fetch(`api/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           return data;
//         }
//         return null;
//       });

//       const placeData = await Promise.all(promises);
//       setPlaceById(placeData);
//     } catch (error) {
//       console.error("Error fetching place data:", error);
//     }
//   };

//   fetchPlaceById();
// }, [filteredPlaces]);
