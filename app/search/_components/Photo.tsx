import { getPhotoURL } from "@/utils/getPhotoURL";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { fetchAPlaceByIdSearch } from "@/utils/fetchAPlaceByIdSearch";
import { QuerySearchContext } from "@/app/search/_context/SearchResultsContainer";

const Photo = ({ place }: { place: PlaceByTextSearch }) => {
  
  const { countryValue, countyValue, categoryValue }  = useContext(QuerySearchContext) || {}
  const [image, setImage] = useState("");

  useEffect(() => {
    const sourceImage = async () => {
      const finalImage = await sourcePhotoReference(place);
      setImage(finalImage);
    };
    sourceImage();
  }, [countryValue, countyValue, categoryValue]);

  const sourcePhotoReference = async (place: PlaceByTextSearch) => {
    let photoReferece = place.photos?.[0].photo_reference;
    if (!photoReferece) {
      const aPlaceByIdSearch: PlaceByIdSearch = await fetchAPlaceByIdSearch(
        place.place_id
      );
      photoReferece = aPlaceByIdSearch?.photos?.[0]?.photo_reference;
    }
    return photoReferece ? getPhotoURL(photoReferece) : "/next.svg";
  };

  return image ? (
    <Image
      src={image}
      width={400}
      height={400}
      alt={"photo"}
      className="w-80 h-80 object-cover rounded-xl"
    />
  ) : null;
};

export default Photo;
