"use client";
import { useSearchQuery } from "@/utils/useSearchQuery";
import SearchNavigation from "../_components/SearchNavigation";
import { useRouter } from "next/router";
import SearchResultsContainer from "../_context/SearchResultsContainer";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const SearchParams = ({ params, searchParams }: Props) => {
  // console.log("SearchParams PAGE", params, searchParams);

  return (
    <>
      <SearchResultsContainer />
    </>
  );
};

export default SearchParams;
