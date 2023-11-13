export const filterNaturalFeatures = (places) => {

  // console.log(places);

  function checkType(place) {
    return place.types[0] === "natural_feature" ||  place.types[0] === "park";
  }
  const naturalFeaturesOnly = places.filter(checkType);

  return naturalFeaturesOnly;
};
