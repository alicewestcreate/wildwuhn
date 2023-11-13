import Photo from "./Photo";




const PlaceCards = ({places}: {places:PlaceByTextSearch[]}) => {




  return (
    <div className="flex w-full">
      <div className="flex flex-wrap justify-center gap-8 mt-56 items-stretch">
        {places &&
          places.length &&
          places.map((place, i) => (
            <div key={i} className="card flex flex-col w-80 ">
              <div className="card-image">
                <Photo place={place}/>
              </div>
              <div className="card-info flex flex-col p-4 h-full justify-between">
                <h4 className="text-lg mb-2">{place.name}</h4>
                <p className="text-gray-600 mb-4">
                  {/* {place.editorial_summary?.overview || "No summary available"} */}
                </p>
                <div className="flex justify-between">
                  <p className="text-md">
                    5 miles
                  </p>
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
