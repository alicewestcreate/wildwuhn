"use client";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import SearchRow from "./SearchRow";
import { buildSearchQueryString } from "@/utils/buildSearchQueryString";
import {
  COUNTIES_ENGLAND,
  COUNTIES_SCOTLAND,
  COUNTIES_WALES,
  COUNTRIES,
  CATEGORIES,
  ENGLAND,
  SCOTLAND,
  WALES,
} from "@/const";
import { QuerySearchContext } from "../_context/SearchResultsContainer";

const SearchNavigation = () => {
  const {
    setCountry,
    setCounty,
    setCategory,
    countryValue,
    countyValue,
    categoryValue,
  } = useContext(QuerySearchContext) || {};

  const router = useRouter();

  const pushRouter = () => {
    const filters = {
      country: countryValue,
      county: countyValue,
      category: categoryValue,
    };

    if (filters) {
      const queryString = buildSearchQueryString(filters);
      router.push(`/search?${queryString}`);
    }
  };

  useEffect(() => {
    pushRouter();
  }, [countryValue, countyValue, categoryValue]);

  const getCorrospondingCounties = () => {
    if (countryValue === WALES) {
      return COUNTIES_WALES;
    }
    if (countryValue === SCOTLAND) {
      return COUNTIES_SCOTLAND;
    }
    return COUNTIES_ENGLAND;
  };


  return (
    <div className="fixed flex-col w-full justify-center py-5 gap-10  bg-white">
      <SearchRow
        searchItems={COUNTRIES}
        setState={setCountry}
        state={countryValue}
      />
      <SearchRow
        searchItems={getCorrospondingCounties()}
        setState={setCounty}
        state={countyValue}
      />

      <SearchRow
        searchItems={CATEGORIES}
        setState={setCategory}
        state={categoryValue}
        withIcons
      />
    </div>
  );
};

export default SearchNavigation;
