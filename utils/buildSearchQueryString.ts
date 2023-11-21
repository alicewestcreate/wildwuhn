type FilterObject = {
  [key: string]: string | undefined;
};

export const buildSearchQueryString = (filters: FilterObject) => {
  const queryList = Object.entries(filters)
    // filter all values that are falsey
    .filter(([_, value]) => Boolean(value))
    // map all values in the this template literal
    .map(([key, value]) => `${key}=${value}`);

  // join the array with '&'
  return queryList.join("&");
};
