"use client";
import React, { useEffect, useState, Suspense } from "react";
import { getPhoto } from "@/utils/getPhoto";
import Image from "next/image";

interface PlaceCardProps {
  name: string;
  place_id: string;
  editorial_summary?: {
    language: string;
    overview: string;
  };
  photos: [
    {
      photo_reference: string;
    }
  ];
  rating: number;
  user_ratings_total: number;
  icon_background_color: string,
  
}

const PlaceCards = () => {
  const [places, setPlaces] = useState<PlaceCardProps[]>([]);
  const [placeById, setPlaceById] = useState<PlaceCardProps[]>();

  useEffect(() => {
    const fetchSearchQuery = async () => {
      const response = await fetch("api");
      const data = await response.json();
      setPlaces(data);
    };

    fetchSearchQuery();
  }, []);

  useEffect(() => {
    const fetchPlaceById = async () => {
      try {
        const placeIds = places.map((place) => place.place_id);
        const promises = placeIds.map(async (id) => {
          const response = await fetch(`api/${id}`);
          if (response.ok) {
            const data = await response.json();
            return data;
          }
          return null;
        });

        const placeData = await Promise.all(promises);
        setPlaceById(placeData);
      } catch (error) {
        console.error("Error fetching place data:", error);
      }
    };

    fetchPlaceById();
  }, [places]);



  console.log(placeById)
  return (
    <div>
      <div></div>
      <div className="flex flex-wrap gap-5">
        {placeById &&
          placeById.length &&
          placeById.map((place, i) => (
            <div key={i} className="card flex flex-col w-80 border-2">
              <div className="card-image w-full h-full">
                <Image
                  src={getPhoto(place.photos[0].photo_reference)}
                  width={400}
                  height={400}
                  alt={"photo"}
                  className="w-80 h-80 object-cover rounded-xl"
                ></Image>
              </div>
              <div className="card-info flex flex-col p-4">
                <h2 className="text-xl font-bold mb-2">{place.name}</h2>
                <p className="text-gray-600 mb-4">
                {place.editorial_summary?.overview || "No summary available"}
                </p>
                <div className="flex justify-between">
                  <p className="text-lg font-bold">{place.icon_background_color}</p>
                  <p className="text-gray-600">
                    {place.rating} ({place.user_ratings_total})
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlaceCards;
