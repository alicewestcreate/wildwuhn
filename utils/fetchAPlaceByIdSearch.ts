export const fetchAPlaceByIdSearch = async (placeID: string) => {
    try {
      const response = await fetch(`api/${placeID}`);
      if (response.ok) {
        const data = await response.json();
        console.log("BY PLACE", data);
        return data;
      }
      return null;
    } catch (error) {
      console.error("Error fetching place from ()=> getOneId:", error);
    }
  };
